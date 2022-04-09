$(function () {
    $('body').addClass('overflow');
});

const hamover = document.querySelector('.hamburger');

hamover.addEventListener('click', ()=>{
    $('body').toggleClass('overflow');
});


