import $ from "jquery";

class NextPage{
  constructor(){
    this.display = $(".display");
    this.events();
  }

  events(){
    this.display.click(this.clicked);
  }

  clicked(){
    // this.display.on("click", function(){
    //   this.fadeOut("slow", function(){
    //     window.location.replace("kanafany-two.html");
    //   });
    // });
    $(".display").fadeOut("slow", function(){
      window.location.replace("kanafany-two.html");
    });
  }
}

export default NextPage;
