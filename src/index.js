import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var abstractSlider = document.getElementsByClassName('abstract-slider');


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


  //related things
var relatedprjFeed = document.getElementsByClassName('relatedprj-feed');


if (relatedprjFeed.length > 0) {
  var slider = tns({
    container: '.relatedprj-feed',
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
    nextButton: false,
    gutter: '18',
    edgePadding: '23'
  });
}
  //related things
var relatednoteFeed = document.getElementsByClassName('relatednote-feed');

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

//related things
var relatedcardFeed = document.getElementsByClassName('relatedcard-feed');

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