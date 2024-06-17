const slider = document.querySelector(".imageSlider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentIndex = 0;

const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

setInterval(() => {
  showSlide(currentIndex + 1);
}, 3000);
