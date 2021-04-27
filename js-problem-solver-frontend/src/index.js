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