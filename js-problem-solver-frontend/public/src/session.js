function loadLandingPage() {
    const nav = document.getElementById("desktop-nav")
    nav.classList.remove("auth-page-nav")

    container.innerHTML = `
        <header class="hero__container">
            <div class="hero__left">
                &nbsp;
            </div>
            <div class="hero__right">
                <h1 class="heading-primary">We all have problems. Let us solve yours!</h1>
                <a class="btn" id="get-started" href=#>Get Started</a>
            </div>
        </header>
        <!-- end of hero section -->
        <section class="selling-points__container">
            <h2 class="heading-secondary">We're here to get you there</h2>
            <ul class="selling-points__list">
                <li class="selling-points__item">
                    <h3 class="heading-tertiary">Easy to use</h3>
                    <p>Solving problems  has never been so easy. Get started in minutes!</p>
                </li>
                <div class="line">&nbsp;</div>
                <li class="selling-points__item">
                    <h3 class="heading-tertiary">You're protected</h3>
                    <p>All problems are anonymous to ensure complete privacy.</p>
                </li>
                <div class="line">&nbsp;</div>
                <li class="selling-points__item">
                    <h3 class="heading-tertiary">Try for free</h3>
                    <p>Solve your first problem for free, there are no hidden fees. Yes—we’re serious.</p>
                </li>
            </ul>
        </section>
        <section class="testimonials__container">
            <h2 class="heading-secondary">See what people are saying about us</h2>
            <ul class="testimonials__list">
                <li class="testimonial__item">
                    <img class="testimonial__img" src="img/pexels-5321674.png">
                    <div class="testimonial__text">
                        <p>Cindy S</p>
                        <p>“Yooooo... I had a problem and now it’s solved.”</p>
                    </div>
                </li>
                <li class="testimonial__item">
                    <img  class="testimonial__img" src="img/eduardo-dutra-614571-unsplash.png">
                    <div class="testimonial__text">
                        <p>Rahim H</p>
                        <p>“Wow. I’m rich now! Are you serious bro? Problem Solver rocks!!”</p>
                    </div>
                </li>
                <li class="testimonial__item">
                    <img class="testimonial__img" src="img/jan-abellan-Vf6Voxf-q80-unsplash.png">
                    <div class="testimonial__text">
                        <p>John A</p>
                        <p>“That war never happened. Thank you.”</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="call-to-action">
            <h2 class="heading-secondary">Let's do this.</h2>
            <a class="btn" id="solve-a-problem" href=#>Solve a problem</a>
        </section>
    `
    const loginButton = document.getElementById("login-button")
    const signupButton = document.getElementById("signup-button")
    const getStarted = document.getElementById("get-started")
    const solveAProblem = document.getElementById("solve-a-problem")

    loginButton.classList.remove("inactive")
    signupButton.classList.remove("inactive")

    loginButton.addEventListener("click", event => loadLoginPage())
    signupButton.addEventListener("click", event => loadSignupPage())
    getStarted.addEventListener("click", event => loadSignupPage())
    solveAProblem.addEventListener("click", event => loadSignupPage())
}

