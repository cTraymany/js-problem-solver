class Problem {
    static all = []

    constructor(problem) {
        this.title = problem.attributes.title;
        this.description = problem.attributes.description
        this.id = problem.id
        this.solutions = problem.attributes.solutions.map(solution => new Solution(solution))
        Problem.all.push(this)
    }

    renderProblem() {
        const div = document.getElementById("problemsContainer")
        const p = document.createElement("p")
        p.innerText = this.title
        p.id = this.id
        div.appendChild(p)
        p.addEventListener("click", this.showSolutionOnClick.bind(this))
    }
    
    showSolutionOnClick() {
        const container = document.getElementById("container")
        const problemH3 = document.createElement("h3")
        const problemP = document.createElement("p")
        const ul = document.createElement("ul")
        const answers = document.createElement("h3")

        container.innerHTML = ""
        



    }

    static renderProblems() {
        for (const problem of this.all) {
            problem.renderProblem()
        }
    }
    static fetchProblems() {
        fetch("http://localhost:3000/problems")
            .then(resp => resp.json())
            .then(probs => {
                for (const prob of probs.data) {
                    let newProblem = new Problem(prob)
                    // console.log(newProblem)
                }
                this.renderProblems()
            })
    }

    static createProblem() {
        event.preventDefault()
        const title = document.getElementById("problemTitle").value
        const description = document.getElementById("problemDescription").value
        document.getElementById("problemTitle").value = ""
        document.getElementById("problemDescription").value = ""
    
        const obj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({problem: {title: title, description: description}})
          }
    
        fetch("http://localhost:3000/problems", obj)
          .then(resp => resp.json())
          .then(jsObj => {
            let newProblem = new Problem(jsObj.data)
            newProblem.renderProblem()
          })
    }
}