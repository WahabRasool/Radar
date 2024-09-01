const radar = document.querySelector(".radar");
/* https://freesound.org/people/unfa/sounds/584179/ */
const beep = new Audio("https://cdn.freesound.org/previews/584/584179_1038806-lq.mp3");

const addDot = () => {
  if (Math.random() > 0.5) return;
  const dot = document.createElement("div");
  dot.classList.add("dot");
  const x = Math.floor(Math.random() * 100);
  const y = Math.floor(Math.random() * 100);
  const size = 10 + Math.floor(Math.random() * 10);
  dot.style.setProperty("--x", `${x}%`);
  dot.style.setProperty("--y", `${y}%`);
  dot.style.setProperty("--size", `${size}px`);
  radar.append(dot);
  setTimeout(() => dot.remove(), 2000);
}

setInterval(() => {
  beep.currentTime = 0;
  beep.play();
  addDot();
}, 1250);