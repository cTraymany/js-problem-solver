class App {
    static start() {
        const container = document.getElementById("container")
        container.innerHTML = `
            <header>
                <img src="./img/pexels-nathan-cowley-897817.jpg">
                <nav>
                    <span class="logo">Problem Solver</span>
                    <span class="action-nav-box"><div class=action-nav>Get Started</div></span>
                </nav>
                <div class="heading">We all have problems.<br />
                    Let us solve yours!</div>
                <div class="action-box">
                    <p class="action">Get Started</p></div>
            </header>
            <section class="landing-page">
                <div class="selling-points">
                    We're here to get you there.
                </div>
            </section>
        `
        const getStartedNav = document.querySelector(".action-nav-box")
        getStartedNav.addEventListener("click", Problem.start)

        const getStarted = document.querySelector(".action-box")
        getStarted.addEventListener("click", Problem.start)
    }
}