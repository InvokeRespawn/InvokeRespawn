// Variables 
var hamburgerExpanded = false;
var nav, logo, topNav, resumeBtn;
var topline, middle, bottom;
var reponsiveclassName = "responsive";

// Event Listeners for Page Load
window.addEventListener("load", (event) => {
    nav = document.getElementById("nav");
    logo = document.getElementById("logo");
    topNav = document.getElementById("topNav");
    resumeBtn = document.getElementById("btn-resume");
    topline = document.getElementById("topline");
    middle = document.getElementById("middle");
    bottom = document.getElementById("bottom");
});


//Scroll Event for Scroll Progress Bar
window.addEventListener('scroll', () => {
    const percentage = getScrollPercentage();
    const newValue = 301.6 - ((percentage / 100) * 301.6);

    const specificElement = document.getElementById('scrollProgress');
    specificElement.style.setProperty('--scroll-progress', newValue.toFixed(2));

    let button = document.getElementById('scrollBtnCtn');
    if (window.scrollY > 0) {
        button.classList.add('slideInBottom');
    } else {
        button.classList.remove('slideInBottom');
    }
});

function getScrollPercentage() {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    return Math.min(100, Math.max(0, scrolled));
}


//Hamburger Click Event
function hamburgerClick() {

    if (!hamburgerExpanded) {
        addResponsiveClass();
        disableScroll();
        hamburgerCloseShape();
        hamburgerExpanded = true;
    } else {
        hamburgerExpanded = false;
        removeResponsiveClass();
        enableScroll();
        hamburgerShape();
    }
}

//Nav Item Click Event
function navItemClick() {
    if (hamburgerExpanded) {

        removeResponsiveClass();
        enableScroll();
        hamburgerShape();
        hamburgerExpanded = false;
    }
}

//Resume Download Button Click Event
function resumeClick() {
    window.open("https://drive.google.com/file/d/1BqGtm5eXPWk0H__LZylQf5uW0lhuiz2S/view?usp=sharing");
}

//Functions
function addResponsiveClass() {
    nav.classList.add(reponsiveclassName);
    topNav.classList.add(reponsiveclassName);
    logo.classList.add(reponsiveclassName);
    resumeBtn.classList.add(reponsiveclassName);
}
function removeResponsiveClass() {
    nav.classList.remove(reponsiveclassName);
    topNav.classList.remove(reponsiveclassName);
    logo.classList.remove(reponsiveclassName);
    resumeBtn.classList.remove(reponsiveclassName);
}
function hamburgerShape() {
    topline.classList.remove("topclose");
    middle.classList.remove("middleclose");
    bottom.classList.remove("bottomclose");
}
function hamburgerCloseShape() {
    topline.classList.add("topclose");
    middle.classList.add("middleclose");
    bottom.classList.add("bottomclose");
}
function enableScroll() {
    document.body.style.overflow = "auto";
}
function disableScroll() {
    document.body.style.overflow = "hidden";
}
function ScrollToTopButton() {
    console.log("Scroll Pressed");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


