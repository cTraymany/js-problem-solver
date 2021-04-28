class Problem {
    static all = []

    constructor(problem) {
        this.title = problem.attributes.title;
        this.description = problem.attributes.description

        
        this.id = problem.id
        this.userId = problem.attributes.user_id
        this.solutions = problem.attributes.solutions.map(solution => new Solution(solution))
        Problem.all.push(this)
    }

    static start() {
        const container = document.getElementById("container")

        document.body.style.background = "cadetblue"
        container.innerHTML = "";

        Problem.renderProblemForm()
        Problem.fetchProblems()

        const logoutButton = document.getElementById("logout-button")
        logoutButton.classList.remove("inactive")

        logoutButton.addEventListener("click", event => logout())
    }

    static renderProblemForm() {
        const container = document.getElementById("container")
        const formContainer = document.createElement("div")
        const problemForm = document.createElement("form")
        
        const label1 = document.createElement("label")
        const label2 = document.createElement("label")
        const input1 = document.createElement("input")
        const input2 = document.createElement("input")
        const submit = document.createElement("input")
        
        formContainer.setAttribute("id", "formContainer")
        problemForm.setAttribute("id", "problemForm")
        
        label1.innerHTML = "Title "
        input1.setAttribute("type", "text")
        input1.setAttribute("id", "problemTitle")
        label2.innerHTML = "Description "
        input2.setAttribute("type", "text")
        input2.setAttribute("id", "problemDescription")
        submit.setAttribute("type", "submit")
        submit.setAttribute("class", "btn-primary")
        
        problemForm.append(label1,input1, label2, input2, submit, document.createElement("br"))
        
        container.appendChild(formContainer)
        
        formContainer.appendChild(problemForm)
        
        problemForm.addEventListener("submit", Problem.createProblem)
    }
    
    showSolutionsOnClick() {
        const container = document.getElementById("container")
        const problemH3 = document.createElement("h3")
        const problemP = document.createElement("p")
        const ul = document.createElement("ul")
        const answers = document.createElement("h3")
        const back = document.createElement("button")
        const delButton = document.createElement("button")
        const home = document.createElement("button")

        container.innerHTML = ""
        Solution.createSolutionForm()
        
        problemH3.innerHTML = this.title
        problemP.innerHTML = this.description
        answers.innerHTML = "Solutions"
        ul.setAttribute("id", "solutionsUl")

        delButton.innerHTML = "Delete"
        delButton.setAttribute("id", "delete")
        delButton.setAttribute("class", "btn-primary")
        delButton.addEventListener("click", this.deleteProblem.bind(this))

        home.innerHTML = "Home"
        home.setAttribute("id", "home")
        home.setAttribute("class", "btn-primary")
        home.addEventListener("click", () => {
            const container = document.getElementById("container")
            container.innerHTML = ""
            
            App.start()
            // separate method in app so that problems don't render twice
        })

        back.innerHTML = "Back"
        back.setAttribute("id", "back")
        back.setAttribute("class", "btn-primary")
        back.addEventListener("click", () => {
            const container = document.getElementById("container")
            container.innerHTML = ""
            
            Problem.renderProblemForm()
            Problem.renderProblems()
        })
        
        container.append(problemH3, problemP, answers, ul, back, delButton)
        // container.append(home)
        
        this.solutions.forEach(solution => {
            const showSolution = document.createElement("li")
            showSolution.id = solution.id
            showSolution.innerHTML = solution.content
            ul.appendChild(showSolution)
        })
        
        solutionForm.addEventListener("submit", Solution.submitSolution.bind(this))
    }
    
    static renderProblems() {
        const container = document.getElementById("container")
        const problemsContainer = document.createElement("div")
        const h3 = document.createElement("h3")

        problemsContainer.setAttribute("id", "problemsContainer")
        h3.innerHTML = "Problems"

        problemsContainer.appendChild(h3)
        container.appendChild(problemsContainer)

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
                alert("Error! Please try again.")
            })
        }
        
    static createProblem(event) {
        event.preventDefault()
        
        const title = document.getElementById("problemTitle").value
        const description = document.getElementById("problemDescription").value
        const userId = localStorage.userId

        event.target.reset()
        
        const obj = {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({problem: {title: title, description: description, user_id: userId}})
        }
        
        fetch("http://localhost:3000/problems", obj)
        .then(response => response.json())
        .then(jsObj => {
            let newProblem = new Problem(jsObj.data)
            newProblem.renderProblem()
        })
        .catch(error => {
            alert("Please enter a valid title and description.")
        })
    }
    
    renderProblem() {
        const div = document.getElementById("problemsContainer")
        const p = document.createElement("p")
        
        
        p.innerText = this.title
        p.id = this.id
        p.addEventListener("click", this.showSolutionsOnClick.bind(this))        
        div.appendChild(p)
    }

    deleteProblem() {
        const container = document.getElementById("container")
        const obj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: `${this.id}`})
        }
        
        fetch(`http://localhost:3000/problems/${this.id}`, obj)

        container.innerHTML = ""
        

        Problem.all = Problem.all.filter(problem => {
            return problem.id != parseInt(this.id)
        })

        Problem.renderProblemForm()
        Problem.renderProblems()     
    }
}