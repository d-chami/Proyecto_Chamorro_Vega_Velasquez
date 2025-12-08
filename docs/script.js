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

const label = document.createElement('div');
label.className = 'hover-text';
label.textContent = movie.title;
iconContainer.appendChild(label);
