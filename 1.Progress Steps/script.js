// alert("it works!!");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  // console.log(currentActive);
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    // console.log("index =", idx);
    // console.log(circle);
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  // console.log(actives.length - 1);
  // console.log(circles.length - 1);
  const progresswidth =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.width = progresswidth;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
