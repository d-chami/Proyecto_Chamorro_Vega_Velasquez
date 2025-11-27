document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const startScreen = document.getElementById("start-screen");
    const mainPage = document.getElementById("main-page");

    startBtn.addEventListener("click", () => {
        // hide start button screen
        startScreen.classList.add("hidden");

        // show your original page
        mainPage.classList.remove("hidden");

        // start tears!
        startTearAnimation();
    });
});

function startTearAnimation() {
    setInterval(() => {
        const tear = document.createElement("div");
        tear.classList.add("tear");

        // random starting x
        tear.style.left = Math.random() * 100 + "vw";

        // random size
        const size = 8 + Math.random() * 12;
        tear.style.width = size + "px";
        tear.style.height = size * 1.3 + "px";

        // random falling duration
        tear.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(tear);

        // cleanup
        setTimeout(() => tear.remove(), 5000);
    }, 300);
}