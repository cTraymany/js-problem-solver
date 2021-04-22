function loadLoginScreen() {
    container.innerHTML = `
        <div class="login-container">
            <form id="login-form">
                <label>Email: </label>
                <input type="text" name="email" id="login-email"></input><br>

                <label>Password: </label>
                <input type="password" name="password" id="login-password"></input><br>

                <input type="submit" value="Login"></input>
            </form>
        </div><br><br>
        <div>
            <form id="signup-form">
                <label>Username: </label>
                <input type="text" name="username"></input><br>
                
                <label>Email: </label>
                <input type="text" name="email"></input><br>
                
                <label>Password: </label>
                <input type="password" name="password"></input><br>
                
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

        // example fetch below; example jsObj above
        fetch("http://localhost:3000/login", jsObj)
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

    const signupForm = document.getElementById("signup-form")

    signupForm.addEventListener("submit", (event) => {
            event.preventDefault()
            console.log("Create a new user!")
    })

    // TODO: when the login form is submit
    // you must create a new user session and navigate to the problems page.
    // add an event listener to the sign up form to create a new user.
    // set up user#create and session#create actions in rails.
}