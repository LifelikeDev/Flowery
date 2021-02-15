// Hamburger navigation
const headerTop = document.querySelector('.header-top');
const navigation = document.querySelector('.navigation');
const navBar = document.querySelector('.nav-bar');
const navList = document.querySelectorAll('.nav-list');
const hamburgerOpen= document.querySelector('.ham-open');
const hamburgerClose= document.querySelector('.ham-close');

hamburgerOpen.addEventListener('click', () => {
    navigation.classList.add('mobile-nav');
    hamburgerOpen.style.display = 'none';
    hamburgerClose.style.display = 'block';
    headerTop.style.backgroundColor = 'var(--primary-text-color)'; 
    headerTop.style.color = 'var(--primary-bg-color)'; 
     

});

hamburgerClose.addEventListener('click', () => {
    navigation.classList.remove('mobile-nav');
    hamburgerClose.style.display = 'none';
    hamburgerOpen.style.display = 'block';
    headerTop.style.backgroundColor = 'var(--primary-bg-color)'; 
    headerTop.style.color = 'var(--primary-text-color)';
});


// Image Carousel

const imagesWrapper = document.querySelector('.images-wrapper');
const eachImage = document.querySelectorAll('.each-carousel__image');
const img = document.querySelectorAll('.each-carousel__image img');

let index = 0;

function slide() {
    
    index ++;

    if (index > eachImage.length - 1) {
        index = 0;
    }

    const imgWidth = img.style.width.value;

    imagesWrapper.style.transform = `translate(${-index * imgWidth}px)`;

}

// console.log(innerWidth);

// Update copyright year

const year = document.getElementById('year');
const date = new Date();

let currentYear = date.getFullYear();

year.innerHTML = currentYear;