const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function toggleMenu(){
    sidebar.classList.toggle('open');
    document.body.classList.toggle('menu-open');
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){ 
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});