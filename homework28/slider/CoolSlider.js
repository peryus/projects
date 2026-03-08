const SLIDER_WIDTH = 900;
const PLAY_TIMEOUT_SEC = 5;
const SWIPE_THRESHOLD = 50;


export class CoolSlider {
  imageList = [];
  currentSlide = 0;
  intervalTimer;
  dots = []
  startX = 0;

  constructor({sliderId, imageList, config = {}}) {

    if (!sliderId) {
      throw new Error('first parameter must be slider id');
    }


    if (!Array.isArray(imageList) || imageList.length === 0) {
      throw new Error('CoolSlider must be an array!');
    }
    this.slider = document.getElementById(sliderId);
    this.imageList = imageList;
    this.config = {
      autoplayInterval: config.autoplayInterval || PLAY_TIMEOUT_SEC * 1000,
      showDots: config.showDots !== false
    };
    this.createHtmlStructure();
    this.getElementsFromPage();
    this.init();
  }


  init() {
    this.createImagesElements();
    if (this.config.showDots) {
      this.createDots();
      this.setActiveDot(0);
      }
    this.initEvents();
  }


  createHtmlStructure() {
    this.slider.classList.add('slider');
    this.slider.innerHTML = ` 
 <div class="slider-viewport">
    <div class="slider-line slow-switch"></div>
  </div>
  <div class="slider-nav slider-left">⭠</div>
  <div class="slider-nav slider-right">⭢</div>
  <div class="slider-dots"></div>
  <div class="play-container">
    <button class="playbtn">Play</button>
    <button class="pausebtn">Pause</button>
  </div>`;
  }


  getElementsFromPage() {
    this.leftArrow = this.slider.querySelector('.slider-nav.slider-left');
    this.rightArrow = this.slider.querySelector('.slider-nav.slider-right');
    this.sliderLine = this.slider.querySelector('.slider-line');
    this.dotsContainer = this.slider.querySelector('.slider-dots');

  }

  createImagesElements() {
    let generatedHtml = ''
    this.imageList.forEach(imgStr => {
      generatedHtml += `<img src="${imgStr}" alt="${imgStr}">`
    })
    this.sliderLine.innerHTML = generatedHtml

  }

  createDots() {
    this.imageList.forEach((img, index) => {
      const dot = document.createElement('div')
      dot.classList.add('dot')
      dot.addEventListener('click', () => {
        this.currentSlide = index
        this.moveSlide(this.currentSlide)
      })
      this.dotsContainer.appendChild(dot)
      this.dots.push(dot)
    })
  }

  setActiveDot(index) {
    this.dots.forEach(dot => dot.classList.remove('active'))
    this.dots[index].classList.add('active')
  }


  initEvents() {
    this.leftArrow.addEventListener('click', () => this.leftClickHandler())
    this.rightArrow.addEventListener('click', () => this.rightClickHandler())

    this.slider.addEventListener('touchstart', (e) => this.touchStart(e))
    this.slider.addEventListener('touchend', (e) => this.touchEnd(e))

    this.slider.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        this.leftClickHandler()
      } else if (event.key === 'ArrowRight') {
        this.rightClickHandler()
      }
    })

    this.play()
    this.slider.querySelector('.playbtn').addEventListener('click', () => this.play())
    this.slider.querySelector('.pausebtn').addEventListener('click', () => this.pause())
  }

  touchStart(e) {
    this.startX = e.touches[0].clientX;
  }

  touchEnd(e) {
    const endX = e.changedTouches[0].clientX;
    const diff = this.startX - endX;

    if (diff > SWIPE_THRESHOLD) {
      this.rightClickHandler();
    }

    if (diff < -SWIPE_THRESHOLD) {
      this.leftClickHandler();
    }
  }

  leftClickHandler() {
    this.currentSlide = this.currentSlide - 1;

    if (this.currentSlide < 0) {
      this.currentSlide = this.imageList.length - 1;
    }

    this.moveSlide(this.currentSlide);
  }


  rightClickHandler() {
    this.currentSlide = this.currentSlide + 1;

    if (this.currentSlide >= this.imageList.length) {
      this.currentSlide = 0;
    }

    this.moveSlide(this.currentSlide);
  }


  moveSlide(slide) {
    this.sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`;

    if (this.config.showDots) {
      this.setActiveDot(slide);
    }
  }


  pause() {
    if (this.intervalTimer) {
      clearInterval(this.intervalTimer);
      this.intervalTimer = null;
    }
  }


  play() {
    if (!this.intervalTimer) {
      this.intervalTimer = setInterval(
          () => this.rightClickHandler(),
          this.config.autoplayInterval
      );
    }
  }

}