function loadLoginPage() {
        container.innerHTML = `
            <article class="session-page">
				<div class="auth__container">
					<div class="auth__left">
						<img class="auth__img" src="img/auth-design.png">
					</div>
					<div class="auth__right">
						<p>Welcome back</p>
						<p>Sign in</p>
						<form id="login__form">
							<label>Email</label>
							<input type="text" name="email" id="login-email" value="Google@gmail.com"></input>
							<label>Password</label>
							<input type="password" name="password" id="login-password" value="GoogleLove"></input>
							<div class="checkbox-container inactive">
								<div class="checkbox"></div>
								<p>Keep me logged in</p>
							</div>
							<input id="session-page-button" type="submit" value="Sign in"></input>
						</form>
					</div>
				</div>
				<footer class="inactive">
					<ul class="fine-print">
						<li>Terms and conditions</li>
						<li>Privacy policy</li>
						<li>Contact us</li>
					</ul>
				</footer>
			</article>
        `
    
        const nav = document.getElementById("desktop-nav")
        nav.classList.add("auth-page-nav")
    
        const loginForm = document.getElementById("login__form")
    
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const email = document.getElementById("login-email").value
            const password = document.getElementById("login-password").value
            event.target.reset()
    
            const jsObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                    // "Access-Control-Allow-Origin": "*"
                    // todo: change wildcard to link of site hosting frontend
                    // this allows us to send from any origin
                },
                body: JSON.stringify({user: {email: email, password: password}})
              }
              
            // debugger
            fetch("https://problem-solver-api.herokuapp.com/login", jsObj)
                .then(resp => resp.json())
                .then(jsObj => {
                    console.log(jsObj)
                    if (jsObj.logged_in) {
                        sessionStorage.setItem("username", jsObj.session.username)
                        sessionStorage.setItem("userId", jsObj.session.user_id)
                        sessionStorage.setItem("loggedIn", true)
                        sessionStorage.setItem("token", jsObj.session.token)

                        console.log(sessionStorage)
    
                        container.innerHTML = ""
    
                        Problem.start()
                        // todo: ^^ONCE LOGGED IN, LOAD THE WELCOME SCREEN INSTEAD OF NAVIGATING TO PROBLEMS RIGHT AWAY
                        // const userId = jsObj.session.id
                        // ^^what is this variable set for???
                        // add welcome message to display user information.
                    } else {
                        console.log(jsObj.error)
                        alert("Please enter a valid login.")
                        // todo: change alert to render something prettier
    
                    }
                })
                .catch(error => {
                    console.log(error)
                    alert("Please enter a valid login.")
                })
        })
}

function loadSignupPage() {
        container.innerHTML = `
            <article class="session-page">
                <div class="auth__container">
                    <div class="auth__left">
                        <img class="auth__img" src="img/auth-design.png">
                    </div>
                    <div class="auth__right">
                        <p>Welcome to Problem Solver</p>
                        <p>Create an account to get started</p>
                        <form id="signup__form">
                            <label>Username</label>
                            <input type="text" name="username" id="signup-username"></input>
                            <label>Email</label>
                            <input type="text" name="email" id="signup-email"></input>
                            <label>Password</label>
                            <input type="text" name="password" id="signup-password"></input>
                            <label>Confirm Password</label>
                            <input type="text" name="password-confirmation" id="signup-password-confirmation"></input>
                            <div class="checkbox-container inactive">
                                <div class="checkbox"></div>
                                <p>Keep me logged in</p>
                            </div>
                            <input id="session-page-button" type="submit" value="Sign up"></input>
                        </form>
                    </div>
                </div>
                <footer class="inactive">
                    <ul class="fine-print">
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>
                        <li>Contact us</li>
                    </ul>
                </footer>
            </article>
        `
    
        const nav = document.getElementById("desktop-nav")
        nav.classList.add("auth-page-nav")
    
        const signupForm = document.getElementById("signup__form")
    
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const username = document.getElementById("signup-username").value
            const email = document.getElementById("signup-email").value
            const password = document.getElementById("signup-password").value
            event.target.reset()
    
            const jsObj = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({user: {username: username, email: email, password: password}})
            }
    
            fetch("https://problem-solver-api.herokuapp.com/signup", jsObj)
            .then(resp => resp.json())
            .then(jsObj => {
                console.log(jsObj)
                if (jsObj.logged_in) {
                    sessionStorage.setItem("username", jsObj.session.data.attributes.username)
                    sessionStorage.setItem("userId", jsObj.session.data.id)
                    sessionStorage.setItem("loggedIn", true)
                    console.log(sessionStorage)
                    
                    container.innerHTML = ""
                    
                    Problem.start()
                    // todo: ^^ONCE LOGGED IN, LOAD THE WELCOME SCREEN INSTEAD OF NAVIGATING TO PROBLEMS RIGHT AWAY
                    // add welcome message to display user information.
                } else {
                    console.log(error)
                    alert("Cannot create user.")
                    // change alert to render something prettier instead of an ugly alert popup
                }
            })
            .catch( error => {
                console.log(error)
                alert("Please try again.")
            })
        })
}

function logout() {
    const logoutButton = document.getElementById("logout-button")

    const obj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://problem-solver-api.herokuapp.com/logout", obj)

    sessionStorage.clear()
    location.reload()
    
    logoutButton.classList.add("inactive")
}