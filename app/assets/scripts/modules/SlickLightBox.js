import "slick-lightbox";

class SlickLightBox{
  constructor(){
    $(document).ready(function(){
      $('.products__carousel').slickLightbox({
       itemSelector: 'a',
       caption: "caption" 
      });
    });
  }
}

export default SlickLightBox;
