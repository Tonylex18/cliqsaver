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

AOS.init();

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
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function pauseSlideshow() {
  clearInterval(slideInterval);
}

function playSlideshow() {
  slideInterval = setInterval(nextSlide, 5000);
}

document.querySelector(".prev").addEventListener("click", function () {
  pauseSlideshow();
  prevSlide();
  playSlideshow();
});

document.querySelector(".next").addEventListener("click", function () {
  pauseSlideshow();
  nextSlide();
  playSlideshow();
});

slides[currentSlide].classList.add("active");
