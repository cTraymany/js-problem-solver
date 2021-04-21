function loadLoginScreen() {
    container.innerHTML = `
        <div class="login-container">
            <form id="login-form">
                <label>Email: </label>
                <input type="text"></input><br>

                <label>Password: </label>
                <input type="password"></input><br>

                <input type="submit" value="Login"></input>
            </form>
        </div><br><br>
        <div>
            <form>
                <label>Username: </label>
                <input type="text"></input><br>
                
                <label>Email: </label>
                <input type="text"></input><br>
                
                <label>Password: </label>
                <input type="password"></input><br>
                
                <input type="submit" value="Sign Up"></input>
            </form>
        </div>
    `

}