const menuBtn = document.querySelector(".menuButton");
const mobile = document.querySelector(".mobile");

menuBtn.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
