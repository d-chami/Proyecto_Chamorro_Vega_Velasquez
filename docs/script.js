// Ghibli Tear Motif Script
function createTear() {
    const tear = document.createElement("div");
    tear.classList.add("tear");

    // Random horizontal position
    tear.style.left = Math.random() * window.innerWidth + "px";

    // Random fall duration
    const duration = 4 + Math.random() * 3;
    tear.style.animationDuration = duration + "s";

    // Random size variation
    const scale = 0.8 + Math.random() * 0.6;
    tear.style.transform = `scale(${scale})`;

    document.body.appendChild(tear);

    // Remove the tear after animation ends
    setTimeout(() => {
        tear.remove();
    }, duration * 1000);
}

// Create tears at intervals (soft + emotional)
setInterval(createTear, 800);

// Optionally add bursts when clicking (like a dramatic moment)
document.addEventListener("click", () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(createTear, i * 150);
    }
});
