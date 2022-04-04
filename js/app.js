
/*JavaScript*/

const ham = document.querySelector('.hamburger');
const enlaces = document.querySelector('.links');
const bar = document.querySelectorAll('.hamburger span')
const body = document.querySelector('body');
ham.addEventListener('click', ()=>{
    enlaces.classList.toggle('active');
    bar.forEach(child =>{child.classList.toggle('animate')});
    body.classList.toggle('no-overflow')
});

/*JQuery*/

$(function () {
    $('.title').addClass('LtR');
    $('#main-nav img').addClass('LtR');
    $('.hamburger').addClass('RtL');
    $('footer').addClass('LtR');
    $('.fa-facebook').addClass('TtB');
    $('.fa-instagram').addClass('BtT');
    $('.fa-twitter').addClass('TtB');
    $('.fa-youtube').addClass('BtT');
    $('.fa-spotify').addClass('TtB');
});