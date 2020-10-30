class Solution {
    constructor(solution) {
        this.content = solution.attributes.content
        this.id = solution.id
        this.problemId = solution.attributes.problem_id
    }

    // static createSolution() {
    //     const solutionForm = document.createElement("form")
    //     // const container = document.getElementById("container")
    //     const label = document.createElement("label")
    //     const input = document.createElement("input")
    //     const submit = document.createElement("input")

    //     label.innerHTML = "Content"
    //     input.setAttribute("type", "text")
    //     input.setAttribute("id", "solutionContent")
    //     submit.setAttribute("type", "submit")

    //     solutionForm.appendChild(label)
    //     solutionForm.appendChild(input)
    //     solutionForm.appendChild(submit)
    //     container.appendChild(solutionForm)

    //     solutionForm.addEventListener("submit", Solution.submitSolutionForm)
    // }

    // static submitSolutionForm() {
    //     event.preventDefault()
    //     // debugger
    //     // 
    //     const content = document.getElementById("solutionContent").value
    //     document.getElementById("solutionContent").value = ""
    
    //     const obj = {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Accept": "application/json"
    //         },
    //         body: JSON.stringify({solution: {content: content}})
    //       }
    
    //     fetch("http://localhost:3000/problems", obj)
    //       .then(resp => resp.json())
    //       .then(jsObj => {
    //           debugger
    //         let newSolution = new Solution(jsObj.data)
    //         // newProblem.renderProblem()
    //       })
    //     // 
    //     // 
    // }
}