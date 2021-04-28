function loadLandingPage() {
    container.innerHTML = `
        <header class="hero-container">
            <div class="right">
                <h2>We all have problems. Let us solve yours!</h2>
                <a class="btn" id="get-started" href=#>Get Started</a>
            </div>
            <img src="./img/pexels-nathan-cowley-897817.png">
        </header>
        <!-- end of hero section -->
        <section class="selling-points-container">
            <h3>We're here to get you there</h3>
            <ul class="selling-points">
                <li>
                    <h4>Easy to use</h4>
                    <p>Solving problems  has<br>never been so easy. Get started in minutes!</p>
                    <div class="line"></div>
                </li>
                <li>
                    <h4>You're protected</h4>
                    <p>All problems are<br>anonymous to ensure complete privacy.</p>
                    <div class="line"></div>
                </li>
                <li>
                    <h4>Try for free</h4>
                    <p>Solve your first problem for free, there are no hidden fees. Yes—we’re serious.</p>
                </li>
            </ul>
        </section>
        <section class="testimonials-container">
            <h3>See what people are saying about us</h3>
            <ul class="testimonials">
                <li>
                    <img src="img/pexels-háº£i-nguyá»_n-5321674.png">
                    <div>
                        <h5>Cindy S</h5>
                        <p>“Yooooo... I had a problem and now it’s solved.”</p>
                    </div>
                </li>
                <li>
                    <img src="img/eduardo-dutra-614571-unsplash.png">
                    <div>
                        <h5>Rahim H</h5>
                        <p>“Wow. I’m rich now! Are you serious bro? Problem Solver rocks!!”</p>
                    </div>
                </li>
                <li>
                    <img src="img/jan-abellan-Vf6Voxf-q80-unsplash.png">
                    <div>
                        <h5>John A</h5>
                        <p>“That war never happened. Thank you.”</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="call-to-action">
            <h3>Let's do this.</h3>
            <a class="btn" id="solve-a-problem" href=#>Solve a problem</a>
        </section>
    `
    const loginButton = document.getElementById("login-button")
    const signupButton = document.getElementById("signup-button")
    loginButton.classList.remove("inactive")
    signupButton.classList.remove("inactive")

    loginButton.addEventListener("click", event => loadLoginScreen())
    // signupButton.addEventListener("click", event => loadSignupScreen())

    // // INCOMING CHANGE BELOW
    // const getStarted = document.getElementById("get-started")
    // getStarted.addEventListener("click", event => loadSignupPage())

    // const solveAProblem = document.getElementById("solve-a-problem")
    // solveAProblem.addEventListener("click", event => loadSignupPage())
}

function loadLoginScreen() {
    container.innerHTML = `
        <div class="login-container">
            <form id="login-form">
                <label>Login</label><br>
                <input type="text" name="email" placeholder="Email" id="login-email"></input><br>
                <input type="password" name="password" placeholder="Password" id="login-password"></input><br>
                <input type="submit" value="Login"></input>
            </form>
        </div>
        <div>
            <form id="signup-form">
                <label>Sign Up</label><br>
                <input type="text" name="username" placeholder="Username" id="signup-username"></input><br>
                <input type="text" name="email" placeholder="Email" id="signup-email"></input><br>
                <input type="password" name="password" placeholder="Password" id="signup-password"></input><br>
                <input type="password" name="password-confirmation" placeholder="Confirm Password" id="signup-password-confirmation"></input><br>
                
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    `
    document.body.style.background = "cadetblue"

    const loginButton = document.getElementById("login-button")
    const signupButton = document.getElementById("signup-button")
    loginButton.classList.add("inactive")
    signupButton.classList.add("inactive")

    const loginForm = document.getElementById("login-form")

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const email = document.getElementById("login-email").value
        const password = document.getElementById("login-password").value
        event.target.reset()

        const jsObj = {
            method: "POST",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({user: {email: email, password: password}})
          }

        fetch("http://localhost:3000/login", jsObj)
            .then(resp => resp.json())
            .then(jsObj => {
                console.log(jsObj)
                if (jsObj.logged_in) {
                    localStorage.setItem("username", jsObj.session.username)
                    localStorage.setItem("userId", jsObj.session.id)
                    localStorage.setItem("loggedIn", true)
                    console.log(localStorage)

                    container.innerHTML = ""

                    Problem.start()
                    const userId = jsObj.session.id
                    // add welcome message to display user information.
                    // if user is already logged in, redirect to another page
                } else {
                    console.log(error)
                    alert("Please enter a valid login.")
                }
            })
            .catch( error => {
                console.log(error)
                alert("Please enter a valid login.")
            })
    })

    const signupForm = document.getElementById("signup-form")

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const username = document.getElementById("signup-username").value
        const email = document.getElementById("signup-email").value
        const password = document.getElementById("signup-password").value
        const passwordConfirmation = document.getElementById("signup-password-confirmation").value
        event.target.reset()

        const jsObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({user: {username: username, email: email, password: password, password_confirmation: passwordConfirmation}})
        }

        fetch("http://localhost:3000/signup", jsObj)
        .then(resp => resp.json())
        .then(jsObj => {
            console.log(jsObj)
            container.innerHTML = ""
            Problem.renderProblemForm()
            Problem.fetchProblems()
            // add welcome message to display user information.
            // if user is already logged in, redirect to another page
        })
        .catch( error => {
            console.log(error)
            alert("Please enter a valid login.")
        })
    })

    // TODO: when the login form is submit
    // add an event listener to the sign up form to create a new user.
}