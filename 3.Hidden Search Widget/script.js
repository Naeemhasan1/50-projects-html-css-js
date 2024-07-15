// alert("it works!!");l

const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btnsearch = document.querySelector(".btnsearch");

btnsearch.addEventListener("click", () => {
  console.log(search.classList);
  search.classList.toggle("active");
  input.focus();
});
