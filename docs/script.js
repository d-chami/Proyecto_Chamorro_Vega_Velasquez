// ⬇️ Runs when user clicks the logo
document.getElementById("start-logo").addEventListener("click", () => {

    // Hide the start screen
    document.getElementById("start-screen").style.display = "none";

    // Show your real page
    document.getElementById("main-content").classList.remove("hidden");

    // Start the tears
    startTears();
});


// -------------------------------------------
// Ghibli tear animation function
// -------------------------------------------
function startTears() {
    setInterval(() => {
        createTear();
    }, 600);
}

function createTear() {
    const tear = document.createElement("div");
    tear.classList.add("tear");

    // random start
    tear.style.left = Math.random() * 100 + "vw";
    tear.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(tear);

    // remove after falling
    setTimeout(() => {
        tear.remove();
    }, 5000);
}
