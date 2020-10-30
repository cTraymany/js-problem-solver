class Solution {
    constructor(solution) {
        this.content = solution.attributes.content
        this.id = solution.id
        this.problemId = solution.attributes.problem_id
    }

    static createSolutionForm() {
        const solutionForm = document.createElement("form")
        const label = document.createElement("label")
        const input = document.createElement("input")
        const submit = document.createElement("input")
        const ul = document.getElementById("solutionsUl")

        solutionForm.setAttribute("id", "solutionForm")
        label.innerHTML = "Give solution "
        input.setAttribute("type", "text")
        input.setAttribute("id", "solutionContent")
        submit.setAttribute("type", "submit")
        submit.setAttribute("class", "btn-primary")

        container.appendChild(solutionForm)
        solutionForm.appendChild(label)
        solutionForm.appendChild(input)
        solutionForm.appendChild(submit, document.createElement("br"))

    }

    static submitSolution() {
        event.preventDefault()
        const content = document.getElementById("solutionContent").value
        const problemId = this.id

        document.getElementById("solutionContent").value = ""

        const obj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({solution: {content: content, problem_id: problemId}})
          }
    
        fetch("http://localhost:3000/solutions", obj)
          .then(resp => resp.json())
          .then(jsObj => {
            const newSolution = new Solution(jsObj.data)
            const foundProb = Problem.all.find(prob => parseInt(prob.id) === newSolution.problemId)
            
            foundProb.solutions.push(newSolution)

            const showSolution = document.createElement("li")
            showSolution.id = newSolution.id
            showSolution.innerHTML = newSolution.content
            document.getElementById("solutionsUl").appendChild(showSolution)
          })
    }
}