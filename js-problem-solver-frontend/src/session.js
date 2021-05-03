function loadLandingPage() {
    const nav = document.getElementById("desktop-nav")
    nav.classList.remove("auth-page-nav")

    container.innerHTML = `
        
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
            <article class="signin-page">
				<div class="auth-container">
					<div class="left">
						<div class="blue-rectangle"></div>
						<img id="auth-img" src="./img/auth-design.png">
					</div>
					<div class="right">
						<h2>Welcome back</h2>
						<h3>Sign in</h3>
						<form id="login-form">
							<label>Email</label><br>
							<input type="text" name="email" id="login-email"></input><br>
							<label>Password</label><br>
							<input type="password" name="password" id="login-password"></input><br>
							<div class="checkbox-container inactive">
								<div class="checkbox"></div>
								<p>Keep me logged in</p>
							</div>
							<input id="signin-page-button" type="submit" value="Sign in"></input>
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
                        // ^^ONCE LOGGED IN, LOAD THE WELCOME SCREEN INSTEAD OF NAVIGATING TO PROBLEMS RIGHT AWAY
                        // const userId = jsObj.session.id
                        // ^^what is this variable set for???
                        // add welcome message to display user information.
                    } else {
                        console.log(error)
                        alert("Please enter a valid login.")
                        // change alert to render something prettier
    
                    }
                })
                .catch( error => {
                    console.log(error)
                    alert("Please enter a valid login.")
                })
        })
}

function loadSignupPage() {
        container.innerHTML = `
            <article class="signup-page">
                <div class="auth-container">
                    <div class="left">
                        <div class="blue-rectangle"></div>
                        <img id="auth-img" src="./img/auth-design.png">
                    </div>
                    <div class="right">
                        <h2>Welcome to Problem Solver</h2>
                        <h3>Create an account to get started</h3>
                        <form id="signup-form">
                            <label>Username</label><br>
                            <input type="text" name="username" id="signup-username"></input><br>
                            <label>Email</label><br>
                            <input type="text" name="email" id="signup-email"></input><br>
                            <label>Password</label><br>
                            <input type="text" name="password" id="signup-password"></input><br>
                            <label>Confirm Password</label><br>
                            <input type="text" name="password-confirmation" id="signup-password-confirmation"></input><br>
                            <div class="checkbox-container inactive">
                                <div class="checkbox"></div>
                                <p>Keep me logged in</p>
                            </div>
                            <input id="signup-page-button" type="submit" value="Sign up"></input>
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
    
        const signupForm = document.getElementById("signup-form")
    
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault()
            const username = document.getElementById("signup-username").value
            const email = document.getElementById("signup-email").value
            const password = document.getElementById("signup-password").value
            event.target.reset()
    
            const jsObj = {
                method: "POST",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
                body: JSON.stringify({user: {username: username, email: email, password: password}})
            }
    
            fetch("http://localhost:3000/signup", jsObj)
            .then(resp => resp.json())
            .then(jsObj => {
                console.log(jsObj)
                if (jsObj.logged_in) {
                    localStorage.setItem("username", jsObj.session.data.attributes.username)
                    localStorage.setItem("userId", jsObj.session.data.id)
                    localStorage.setItem("loggedIn", true)
                    console.log(localStorage)
                    
                    container.innerHTML = ""
                    
                    Problem.start()
                    // ^^ONCE LOGGED IN, LOAD THE WELCOME SCREEN INSTEAD OF NAVIGATING TO PROBLEMS RIGHT AWAY
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
    
    fetch("http://localhost:3000/logout", obj)

    localStorage.clear()
    location.reload()
    
    logoutButton.classList.add("inactive")
}