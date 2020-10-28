fetch("http://localhost:3000/problems")
    .then(response => response.json())
    .then(problems => {
        // renderProblems()        
        const div = document.getElementById("problems")
        const ul = document.createElement("ul")
        div.appendChild(ul)
        
        for (const problem of problems.data) {
            let li = document.createElement("li")
            li.innerText = problem.attributes.title
            ul.appendChild(li)
        }
    })

// add event listener to show solutions on problem click

const form = document.getElementById("problemForm")
form.addEventListener("submit", submitForm)

function submitForm() {
    event.preventDefault()
    const title = document.getElementById("problemTitle").value
    const description = document.getElementById("problemDescription").value

    const obj = {
        method: "POST",
        headers: {
            "ContentType": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({problem: {title: title, description: description}})
    }

    fetch("http://localhost:3000/problems", obj)
}
