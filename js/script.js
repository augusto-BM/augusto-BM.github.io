/* ============================== ICON TOOGLE NAVBAR ============================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
    menuIcon.onclick = () =>{
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

/* ======================== FUNCION DE SCROLL - ACTIVE LINK ======================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });

    /* ============================ STICKY NAVBAR =========================== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ===== QUITAR ICON-TOOGLE Y NAVBAR CUANDO CLICKEAMOS EN EL LINK DEL NAVBAR O SCROLLEAMOS ==== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

    /* ============================= scroll reveal ============================ */
    ScrollReveal({ 
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200 
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portafolio-container, .contact form', {origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

        /* ============================= Typed Js ============================ */
    const typed = new Typed('.multiple-text',{
        strings: ['estudiante de Ingenieria de software. ','tecnico en Electronica Industrial.'],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 30,
        loop: true
    });
    const actual = new Typed('.texto-actual',{
        strings: ['8° ciclo de Ingenieria de Software. ',''],
        typeSpeed: 20,
        backSpeed: 20,
        backDelay: 20,
        loop: true
    });





