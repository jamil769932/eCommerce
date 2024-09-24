document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    if (bar) {
        bar.addEventListener('click', () => {
          nav.style.marginRight='0px'

        });
    }
    if (close) {
        close.addEventListener('click', () => {
          nav.style.marginRight='-200px'

        });
    }
});