const loader = document.querySelector(".neu-loader");
const toggle = document.querySelector(".neu-toggle");
const favs = document.querySelector(".favs");
console.log("init");

loader.addEventListener("click", function () {
  loader.classList.value = "neu-loader-complete";
});

toggle.addEventListener("click", function () {
  toggle.classList.toggle("toggled");
});

favs.addEventListener("click", function () {
  favs.classList.toggle("faved");
});
