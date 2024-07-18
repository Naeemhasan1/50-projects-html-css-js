// alert("it works!!");
const loadText = document.querySelector(".loading-txt");
const background = document.querySelector(".bg");
let load = 0;
let interval = setInterval(blurring, 100);
function blurring() {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadText.innerHTML = `${load}%`;
  //   let opcity = 1 - load / 100;
  //   loadText.style.opacity = opcity;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//this scale() change range-of-numbers to another-range-of-numbers
