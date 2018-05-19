// import jQuery from "../../../../node_modules/jquery/dist/jquery";
import 'owl.carousel2';

class OwlCarousel{
  constructor(){
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
      });
    });
  }
}

export default OwlCarousel;
