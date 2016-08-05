$(document).ready(function () {
    if(window.innerWidth>=1920){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '70px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if(window.innerWidth>=1360){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '65px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if (window.innerWidth>=992){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '62px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if(window.innerWidth>=768){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '58px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });

    }

    if(window.innerWidth <= 768){
        $('#toggle-nav').addClass(' navbar-fixed-top');
        var img = $('#toggle-img').html();

        $('#toggle-img').html('');
        $('.header__nav__black-box').html('<a href="#" class="menu-open"><i class="fa fa-align-justify menu-open" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i></a><div id="return-img">' + img + '</div><a href="#"><i id="contact" class="fa fa-ellipsis-v" aria-hidden="true"></i></a>');
        $('#active').addClass('selected');
        $('#active').children('a').css('color', 'white');
        $('#active').append('<i class="fa fa-chevron-down" id="arrow-1" aria-hidden="true"></i>');
        $('#active_2').append('<i class="fa fa-chevron-down arrow__2" id="arrow-2" aria-hidden="true"></i>');
        $('.menu-open').click(function () {

            $('.fa-align-justify').css({transform: 'rotate(-180deg)',opacity: '1', transition:'all .5s'});
            $('.fa-arrow-down').css({transform: 'rotate(-90deg)',opacity: '0', transition:'all .5s'});


            if($('.menu-open').hasClass('opened') === true) {
                $('.nav-menu').stop(false,true).animate({marginLeft:'-50%'},600);
                $('.menu-open').toggleClass('opened');


            } else {
                $('.nav-menu').stop(false,true).animate({marginLeft:'-5%'},600);
                $('.menu-open').toggleClass('opened');
                $('.fa-align-justify').css({transform: 'rotate(180deg)',opacity: '0', transition:'all .5s'});
                $('.fa-arrow-down').css({transform: 'rotate(90deg)',opacity: '1', transition:'all .5s'});
            }});
        $('#arrow-1').click(function () {
            $('.nav-menu__sub').slideToggle("slow");
        });
        $('#arrow-2').click(function () {
            $('.nav-menu__last-menu').slideToggle("slow");
            $('.nav-menu__sub__item_whith-menu').toggleClass('selected-2')
        });
        $('#contact').click(function () {
            $('.header__contact').fadeToggle(300)
        });

        if(window.innerWidth<=359){
            $('#toggle-nav').addClass(' navbar-fixed-top');
            var img = $('#toggle-img').html();

            $('#toggle-img').html('');
            $('.header__nav__black-box').html('<a href="#" class="menu-open"><i class="fa fa-align-justify menu-open" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i></a>' + img + '<a href="#"><i id="contact" class="fa fa-ellipsis-v" aria-hidden="true"></i></a>');
            $('#active').addClass('selected');
            $('#active').children('a').css('color', 'white');
            $('#active').append('<i class="fa fa-chevron-down" id="arrow-1" aria-hidden="true"></i>');
            $('#active_2').append('<i class="fa fa-chevron-down arrow__2" id="arrow-2" aria-hidden="true"></i>');
            $('.menu-open').click(function () {

                $('.fa-align-justify').css({transform: 'rotate(-180deg)',opacity: '1', transition:'all .5s'});
                $('.fa-arrow-down').css({transform: 'rotate(-90deg)',opacity: '0', transition:'all .5s'});


                if($('.menu-open').hasClass('opened') === true) {
                    $('.nav-menu').stop(false,true).fadeOut(600);
                    $('.menu-open').toggleClass('opened');


                } else {
                    $('.nav-menu').stop(false,true).fadeIn(600);
                    $('.menu-open').toggleClass('opened');
                    $('.fa-align-justify').css({transform: 'rotate(180deg)',opacity: '0', transition:'all .5s'});
                    $('.fa-arrow-down').css({transform: 'rotate(90deg)',opacity: '1', transition:'all .5s'});
                }});
            $('#arrow-1').click(function () {
                $('.nav-menu__sub').slideToggle("slow");
            });
            $('#arrow-2').click(function () {
                $('.nav-menu__last-menu').slideToggle("slow");
                $('.nav-menu__sub__item_whith-menu').toggleClass('selected-2')
            });
            $('#contact').click(function () {
                $('.header__contact').fadeToggle(300)
            });
        }



    }

});


