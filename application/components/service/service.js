$(document).ready(function () {
    $('.service__offer__dishes__link').hover(function () {
        $(this).children('.service__offer__dishes__more').fadeIn(300)
    }, function () {
        $(this).children('.service__offer__dishes__more').fadeOut(300)
    })
});