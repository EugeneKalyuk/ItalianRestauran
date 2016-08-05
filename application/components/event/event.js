$(document).ready(function () {

    if(window.innerWidth > 767){

    $('.event__sale__link').hover(function () {
        $('.event__sale__link').css({width:'100%', transition: 'all .5s'})
    }, function () {
        $('.event__sale__link').css({width:'80%', transition: 'all .5s'})
    })
    }
    // if(window.innerWidth <= 767){
    //     $('.event__sale__link').hover(function () {
    //         $('.event__sale__link').css({height: '150px', transition: 'all .5s'})
    //     }, function () {
    //         $('.event__sale__link').css({height: '100px', transition: 'all .5s'})
    //     })
    // }
});