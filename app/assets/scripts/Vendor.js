import $ from "jquery";
import "slick-carousel";

$(document).ready(function(){
  $('.carousel-class').slick({
   infinite: true,
   arrows: true,
   dots: true
  });
});
