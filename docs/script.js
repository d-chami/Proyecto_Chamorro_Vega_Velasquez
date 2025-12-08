// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");
  const logo = document.getElementById("start-logo");
  const main = document.getElementById("main-content");

  if (!intro || !logo || !main) {
    console.error("Required element not found! intro:", intro, "logo:", logo, "main:", main);
    return;
  }

  logo.addEventListener("click", () => {
    // Hide intro screen
    intro.style.display = "none";
    // Show main content
    main.classList.remove("hidden");
    // Start tear animation
    main.classList.add("fade-in");
    startTearAnimation();
  });
});

function startTearAnimation() {
  setInterval(() => {
    const tear = document.createElement("div");
    tear.classList.add("tear");
    tear.style.left = Math.random() * 100 + "vw";
    tear.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(tear);
    setTimeout(() => tear.remove(), 5000);
  }, 500);
}
const iconContainer = document.createElement('div');
iconContainer.className = 'icon-container loading';
if (movie.title === "El niño y la garza") iconContainer.classList.add('special-bg');
iconContainer.title = `${movie.title}\nDuración: ${movie.duration}`;

// ▼ ADD THIS HERE ▼
const hoverLabel = document.createElement('div');
hoverLabel.className = 'hover-text';
hoverLabel.textContent = movie.title;
iconContainer.appendChild(hoverLabel);
// ▲ ADD THIS HERE ▲

