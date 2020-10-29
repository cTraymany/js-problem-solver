class Problem {
    static all = []

    constructor(problem) {
        this.title = problem.attributes.title;
        this.description = problem.attributes.description
        this.id = problem.id
        Problem.all.push(this)
    }

    renderProblem() {
        const div = document.getElementById("problemsContainer")
        let p = document.createElement("p")
        p.innerText = this.title
        div.appendChild(p)
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