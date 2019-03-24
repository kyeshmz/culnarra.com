import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var abstractSlider = document.getElementsByClassName('abstract-slider');


//related things
var relatedprjFeed = document.getElementsByClassName('relatedprj-feed');
var relatednoteFeed = document.getElementsByClassName('relatednote-feed');
var relatedcardFeed = document.getElementsByClassName('relatedcard-feed');

if (abstractSlider.length > 0) {
    var slider = tns({
      container: '.abstract-slider',
      mouseDrag: true,
      items: 1,
      slideBy: 'page',
      autoplay: true,
      speed: 900,
      autoplayTimeout: 2400,
      controls: true,
      controlsText: ['＜', '＞'],
      nav: true,
      nested: 'inner',
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      controlsPosition: false,
      prevButton: false,
      nextButton: false
    });
  }



if (relatedprjFeed.length > 0) {
  var slider = tns({
    container: '.relatedprj-feed',
    mouseDrag: true,
    items: 2,
    slideBy: 'page',
    autoplay: true,
    speed: 800,
    autoplayTimeout: 2400,
    controls: true,
    controlsText: ['＜', '＞'],
    nav: false,
    nested: 'inner',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    controlsPosition: 'bottom',
    prevButton: false,
    nextButton: false
  });
}

if (relatednoteFeed.length > 0) {
  var slider = tns({
    container: '.relatednote-feed',
    mouseDrag: true,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 600,
    autoplayTimeout: 2400,
    controls: true,
    controlsText: ['＜', '＞'],
    nav: false,
    nested: 'inner',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    controlsPosition: 'bottom',
    prevButton: false,
    nextButton: false
  });
}

if (relatedcardFeed.length > 0) {
  var slider = tns({
    container: '.relatedcard-feed',
    mouseDrag: true,
    items: 1,
    slideBy: 'page',
    autoplay: true,
    speed: 800,
    autoplayTimeout: 2400,
    controls: true,
    controlsText: ['＜', '＞'],
    nav: false,
    nested: 'inner',
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    controlsPosition: 'bottom',
    prevButton: false,
    nextButton: false
  });
}