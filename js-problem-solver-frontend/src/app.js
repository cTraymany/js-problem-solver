class App {
    static start() {
        const container = document.getElementById("container")
        container.innerHTML = `
            <header>
                <img src="./img/pexels-nathan-cowley-897817.jpg">
                <nav>
                    <h1 class="logo">Problem Solver</h1>
                    <div class="action-nav-box"><div class=action-nav>Get Started</div></div>
                </nav>
                <h2 class="heading">We all have problems. Let us solve yours!</h2>
                <div class="action-box">
                    <p class="action">Get Started</p>
                </div>
            </header>
            <section class="landing-page">
                <div class="selling-points-container">
                    <h3 class="selling-points-header">We're here to get you there.</h3>
                    <div class="line line-one"></div>
                    <div class="line line-two"></div>
                </div>
            </section>
        `
        const getStartedNav = document.querySelector(".action-nav-box")
        getStartedNav.addEventListener("click", Problem.start)

        const getStarted = document.querySelector(".action-box")
        getStarted.addEventListener("click", Problem.start)
    }
}