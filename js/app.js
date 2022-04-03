
/*JavaScript*/


const ham = document.querySelector('.hamburger');
const enlaces = document.querySelector('.links');
const bar = document.querySelectorAll('.hamburger span')
ham.addEventListener('click', ()=>{
    enlaces.classList.toggle('active');
    bar.forEach(child =>{child.classList.toggle('animate')})
});


/*JQuery*/

$(function () {
    $('.title').addClass('LtR');
    $('#main-nav img').addClass('LtR');
    $('.links').addClass('RtL');
    $('.hamburger').addClass('RtL');
    $('footer').addClass('LtR');
    $('.fa-facebook').addClass('TtB');
    $('.fa-instagram').addClass('BtT');
    $('.fa-twitter').addClass('TtB');
    $('.fa-youtube').addClass('BtT');
    $('.fa-spotify').addClass('TtB');
});