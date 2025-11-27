// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const mainPage = document.getElementById("main-page");

    // When clicking START
    startBtn.addEventListener("click", () => {

        // hide start screen
        startScreen.classList.add("hidden");

        // show the main page
        mainPage.classList.remove("hidden");

        // start Ghibli tear animation
        startTearAnimation();
    });
});

// CREATE TEARS
function startTearAnimation() {
    setInterval(() => {
        const tear = document.createElement("div");
        tear.classList.add("tear");

        // random horizontal position
        tear.style.left = Math.random() * 100 + "vw";

        // random size
        const size = 8 + Math.random() * 12;
        tear.style.width = size + "px";
        tear.style.height = size * 1.3 + "px";

        // random falling speed
        tear.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(tear);

        // remove after falling
        setTimeout(() => {
            tear.remove();
        }, 5000);

    }, 300);
}
