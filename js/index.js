class Carousel {
  constructor({ slides, controls: { prevBtn, nextBtn } }) {
    this.slides = document.querySelector(slides);
    this.prevBtn = document.querySelector(prevBtn);
    this.nextBtn = document.querySelector(nextBtn);

    this.numOfSlides = this.slides.children.length;
    this.perScrollPixel = 500;
    this.scrollMinPixel = 0;
    this.scrollMaxPixel = 10000000;
    this.snapCount = 0;

    this.addEventListeners();
  }

  prevSlide() {
    this.slides.classList.add("snap");

    if (this.snapCount === 0) {
      this.slides.scrollLeft = this.scrollMaxPixel;
      this.snapCount = this.numOfSlides - 1;
      return;
    }

    this.slides.scrollLeft -= this.scrollPixel;
    this.snapCount--;

    this.slides.classList.remove("snap");
  }

  nextSlide() {
    this.slides.classList.add("snap");

    if (this.snapCount === this.numOfSlides - 1) {
      this.slides.scrollLeft = this.scrollMinPixel;
      this.snapCount = 0;
      return;
    }

    this.slides.scrollLeft += this.scrollPixel;
    this.snapCount++;

    this.slides.classList.remove("snap");
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
