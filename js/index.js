// Turn off Loading icon when loading is completed
window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-container');
    loader.style.display = 'none';

    const mobileHeader = document.getElementById('mobile-header');
    const largeHeader = document.getElementById('large-header');
    const mainHeader = document.getElementById('main-header');
    const header = document.getElementById('header');

    if (window.innerWidth > window.innerHeight) {
        mobileHeader.style.display = 'none';
        largeHeader.style.display = 'flex';
        header.classList.add("header-flex");
        
    }
    else {
        mobileHeader.style.display = 'block';
        largeHeader.style.display = 'none';
        
        header.classList.add("header-block");
    }
});


// switch between mobile and large screen view 
window.addEventListener('resize', function () {
    const mobileHeader = document.getElementById('mobile-header');
    const largeHeader = document.getElementById('large-header');
    const header = document.getElementById('header');
    const mainHeader = document.getElementById('main-header');

    if (window.innerWidth > window.innerHeight) {
        mobileHeader.style.display = 'none';
        largeHeader.style.display = 'flex';
        
        header.classList.replace("header-block","header-flex");
    } else {
        mobileHeader.style.display = 'block';
        largeHeader.style.display = 'none';
        header.classList.replace("header-flex","header-block");
    }
});

