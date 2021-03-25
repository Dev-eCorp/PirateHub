document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.show-case');
ScrollReveal().reveal('.articulos', {delay: 500});
ScrollReveal().reveal('.articulos-banner-one', {delay: 500});
ScrollReveal().reveal('.articulos-banner-two', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});
