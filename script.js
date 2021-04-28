const menuBtn = document.querySelector(".menuButton");
const mobile = document.querySelector(".mobile");

menuBtn.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});

const sectionOneOptions = {
  rootMargin: "-700px 0px 0px 0px",
};

const header = document.querySelector("nav");
const sectionOne = document.querySelector(".introduction");

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("navScrolled");
    } else {
      header.classList.remove("navScrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
