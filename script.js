document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.offsetTop;
        const offset = 75;

        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('#nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('menu-opened');
});
