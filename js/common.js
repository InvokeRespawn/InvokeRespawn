let hamburgerExpanded = false;

function hamburgerClick() {
    var nav = document.getElementById("nav");
    var logo = document.getElementById("logo");
    var topNav = document.getElementById("topNav");
    var resumeBtn = document.getElementById("btn-resume");
    var body= document.getElementsByName("body");
    if (!hamburgerExpanded) {
        nav.classList.add("responsive");
        topNav.classList.add("responsive");
        logo.classList.add("responsive");
        resumeBtn.classList.add("responsive");
       
      hamburgerExpanded=true;
    } else {
        hamburgerExpanded=false;
        nav.classList.remove("responsive");
         topNav.classList.remove("responsive");
        logo.classList.remove("responsive");
        resumeBtn.classList.remove("responsive");
       
    }
  }