// -----------------------------------------
// GHIBLI TEAR MOTIF SCRIPT
// -----------------------------------------

function createTear() {
    const tear = document.createElement("div");
    tear.classList.add("tear");

    // Random horizontal position
    tear.style.left = Math.random() * window.innerWidth + "px";

    // Random fall duration (4–7 seconds)
    const duration = 4 + Math.random() * 3;
    tear.style.animationDuration = duration + "s";

    // Random size (scales the droplet)
    const scale = 0.8 + Math.random() * 0.6;
    tear.style.transform = `scale(${scale})`;

    // Add tear to page
    document.body.appendChild(tear);

    // Remove after animation ends
    setTimeout(() => {
        tear.remove();
    }, duration * 1000);
}

// Create a new tear every 800ms (soft rainfall)
setInterval(createTear, 800);

// Bonus emotional effect: clicking creates extra tears
document.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createTear, i * 150);
    }
});
