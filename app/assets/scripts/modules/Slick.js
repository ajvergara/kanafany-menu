import $ from "jquery";
import "slick-carousel";

class Slick{
  constructor(){
    $(document).ready(function(){
      $('.products__carousel').not('.slick-initialized').slick({
       infinite: true,
       arrows: true,
       dots: true
      });
    });
  }
}

export default Slick;
