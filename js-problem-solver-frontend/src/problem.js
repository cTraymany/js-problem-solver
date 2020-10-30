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
        p.addEventListener("click", this.showSolutionsOnClick.bind(this))
    }
    
    showSolutionsOnClick() {
        const container = document.getElementById("container")
        const problemH3 = document.createElement("h3")
        const problemP = document.createElement("p")
        const ul = document.createElement("ul")
        const answers = document.createElement("h3")

        container.innerHTML = ""
        
        problemH3.innerHTML = this.title
        problemP.innerHTML = this.description
        answers.innerHTML = "Solutions"
        
        container.appendChild(problemH3)
        container.appendChild(problemP)
        container.appendChild(answers)
        container.appendChild(ul)

        if (this.solutions.length) {
            this.solutions.forEach(solution => {
                const showSolution = document.createElement("li")
                showSolution.id = solution.id
                showSolution.innerHTML = solution.content
                ul.appendChild(showSolution)
            })
        } else {
            const sorry = document.createElement("p")
            sorry.innerHTML = "<em>No current solutions</em>"
            container.appendChild(sorry)
        }

        // Solution.createSolution()
        const solutionForm = document.createElement("form")
        const label = document.createElement("label")
        const input = document.createElement("input")
        const submit = document.createElement("input")

        label.innerHTML = "Give solution: "
        input.setAttribute("type", "text")
        input.setAttribute("id", "solutionContent")
        submit.setAttribute("type", "submit")

        solutionForm.appendChild(label)
        solutionForm.appendChild(input)
        solutionForm.appendChild(submit)
        container.appendChild(solutionForm)
        // end of createSolution

        solutionForm.addEventListener("submit", this.submitSolution.bind(this))
    }

    submitSolution() {
        event.preventDefault()
        // debugger
        const content = document.getElementById("solutionContent").value
        const problemId = this.id
        // const solution = {solution: {content: content, problem_id: problemId}}


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