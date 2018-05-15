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
    $(".display").fadeOut("slow", function(){
      window.location.replace("kanafany-two.html");
    });
  }
}

export default NextPage;
