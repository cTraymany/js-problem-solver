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

    const loginForm = document.getElementById("login-form")

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
            },
            body: JSON.stringify({user: {email: email, password: password}})
          }

        fetch("http://localhost:3000/login", jsObj)
            .then(resp => resp.json())
            .then(jsObj => {
                console.log(jsObj)
                // if jsObj has an id, do the following.
                    container.innerHTML = ""
                    Problem.renderProblemForm()
                    Problem.fetchProblems()
                    // add welcome message to display user information.
                    // if user is already logged in, redirect to another page
                // end
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