const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation > ul > li > a');
const menuToggle = document.querySelector('.menu-toggle');
const submenu = document.querySelector('.submenu');
const submenuLinks = document.querySelectorAll('.submenu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
});

links.forEach(link => {
    if (link !== menuToggle) {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    }
});

menuToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) { 
        e.preventDefault(); 
        submenu.classList.toggle('open');
        menuToggle.classList.toggle('active');
    } 
});

submenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        submenu.classList.remove('open');
        menuToggle.classList.remove('active');
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    });
});

// --- RESERVATIONS --- //
const form = document.querySelector('.reservation-form');
const button = form.querySelector('.btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    button.textContent = 'Booking...';
    button.classList.add('loading');
    button.disabled = true;

    setTimeout(() => {
        button.textContent = 'Book a Table';
        button.classList.remove('loading');
        button.disabled = false;

        let message = document.createElement('div');
        message.classList.add('reservation-message');
        message.innerHTML = `<strong>Reservation Confirmed!</strong><br>We look forward to seeing you at Urban Grill.`;
        form.appendChild(message);

        setTimeout(() => {
            message.classList.add('show');
        }, 50);

        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => message.remove(), 500);
        }, 5000);
    }, 2500);
});