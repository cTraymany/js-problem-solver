class Problem {
    static all = []

    constructor(problem) {
        this.title = problem.attributes.title;
        this.description = problem.attributes.description
        this.id = problem.id
        this.solutions = problem.attributes.solutions.map(solution => new Solution(solution))
        Problem.all.push(this)
    }

    showSolutionsOnClick() {
        const container = document.getElementById("container")
        const problemH3 = document.createElement("h3")
        const problemP = document.createElement("p")
        const ul = document.createElement("ul")
        const answers = document.createElement("h3")
        const back = document.createElement("button")

        container.innerHTML = ""
        Solution.createSolutionForm()
        
        problemH3.innerHTML = this.title
        problemP.innerHTML = this.description
        answers.innerHTML = "Solutions"
        ul.setAttribute("id", "solutionsUl")
        back.innerHTML = "Back"
        back.setAttribute("id", "cancel")
        back.setAttribute("class", "btn-primary")
        back.addEventListener("click", () => location.reload())
        
        container.appendChild(problemH3)
        container.appendChild(problemP)
        container.appendChild(answers)
        container.appendChild(ul)
        container.appendChild(back)
        
        this.solutions.forEach(solution => {
            const showSolution = document.createElement("li")
            showSolution.id = solution.id
            showSolution.innerHTML = solution.content
            ul.appendChild(showSolution)
        })
        
        solutionForm.addEventListener("submit", Solution.submitSolution.bind(this))
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
                    new Problem(prob)
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
        .then((response) => response.json())
        .then(jsObj => {
            let newProblem = new Problem(jsObj.data)
            newProblem.renderProblem()
        })
        .catch( error => {
            alert("Please enter a valid title and description.")
        })
    }

    // async postProblem() {
    //     const url = "http://localhost:3000/problems"
    //     const response = fetch(url)
    //     const returnResponse = response
    // }

    
    renderProblem() {
        const div = document.getElementById("problemsContainer")
        const p = document.createElement("p")
        p.innerText = this.title
        p.id = this.id
        div.appendChild(p)
        p.addEventListener("click", this.showSolutionsOnClick.bind(this))
    }
}