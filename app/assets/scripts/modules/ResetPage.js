import $ from "jquery";

class ResetPage{
  constructor(){
    this.quitBtn = $(".menu-item__btn");
    this.events();
  }

  events(){
    this.quitBtn.click(this.quitFn);
  }

  quitFn(){
    $(".display--bg-3").fadeOut("300", function(){
      window.location.replace("index.html");
    });
  }
}

export default ResetPage;
