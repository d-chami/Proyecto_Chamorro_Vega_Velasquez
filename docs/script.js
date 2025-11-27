// When the page loads…
document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("intro-screen");
    const mainPage = document.getElementById("main-page");

    // CLICK LOGO SCREEN TO ENTER
    introScreen.addEventListener("click", () => {

        // hide intro logo
        introScreen.classList.add("hidden");

        // show main site
        mainPage.classList.remove("hidden");

        // start animation
        startTearAnimation();
    });
});


// ========== TEAR CREATION ==========
function startTearAnimation() {

    setInterval(() => {
        const tear = document.createElement("div");
        tear.classList.add("tear");

        // random position
        tear.style.left = Math.random() * 100 + "vw";

        // random size
        const size = 8 + Math.random() * 12;
        tear.style.width = size + "px";
        tear.style.height = size * 1.3 + "px";

        // random speed
        tear.style.animationDuration = (3 + Math.random() * 2) + "s";

        document.body.appendChild(tear);

        setTimeout(() => tear.remove(), 6000);

    }, 300);
}
