// If user is logged in, 
// Problem.renderProblemForm()
// Problem.fetchProblems()
// else, load app.js that leads to login/signup page
loadLoginScreen()
console.log(localStorage)
// if there is a local storage, navigate to problems.
if (localStorage.loggedIn) {
    container.innerHTML = ""
    Problem.start()
}

// // INCOMING CHANGE BELOW
// const getStarted = document.getElementById("get-started")
// getStarted.addEventListener("click", Problem.start)
// // start app on click for now, but nav to signup page once auth is set up

// const solveAProblem = document.getElementById("solve-a-problem")
// solveAProblem.addEventListener("click", Problem.start)
// // start app on click for now, but nav to signup page once auth is set up
