// import "../../../../node_modules/jquery/dist/jquery";
// import "jquery";
import "slick-lightbox";

class SlickLightBox{
  constructor(){
    $(document).ready(function(){
      $('.products__carousel').slickLightbox({
       itemSelector: 'a'
      });
    });
  }
}

export default SlickLightBox;
