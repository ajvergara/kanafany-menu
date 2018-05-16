import $ from "jquery";

class NextPage{
  constructor(){
    this.display = $(".display");
    this.bottomBtn = $(".menu-item__btn");
    this.events();
  }

  events(){
    this.display.click(this.clicked);
    this.bottomBtn.click(this.clicked);
  }

  clicked(){
    $(".display--bg-1").fadeOut("slow", function(){
      window.location.replace("kanafany-two.html");
    });
    $(".display--bg-2").fadeOut("slow", function(){
      window.location.replace("menu.html");
    });
    $(".display--bg-3").fadeOut("slow", function(){
      window.location.replace("index.html");
    });
  }
}

export default NextPage;
