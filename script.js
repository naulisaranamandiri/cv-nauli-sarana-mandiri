// Fade-in card saat scrolling
const cards = document.querySelectorAll('.fade-card');


function checkScroll() {
const trigger = window.innerHeight - 100;


cards.forEach(card => {
const top = card.getBoundingClientRect().top;
if (top < trigger) {
card.classList.add('visible');
}
});
}


window.addEventListener('scroll', checkScroll);
checkScroll();