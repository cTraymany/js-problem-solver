const form = document.getElementById("problemForm")
form.addEventListener("submit", Problem.createProblem)

Problem.fetchProblems()