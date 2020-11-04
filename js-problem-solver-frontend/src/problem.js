class Problem {
    static all = []

    constructor(problem) {
        this.title = problem.attributes.title;
        this.description = problem.attributes.description
        this.id = problem.id
        this.solutions = problem.attributes.solutions.map(solution => new Solution(solution))
        Problem.all.push(this)
    }

    static renderProblemForm() {
        const container = document.getElementById("container")
        const formContainer = document.createElement("div")
        const problemsContainer = document.createElement("div")
        const problemForm = document.createElement("form")

        const h3 = document.createElement("h3")
        const label1 = document.createElement("label")
        const label2 = document.createElement("label")
        const input1 = document.createElement("input")
        const input2 = document.createElement("input")
        const submit = document.createElement("input")
        
        formContainer.setAttribute("id", "formContainer")
        problemsContainer.setAttribute("id", "problemsContainer")
        problemForm.setAttribute("id", "problemForm")

        h3.innerHTML = "Problems"
        label1.innerHTML = "Title "
        input1.setAttribute("type", "text")
        input1.setAttribute("id", "problemTitle")
        label2.innerHTML = "Description "
        input2.setAttribute("type", "text")
        input2.setAttribute("id", "problemDescription")
        submit.setAttribute("type", "submit")
        submit.setAttribute("class", "btn-primary")
        
        problemForm.appendChild(label1)
        problemForm.appendChild(input1)
        problemForm.appendChild(label2)
        problemForm.appendChild(input2)
        problemForm.appendChild(submit, document.createElement("br"))

        container.appendChild(formContainer)
        container.appendChild(problemsContainer)
        
        formContainer.appendChild(problemForm)
        formContainer.appendChild(h3)

        problemForm.addEventListener("submit", Problem.createProblem)
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
        back.setAttribute("id", "back")
        back.setAttribute("class", "btn-primary")
        back.addEventListener("click", () => {
            const container = document.getElementById("container")
            container.innerHTML = ""

            Problem.renderProblemForm()
            Problem.renderProblems()
        })
        
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
            .catch(error => {
                console.error(error)
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
    
    renderProblem() {
        const div = document.getElementById("problemsContainer")
        const p = document.createElement("p")
        p.innerText = this.title
        p.id = this.id
        div.appendChild(p)
        p.addEventListener("click", this.showSolutionsOnClick.bind(this))
    }
}