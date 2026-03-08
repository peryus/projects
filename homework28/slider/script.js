// const SLIDER_WIDTH = 900;
//
// const imageList = [
//   'img/toyota-bz4x-1280x960-one.jpg',
//   'img/toyota-bz4x-1280x960-two.jpg',
//   'img/toyota-bz4x-1280x960-three.jpg',
//   'img/toyota-bz4x-1280x960-four.jpg',
// ]
//
// const PLAY_TIMEOUT_SEC = 5;
//
// const slider = document.querySelector('.slider')
// const leftArrow = document.querySelector('.slider-nav.slider-left')
// const rightArrow = document.querySelector('.slider-nav.slider-right')
// const sliderLine = document.querySelector('.slider-line')
// const dotsContainer = document.querySelector('.slider-dots')
//
// let currentSlide = 0;
// let intervalTimer;
// let dots = []
// let startX = 0;
//
// init();
//
// function init() {
//   createImages()
//   createDots()
//   setActiveDot(0)
//   initEvents()
// }
//
//
// function createImages() {
//   let generatedHtml = ''
//   imageList.forEach(imgStr => {
//     generatedHtml += `<img src="${imgStr}" alt="${imgStr}">`
//   })
//   sliderLine.innerHTML = generatedHtml
//
// }
//
//
// function initEvents() {
//   leftArrow.addEventListener('click', leftClickHandler)
//   rightArrow.addEventListener('click', rightClickHandler)
//
//   slider.addEventListener('touchstart', touchStart)
//   slider.addEventListener('touchend', touchEnd)
//
//   document.body.addEventListener('keydown', event => {
//     if (event.key === 'ArrowLeft') {
//       leftClickHandler()
//     } else if (event.key === 'ArrowRight') {
//       rightClickHandler()
//     }
//   })
//
//   intervalTimer = setInterval(rightClickHandler, PLAY_TIMEOUT_SEC * 1000);
//   document.getElementById('playButton').addEventListener('click', play)
//   document.getElementById('pauseButton').addEventListener('click', pause)
//
// }


// function touchStart(event) {
//   startX = event.touches[0].clientX;
// }
//
//
// function touchEnd(event) {
//   const endX = event.changedTouches[0].clientX;
//   const diff = startX - endX;
//   if (diff > 50) {
//     rightClickHandler();
//   }
//   if (diff < -50) {
//     leftClickHandler();
//   }
// }


// function createDots() {
//   imageList.forEach((img, index) => {
//     const dot = document.createElement('div')
//     dot.classList.add('dot')
//     dot.addEventListener('click', () => {
//       currentSlide = index
//       moveSlide(currentSlide)
//     })
//     dotsContainer.appendChild(dot)
//     dots.push(dot)
//   })
// }


// function setActiveDot(index) {
//   dots.forEach(dot => dot.classList.remove('active'))
//   dots[index].classList.add('active')
//
// }


function leftClickHandler() {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = imageList.length - 1;
  }
  moveSlide(currentSlide)
}

function rightClickHandler() {
  currentSlide = currentSlide + 1;
  if (currentSlide >= imageList.length) {
    currentSlide = 0;
  }
  moveSlide(currentSlide)
}


function moveSlide(slide) {
  sliderLine.style.transform = `translate(${slide * -SLIDER_WIDTH}px)`
  setActiveDot(slide)
}


function pause() {
  if (intervalTimer) {
    clearInterval(intervalTimer);
    intervalTimer = null;
  }
}


function play() {
  if (!intervalTimer) {
    intervalTimer = setInterval(rightClickHandler, PLAY_TIMEOUT_SEC * 1000);
  }
}