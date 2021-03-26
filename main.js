document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.show-case');
ScrollReveal().reveal('.articulos', {delay: 1000});
ScrollReveal().reveal('.articulos-banner-one', {delay: 1500});
ScrollReveal().reveal('.articulos-banner-two', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});

var btnAbrirRegistro = document.getElementById('btn-abrir-popup'), 
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarRegistro = document.getElementById('btn-cerrar-popup-registro');

btnAbrirRegistro.addEventListener('click', function(){
    console.log('abriendo')
    overlay.classList.add('active')
    popup.classList.add('active')
});

btnCerrarRegistro.addEventListener('click', function(){
    overlay.classList.remove('active')
    popup.classList.remove('active')
});

var btnAbrirIniciar = document.getElementById('btn-iniciar'), 
    overlayIniciar = document.getElementById('overlay-iniciar'),
    popupIniciar = document.getElementById('popup-iniciar'),
    btnCerrarIniciar = document.getElementById('btn-cerrar-popup-iniciar');

btnAbrirIniciar.addEventListener('click', function(){
    console.log('abriendo');
    overlayIniciar.classList.add('active')
    popupIniciar.classList.add('active')
});

btnCerrarIniciar.addEventListener('click', function(){
    overlayIniciar.classList.remove('active')
    popupIniciar.classList.remove('active')
});