// form check

$(document).ready(

    // form check for name

    function (){
        $('.footer__form__box__name__aray').focusout(function () {
            var userName = $('.footer__form__box__name__aray').val();

            if (userName.length>0){
                $('.error__text__name').fadeOut(300)
            } else {
                $('.error__text__name').fadeIn(300)
            }

        });

        // form check for e-mail    

        $('.footer__form__box__email__aray').focusout(function () {
            var userEmail = $('.footer__form__box__email__aray').val(),
                regularEmail = /^([0-9a-zA-Z]([-.w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-w]*[0-9a-zA-Z].)+[a-zA-Z]{2,9})$/;

            if (userEmail.length>0){

                if(regularEmail.test(userEmail)==true){
                    $('.error__text__email').fadeOut(300)
                } else $('.error__text__email').fadeIn(300)


            } else {
                $('.error__text__email').fadeIn(300)
            }

        });

        // form check for message


        $('.footer__form__box__text__aray').focusout(function () {
            var userName = $('.footer__form__box__text__aray').val();

            if (userName.length>0){
                $('.error__text__arey').fadeOut(300)
            } else {
                $('.error__text__arey').fadeIn(300)
            }

        });
    });