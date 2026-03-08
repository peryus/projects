import { CoolSlider } from './CoolSlider.js';

const imagesLinks = [
  'img/toyota-bz4x-1280x960-one.jpg',
  'img/toyota-bz4x-1280x960-two.jpg',

];


const imagesLinks2 =  [
  'img/toyota-bz4x-1280x960-three.jpg',
  'img/toyota-bz4x-1280x960-four.jpg',
];

new CoolSlider({
  sliderId: 'toyotaSlider',
  imageList: imagesLinks,
  config: {
    autoplayInterval: 1000,
    showDots: true
  }
});

new CoolSlider({
  sliderId: 'otherSlider',
  imageList: imagesLinks2,
  config: {
    autoplayInterval: 5000,
    showDots: false
  }
});