import { tns } from "../node_modules/tiny-slider/src/tiny-slider";
import $ from "jquery";
if ($('.img-slider').length > 0) {
    var slider = tns({
      container: '.img-slider',
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
      controlsPosition: false,
      prevButton: false,
      nextButton: false
    });
  }