const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  navToggle.setAttribute(
    "aria-expanded",
    !primaryNav.hasAttribute("data-visible")
  );
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
      arrows: true,
    }
  }
});