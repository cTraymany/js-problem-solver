function loadLoginScreen() {
    container.innerHTML = `
        <div class="login-container">
            <form id="login-form">
                <label>Email: </label>
                <input type="text" name="email"></input><br>

                <label>Password: </label>
                <input type="password" name="password"></input><br>

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

    })

    // TODO: when the login form is submit
    // you must create a new user session and navigate to the problems page.
    // add an event listener to the sign up form to create a new user.
    // set up user#create and session#create actions in rails.
}