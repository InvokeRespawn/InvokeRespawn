// Turn off Loading icon when loading is completed
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    loader.style.display = 'none';


    const header = document.getElementById('header');

    if (window.innerWidth > window.innerHeight) {
        header.classList.add("header-flex");
    }
    else {
        header.classList.add("header-block");
    }
});


// switch between mobile and large screen view
window.addEventListener('resize', function () {

    const header = document.getElementById('header');


    if (window.innerWidth > window.innerHeight) {

        header.classList.replace("header-block","header-flex");
    } else {

        header.classList.replace("header-flex","header-block");
    }
});

