window.addEventListener("scroll", function () {
  let navBar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navBar.classList.add("fixed-top");
  } else {
    navBar.classList.remove("fixed-top");
  }
});

//Add active class to the current button (highlight it)
const navbar = document.querySelectorAll(".nav-link");

navbar.forEach((navbar) => {
  navbar.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navbar.classList.add("active");
  });
});

// // change of image and text in the slide section
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  if (
    slides &&
    slides.length > 0 &&
    currentSlide >= 0 &&
    currentSlide < slides.length
  ) {
    slides[currentSlide].classList.remove("active");
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
  }
}

function pauseSlideshow() {
  clearInterval(slideInterval);
}

function playSlideshow() {
  slideInterval = setInterval(nextSlide, 5000);
}

let prevButton = document.querySelector(".prev");

if (prevButton) {
  prevButton.addEventListener("click", function () {
    pauseSlideshow();
    prevSlide();
    playSlideshow();
  });
}

let nextButton = document.querySelector(".next");
if (nextButton) {
  nextButton.addEventListener("click", function () {
    pauseSlideshow();
    nextSlide();
    playSlideshow();
  });
}

if (
  slides &&
  slides.length > 0 &&
  currentSlide >= 0 &&
  currentSlide < slides.length
) {
  slides[currentSlide].classList.add("active");
}

const accordionButtons = document.querySelectorAll("#accordion-button");
const accordionItem = document.querySelectorAll(".accordion-item");

accordionButtons.forEach((accordionButton, index) => {
  accordionButton.addEventListener("click", () => {
    accordionItem.forEach((item) => {
      item.classList.remove("expand");
    });
    if (!accordionButton.classList.contains("active")) {
      accordionButton.classList.add("active");
      accordionItem[index].classList.add("expand");
    } else {
      accordionButton.classList.remove("active");
      accordionItem[index].classList.remove("expand");
    }
  });
});

AOS.init();
