
 // import Swiper JS
// import Swiper from 'swiper';
// import $ from "jquery";
// import './popper.js';
// import Swiper styles
// import 'swiper/swiper-bundle.css';
//   import Splide from '@splidejs/splide';
//   import '@splidejs/splide/dist/css/splide-core.min.css';
//   import '@splidejs/splide/dist/css/splide.min.css';


$(document).ready(function(){
  var $prev = $('.previousx');
  var $next = $('.nextx');
  var mode = "auto";
  $prev.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showPreviousImage();
    }
  });
  $next.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showNextImage();

    }
  });

  setInterval(function(){
    if(mode==="auto"){
      showNextImage();
    }
  },5000);

  function showNextImage(){
      var $actEl = $('.activx');
      var $nextEl = $actEl.next('.slidex');
      if($nextEl.length){
        $actEl.removeClass('activx');
        $nextEl.addClass('activx');
      }else{
        $actEl.removeClass('activx');
        $('.slidex:first-child').addClass('activx');
      }
  }

  function showPreviousImage(){
      var $actEl = $('.activx');
      var $prevEl = $actEl.prev('.slidex');
      if($prevEl.length){
        $actEl.removeClass('activx');
        $prevEl.addClass('activx');
      }else{
        $actEl.removeClass('activx');
        $('.slidex.last').addClass('activx');
      }
  }
});
