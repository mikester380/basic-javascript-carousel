class Carousel {
  constructor({ slides, controls: { prevBtn, nextBtn } }) {
    this.slides = document.querySelector(slides);
    this.prevBtn = document.querySelector(prevBtn);
    this.nextBtn = document.querySelector(nextBtn);

    this.numOfSlide = this.slides.children.length;
    this.scrollPixel = 500;
    this.scrollPosition = 0;
    this.maxPosition = 1000000;
    this.minPosition = 0;
    this.snapCount = 0;
    this.maxSnapCount = this.numOfSlide - 1;
    this.minSnapCount = 0;

    this.addEventListeners();
  }

  prevSlide() {
    this.slides.style.scrollSnapType = "x mandatory";

    [...this.slides.children].forEach((slide) => {
      slide.style.scrollSnapAlign = "center";
    });

    if (this.snapCount === this.minSnapCount) {
      this.scrollPosition = this.maxPosition;
      this.slides.scrollLeft = this.scrollPosition;
      this.scrollPosition = (this.numOfSlide - 1) * this.scrollPixel;
      this.snapCount = this.maxSnapCount;
      return;
    }

    this.scrollPosition -= this.scrollPixel;
    this.slides.scrollLeft = this.scrollPosition;
    this.snapCount--;
  }

  nextSlide() {
    this.slides.style.scrollSnapType = "x mandatory";

    [...this.slides.children].forEach((slide) => {
      slide.style.scrollSnapAlign = "center";
    });

    if (this.snapCount === this.maxSnapCount) {
      this.scrollPosition = this.minPosition;
      this.slides.scrollLeft = this.scrollPosition;
      this.snapCount = this.minSnapCount;
      return;
    }

    this.scrollPosition += this.scrollPixel;
    this.slides.scrollLeft += this.scrollPosition;
    this.snapCount++;
  }

  addEventListeners() {
    this.prevBtn.addEventListener("click", this.prevSlide.bind(this));
    this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
  }
}

new Carousel({
  slides: ".carousel__slides",
  controls: {
    prevBtn: ".carousel__control--prev",
    nextBtn: ".carousel__control--next",
  },
});
