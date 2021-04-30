const menuBtn = document.querySelector(".menuButton");
const mobile = document.querySelector(".mobile");
const headerLink = document.querySelector(".headerLink");
const aboutLink = document.querySelector(".aboutLink");
const skillsLink = document.querySelector(".skillsLink");
const projectsLink = document.querySelector(".projectsLink");
const contactLink = document.querySelector(".contactLink");

menuBtn.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});

headerLink.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
aboutLink.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
skillsLink.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
projectsLink.addEventListener("click", () => {
  mobile.classList.toggle("active");
  menuBtn.classList.toggle("open");
});
contactLink.addEventListener("click", () => {
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

const sectionTwo = document.querySelector("header");

const sectionTwoOptions = {
  rootMargin: "-35px 0px 0px 0px",
};

const sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      menuBtn.classList.add("buttonScrolled");
    } else {
      menuBtn.classList.remove("buttonScrolled");
    }
  });
},
sectionTwoOptions);
sectionTwoObserver.observe(sectionTwo);
