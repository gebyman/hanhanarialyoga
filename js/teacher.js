const card = document.querySelector('.card');
const touch = document.querySelector('.touch');
const text = document.querySelector('.text');
let cardNoExpanded = false;
const screen = window.matchMedia('(max-width: 391px)');


function hiddenText() {
    if (screen.matches) {
        text.classList.add('hidden');
        card.classList.add('hidden');
    } else {
        text.classList.remove('hidden');
        card.classList.remove('hidden');
    }
}


function hiddenTouch() {
    if (screen.matches) {
        touch.classList.add('hidden');
    } else {
        touch.classList.remove('hidden');
    }
}


card.addEventListener('click', function(e) {
    if (screen.matches) {
        return;
    }
    if (cardNoExpanded) {
        card.style.width = '28%';
        card.style.transition = '1s ease-in';
        touch.classList.remove('hidden');
    } else {
        card.style.width = '95%';
        card.style.transition = '1s ease-in';
        touch.classList.add('hidden');
    }
    cardNoExpanded = !cardNoExpanded;
});


const cardMobile = document.querySelector('.cardMobile');

function toggleCardVisibility() {
    if (screen.matches) {
        card.style.display = 'none';
        cardMobile.style.display = 'block';
    } else {
        card.style.display = 'flex';
        cardMobile.style.display = 'none';
    }
}

toggleCardVisibility();
hiddenText();
hiddenTouch();

screen.addEventListener('change', toggleCardVisibility);
screen.addEventListener('change', hiddenText);
screen.addEventListener('change', hiddenTouch);
