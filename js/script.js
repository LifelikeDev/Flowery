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