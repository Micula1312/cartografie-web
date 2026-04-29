const pins = document.querySelectorAll(".pin");
const pop = document.getElementById("memoryPop");
const text = document.getElementById("memoryText");
const close = document.getElementById("closePop");

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    text.textContent = pin.dataset.memory;
    pop.classList.add("is-open");

    pin.animate(
      [
        { transform: "scale(1) rotate(0deg)" },
        { transform: "scale(1.25) rotate(12deg)" },
        { transform: "scale(1) rotate(-4deg)" }
      ],
      { duration: 420, easing: "cubic-bezier(.2,1,.2,1)" }
    );
  });
});

close.addEventListener("click", () => {
  pop.classList.remove("is-open");
});

setInterval(() => {
  pins.forEach((pin) => {
    const r = (Math.random() * 6 - 3).toFixed(2);
    pin.style.rotate = `${r}deg`;
  });
}, 1200);
