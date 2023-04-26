//scroll animation//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//navbar animation//
const navbarScrolling = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navbarScrolling.classList.add("navbar-scrolled");
  } else if (window.scrollY < 50) {
    navbarScrolling.classList.remove("navbar-scrolled");
  }
});

//banner animation//
window.onload = function () {
  var tl = new TimelineLite({ delay: 1 }),
    firstBg = document.querySelectorAll(".text__first-bg"),
    secBg = document.querySelectorAll(".text__second-bg"),
    word = document.querySelectorAll(".text__word");

  tl.to(firstBg, 0.2, { scaleX: 1 })
    .to(secBg, 0.2, { scaleX: 1 })
    .to(word, 0.1, { opacity: 1 }, "-=0.1")
    .to(firstBg, 0.2, { scaleX: 0 })
    .to(secBg, 0.2, { scaleX: 0 });
};
