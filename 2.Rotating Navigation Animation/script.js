// alert("working");
const buttonOpen = document.getElementById("open");
const buttonClose = document.getElementById("close");
const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  buttonOpen.addEventListener("click", () => {
    container.classList.add("show-nav");
  });
  buttonClose.addEventListener("click", () => {
    container.classList.remove("show-nav");
  });
});
