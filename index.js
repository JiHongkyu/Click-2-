const title = document.querySelector('.title');
const clicked_class = 'clicked';

function init() {
    title.addEventListener('click', handleClick);
}

function handleClick() {
    title.classList.toggle(clicked_class);
}

init();