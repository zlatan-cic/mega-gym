const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// const link = document.querySelector('a');

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  // console.log(e.target);
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevalOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header conatiner
ScrollReveal().reveal(".header__image img", {
  ...scrollRevalOption,
});

ScrollReveal().reveal(".header__content h4 ", {
  ...scrollRevalOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .section__header", {
  ...scrollRevalOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevalOption,
  delay: 600,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevalOption,
  delay: 600,
});

// About container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevalOption,
  origin: 'left',
  // delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevalOption,
  origin: 'left',
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevalOption,
  origin: 'left',
  delay: 1000,
});

ScrollReveal().reveal(".about__card", {
  ...scrollRevalOption,
  origin: 'left',
  delay: 1500,
  interval:500,
});


