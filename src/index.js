import { tns } from "../node_modules/tiny-slider/src/tiny-slider";
import Glide from '@glidejs/glide';


var abstractSlider = document.getElementsByClassName('abstract-slider');
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("global-header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

if (abstractSlider.length > 0) {
    var slider = tns({
      container: '.abstract-slider',
      items: 1,
      slideBy: 'page',
      nav: false,
      controlsText: ['＜', '＞'],
      autoplay: true,
      speed: 2400,
      autoplayHoverPause: true,
      autoplayButtonOutput: false,
      lazyload: false,
      nested: 'inner',
      fixedWidth: 550
    });
  }

var relatedprjFeed = document.getElementsByClassName('relatedprj-feed');


if (relatedprjFeed.length > 0) {
  var slider = tns({
    container: '.relatedprj-feed',
    items: 2,
    slideBy: 'page',
    nav: false,
    controlsText: ['＜', '＞'],
    autoplay: false,
    speed: 3000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    lazyload: false,
    nested: 'inner',
    //gutter: '20',
    // fixedWidth: '326'
    // edgePadding: '23'



    // container: '.relatedprj-feed',
    // mouseDrag: true,
    // items: 1,
    // slideBy: 'page',
    // autoplay: true,
    // speed: 900,
    // autoplayTimeout: 2400,
    // controls: true,
    // controlsText: ['＜', '＞'],
    // nav: true,
    // nested: 'inner',
    // autoplayButtonOutput: false,
    // autoplayHoverPause: true,
    // controlsPosition: false,
    // prevButton: false,
    // nextButton: false,
    // gutter: '18fpr',
    // edgePadding: '23'
  });
}
  //related things
var relatednoteFeed = document.getElementsByClassName('relatednote-feed');

if (relatednoteFeed.length > 0) {
  var slider = tns({
    container: '.relatednote-feed',
    items: 1,
    slideBy: 'page',
    nav: false,
    controlsText: ['＜', '＞'],
    autoplay: false,
    speed: 3000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    lazyload: false,
    nested: 'inner',
    autoHeight: true
  });
}

//related things
var relatedcardFeed = document.getElementsByClassName('relatedcard-feed');

if (relatedcardFeed.length > 0) {
  var slider = tns({
    container: '.relatedcard-feed',
    items: 3,
    slideBy: 'page',
    nav: false,
    controlsText: ['＜', '＞'],
    autoplay: false,
    speed: 3000,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    lazyload: false,
    nested: 'inner',
    gutter: 20
    // container: '.relatedcard-feed',
    // mouseDrag: true,
    // items: 1,
    // slideBy: 'page',
    // autoplay: true,
    // speed: 800,
    // autoplayTimeout: 2400,
    // controls: true,
    // controlsText: ['＜', '＞'],
    // nav: false,
    // nested: 'inner',
    // autoplayButtonOutput: false,
    // autoplayHoverPause: true,
    // controlsPosition: 'bottom',
    // prevButton: false,
    // nextButton: false
  });
}

(function(d) {
  var config = {
    kitId: 'psc4jxc',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// new Glide('.glide', {
//   type: 'carousel',
//   startAt: 0,
//   perView: 3,
//   gap: 20
// })