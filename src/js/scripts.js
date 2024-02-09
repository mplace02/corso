const body = document.querySelector('body');//variabile "var nome variabile" 
const el = document.querySelector('.js-btn-hamburger');

el.onclick = function(){
    body.classList.toggle('menu-is-open');
}