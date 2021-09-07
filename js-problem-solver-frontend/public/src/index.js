if (sessionStorage.loggedIn) {
    Problem.start()
} else {
    loadLandingPage()
}

const logo = document.getElementById("logo")

logo.addEventListener("click", event => {
    event.preventDefault()
    // document.body.style.background = ""

    if (sessionStorage.loggedIn) {
        // todo:
        // document.body.style.background = "pink"
        console.log("load the welcome page!")
    } else {
        loadLandingPage()
    }
})

// window.addEventListener("load", event => sessionStorage.setItem("fetched", false))

// if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     sessionStorage.setItem("fetched", false)
//     console.log(sessionStorage.fetched)
// }