$(document).resize(function () {
    if(window.innerWidth>=1920){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '70px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if(window.innerWidth>=1360){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '65px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if (window.innerWidth>=992){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '62px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
    }

    if(window.innerWidth>=768){
        $('.nav-menu__main__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(200).animate({top: '58px', opacity: 1}, 300);
            $(this).children('a').css({color: '#76c212', transition: 'color .5s'})

        }, function () {
            $(this).children('ul').stop(false, true).animate({top: '200px', opacity: 0}, 300).fadeOut(300);
            $(this).children('a').css({color: 'black', transition: 'color .5s'})
        });

        $('.nav-menu__sub__item').hover(function () {
            $(this).children('ul').stop(true, true).fadeIn(300);
            $(this).children('a').css('color', '#7cffa1')
        }, function () {
            $(this).children('ul').stop(true, true).fadeOut(300);
            $(this).children('a').css('color', 'white')
        });
        var imgReturning = $('#return-img').html();
        console.log(imgReturning)
    }

    if(window.innerWidth <= 768){
        $('#toggle-nav').addClass(' navbar-fixed-top');
        var img = $('#toggle-img').html();

        $('#toggle-img').html('');
        $('.header__nav__black-box').html('<a href="#" class="menu-open"><i class="fa fa-align-justify menu-open" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i></a><div id="return-img">' + img + '</div><a href="#"><i id="contact" class="fa fa-ellipsis-v" aria-hidden="true"></i></a>');
        $('#active').addClass('selected');
        $('#active').children('a').css('color', 'white');
        $('#active').append('<i class="fa fa-chevron-down" id="arrow-1" aria-hidden="true"></i>');
        $('#active_2').append('<i class="fa fa-chevron-down arrow__2" id="arrow-2" aria-hidden="true"></i>');
        $('.menu-open').click(function () {

            $('.fa-align-justify').css({transform: 'rotate(-180deg)',opacity: '1', transition:'all .5s'});
            $('.fa-arrow-down').css({transform: 'rotate(-90deg)',opacity: '0', transition:'all .5s'});


            if($('.menu-open').hasClass('opened') === true) {
                $('.nav-menu').stop(false,true).animate({marginLeft:'-100%'},600);
                $('.menu-open').toggleClass('opened');


            } else {
                $('.nav-menu').stop(false,true).animate({marginLeft:'-5%'},600);

                $('.menu-open').toggleClass('opened');
                $('.fa-align-justify').css({transform: 'rotate(180deg)',opacity: '0', transition:'all .5s'});
                $('.fa-arrow-down').css({transform: 'rotate(90deg)',opacity: '1', transition:'all .5s'});
            }});
        $('#arrow-1').click(function () {
            $('.nav-menu__sub').slideToggle("slow");
        });
        $('#arrow-2').click(function () {
            $('.nav-menu__last-menu').slideToggle("slow");
            $('.nav-menu__sub__item_whith-menu').toggleClass('selected-2')
        });
        $('#contact').click(function () {
            $('.header__contact').fadeToggle(300)
        });

        if(window.innerWidth<=359){
            $('#toggle-nav').addClass(' navbar-fixed-top');
            var img = $('#toggle-img').html();

            $('#toggle-img').html('');
            $('.header__nav__black-box').html('<a href="#" class="menu-open"><i class="fa fa-align-justify menu-open" aria-hidden="true"></i><i class="fa fa-arrow-down" aria-hidden="true"></i></a>' + img + '<a href="#"><i id="contact" class="fa fa-ellipsis-v" aria-hidden="true"></i></a>');
            $('#active').addClass('selected');
            $('#active').children('a').css('color', 'white');
            $('#active').append('<i class="fa fa-chevron-down" id="arrow-1" aria-hidden="true"></i>');
            $('#active_2').append('<i class="fa fa-chevron-down arrow__2" id="arrow-2" aria-hidden="true"></i>');
            $('.menu-open').click(function () {

                $('.fa-align-justify').css({transform: 'rotate(-180deg)',opacity: '1', transition:'all .5s'});
                $('.fa-arrow-down').css({transform: 'rotate(-90deg)',opacity: '0', transition:'all .5s'});


                if($('.menu-open').hasClass('opened') === true) {
                    $('.nav-menu').stop(false,true).fadeOut(600);
                    $('.menu-open').toggleClass('opened');


                } else {
                    $('.nav-menu').stop(false,true).fadeIn(600);
                    $('.menu-open').toggleClass('opened');
                    $('.fa-align-justify').css({transform: 'rotate(180deg)',opacity: '0', transition:'all .5s'});
                    $('.fa-arrow-down').css({transform: 'rotate(90deg)',opacity: '1', transition:'all .5s'});
                }});
            $('#arrow-1').click(function () {
                $('.nav-menu__sub').slideToggle("slow");
            });
            $('#arrow-2').click(function () {
                $('.nav-menu__last-menu').slideToggle("slow");
                $('.nav-menu__sub__item_whith-menu').toggleClass('selected-2')
            });
            $('#contact').click(function () {
                $('.header__contact').fadeToggle(300)
            });
        }



    }

});

$(window).scroll(function () {
    if(window.innerWidth>=1920){

        if (window.scrollY >= 400) {
            $('#toggle-nav').addClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'white');
            $('#toggle-nav').css('margin', '0')

        } else {
            $('#toggle-nav').removeClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'transparent');
            $('#toggle-nav').css('margin-top', '5%')
        }

    }

    if(window.innerWidth>=1360){

        if (window.scrollY >= 440) {
            $('#toggle-nav').addClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'white');
            $('#toggle-nav').css('margin', '0')

        } else {
            $('#toggle-nav').removeClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'transparent');
            $('#toggle-nav').css('margin-top', '5%')
        }

    }

    if(window.innerWidth>=992){

        if (window.scrollY >= 370) {
            $('#toggle-nav').addClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'white');
            $('#toggle-nav').css('margin', '0')

        } else {
            $('#toggle-nav').removeClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'transparent');
            $('#toggle-nav').css('margin-top', '5%')
        }
    }

    if(window.innerWidth>=768){

        if (window.scrollY >= 220) {
            $('#toggle-nav').addClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'white');
            $('#toggle-nav').css('margin', '0')

        } else {
            $('#toggle-nav').removeClass(' navbar-fixed-top');
            $('#toggle-nav').css('backgroundColor', 'transparent');
            $('#toggle-nav').css('margin-top', '5%')
        }

    }

});
