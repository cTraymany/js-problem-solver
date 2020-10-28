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


// function renderProblems() {
//     const div = document.getElementById("problems")
//     const ul = document.createElement("ul")
//     div.appendChild(ul)
    
//     for (const problem of problems.data) {
//         let li = document.createElement("li")
//         li.innerText = problem.attributes.title
//         ul.appendChild(li)
//     }
// }


// add event listener to show solutions on problem click