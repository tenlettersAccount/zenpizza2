$(document).ready(function () {

    // searchtegi elementti div ke engizedi
    $('.selectblog h4').click(function () {
        var element = $(this);//convert string to JQuery element
        //var elementspan= element.find("span").html();
        element.find("span").remove();//remove span elements
        var newString = element.text();

        $('.usin').append("<div class='tokstyle' contenteditable='false'>" + "<p>" + newString + "</p>" + "<div id='oyaspan'><img src='./images/fffclose.png' alt=''></div></div>");

    });

    $(document.body).on('click', '#oyaspan', function () {
        console.log('asd');
        $(this).closest('.tokstyle').remove();
        /*
         //mnau kaita joip kaita ornyna koiw uwin
         var nstr2 = $(this).closest('.tokstyle');
         nstr2.find("span").remove();
         var newString323 = nstr2.html();

         var nstr2span = $(this).closest('.tokstyle').find('span').text();


         $('.h4turatyn').append("<h4>" + newString323 +"<span>"+ nstr2span +"</span>"+"</h4>" +"</h4>")
         */
    });

    //elementtin ozin joiad

    $('.selectblog h4').click(function () {
        $(this).hide();
    });

    $(".selectblog h4").hover(function () {
        $(this).css("background-color", "#f6f6f6");
        $(this).find('.fa-shopping-basket').css("color", "#6D444C");
    }, function () {
        $(this).css("background-color", "#fff");
        $(this).find('.fa-shopping-basket').css("color", "#DDDDDD");
    });

    //span joiady selected elemntti

    $('.ufa-search').click(function () {
        $('.fa-search').css({display: 'none'});
        $('.asdfghjk').removeClass('animated fadeInRight');
        $('.asdfghjk').addClass('animated fadeOut');
        $('.usin').css({border: '2px solid  #dddddd', width: '460px', padding: '6px 30px 8px 8px'});
        $('.usearch').css({width: '485px'});

        $('.fa-search').css({opacity: '0'});
        $('.asdfghjk').css({display: 'none'});

        setTimeout(function () {
            $('.rotateclose').css({display: 'inherit'});
            $('.rotateclose').removeClass('animated fadeOut');
            $('.rotateclose').addClass('animated fadeIn');
        }, 500);
    });
    $('.rotateclose').click(function () {
        $('.darkback').css({display: 'none'});
        $('.tokstyle').css({display: 'none'});
        $('.darkback').css({display: 'none'});

        $('.selectblog').removeClass('animated fadeIn');
        $('.selectblog').addClass('animated fadeOut');

        $('.fa-search').css({display: 'block'});
        $('.fa-search').addClass('animated fadeIn');
        $('.rotateclose').css({display: 'none'});

        $('.rotateclose').removeClass('animated fadeIn');
        $('.rotateclose').addClass('animated fadeOut');

        $('.usin').css({border: 'none', width: '0px', padding: '0'});

        setTimeout(function () {
            $('.selectblog').css({display: 'none'});
            $('.usearch').css({width: '30px'});
            $('.asdfghjk').removeClass('animated fadeOut');
            $('.asdfghjk').addClass('animated fadeInRight');
            $('.asdfghjk').css({display: 'inline-block'});
        }, 600);
    });

    $('.usin').click(function () {
        $('.darkback').css({display: 'block'});
        $('.selectblog').css({display: 'block'});
        $('.selectblog').removeClass('animated fadeOut');
        $('.selectblog').addClass('animated fadeIn');

        setTimeout(function () {

        }, 500);
    });

    //search for safari browser
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.search-container input').css({top: '0px', left: '-4px'});
        $('.search-container form').css({top: '15px'});
        $('.in form').css({top: '-10px'});
        $('.open form').css({top: '-10px'});
    }
    //new card type order button
    $('.orderredb').click(function () {
        $(this).css({display: 'none'});
        $('.typespm').css({display: 'block'});
        $('.typespm').addClass('animated fadeIn');

    });

    $('.questions li').click(function () {
        $('.acc').slideUp(400);
        if ($(this).next('.acc').css('display') != 'block') {
            $(this).next('  .acc').slideDown(400);
        }
        $('.questions li').removeClass('semibold');
        $(this).addClass('semibold');

    });

    $('footer').parents('.zen_content_wrapper').css('overflow', 'hidden');


    /*
     var s = $('.search-container input'),
     f = $('.search-container'),
     a = $('.after'),
     m = $('h4');

     s.focus(function () {
     if (f.hasClass('open')) return;
     f.addClass('in');
     setTimeout(function () {
     f.addClass('open');
     f.removeClass('in');
     }, 2000);
     });

     a.on('click', function (e) {
     e.preventDefault();
     if (!f.hasClass('open')) return;
     s.val('');
     f.addClass('close');
     f.removeClass('open');
     f.removeClass('close');
     })

     f.submit(function (e) {
     e.preventDefault();
     m.html('Thanks, high five!').addClass('show');
     f.addClass('explode');
     setTimeout(function () {
     s.val('');
     f.removeClass('explode');
     m.removeClass('show');
     }, 3000);
     })

     */
    var image = document.getElementById('myImage');
    image.src = "images/nevybronnyi.png";

    $('#ch2').click(function () {
        image.src = "images/marina.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);

    });
    $('#ch3').click(function () {
        image.src = "images/souse.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });
    $('#ch4').click(function () {
        image.src = "images/chesnochnyi.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });
    $('#ch5').click(function () {
        image.src = "images/souse.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });
    $('#ch6').click(function () {
        image.src = "images/syrnyy.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });
    $('#ch7').click(function () {
        image.src = "images/souse.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });
    $('#ch8').click(function () {
        image.src = "images/souse.png";
        $('.souse3').addClass('animated fadeIn');
        setTimeout(function () {
            $('.souse3').removeClass('animated fadeIn');
        }, 500);
    });

    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function () {
        return $star_rating.each(function () {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };

    $star_rating.on('click', function () {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });

    SetRatingStar();

    $('.munum').click(function () {
        //$('.zen_sidebar').hide("slide", { direction: "left" }, 1000);
        //$('.').show("slide", { direction: "left" }, 1000);
        $('.zen_sidebar').animate({'width': 'toggle'}, 1000);
    });

    $('.getcontenthide').click(function () {
        $('.gett').removeClass('animated slideInUp');
        $('.gett').addClass('animated slideOutDown');
        setTimeout(function () {
            $('.gett').css({'display': 'none'});
            $('.getpresent').css({'display': 'block'});
            $('.ffordermain').css({'display': 'block'});
            $('.getpresent').addClass('animated fadeIn');
        }, 500);


    });

    $('.getpresent, .chbutton').click(function () {
        $('.gett').css({'display': 'block'});
        $('.gett').removeClass('animated slideOutDown');
        $('.gett').addClass('animated slideInUp');
        $('.getpresent').css({'display': 'none'});
        $('.ffordermain').css({'display': 'none'});
    });

    $('.closelight').click(function () {
        $(this).parents('.widthjuz').css({'display': 'none'});
    });

    $('.nplus').click(function () {
        var counter = $(this).parents('.numberpm').find('.sumof').val();
        console.log(counter);
        counter++;
        $(this).parents('.numberpm').find('.sumof').val(counter);
        $(this).parents('.numberpm').find('.sumof').html(counter);
    });

    $('.nminus').click(function () {
        var counter = $(this).parents('.numberpm').find('.sumof').val();
        console.log(counter);
        if (counter == 0) {
            $(this).parents('.numberpm').find('.sumof').html(0);
        } else {
            counter--;
            $(this).parents('.numberpm').find('.sumof').val(counter);
            $(this).parents('.numberpm').find('.sumof').html(counter);
        }

    });

    $('.mainb2').click(function () {
        $('.nodecor').css({'display': 'none'});
        $(".decor").show("slide", {direction: "down"}, 500);
    });

    $('.rectangle2').click(function () {
        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 200);

        //$('.fastorder').removeClass('animated slideOutRight');
        $(".fastorder").show("slide", {direction: "right"}, 500);
        $('.nodecor').css({'display': 'none'});
        $('.decor2').css({'display': 'block'});
        setTimeout(function () {
            $('.fclose').fadeIn('slow');
        }, 500);

    });

    $('.big_zen_card h4, .img').click(function () {
        $(".fclose").css({opacity: 1, display: 'none'});
        $('.nodecor').css('display', 'none');
        $('.decor').css({display: 'none'});
        $('.decor3').css({display: 'block'});

        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');

        $('.commentr').fadeIn(50);
        $(".fastorder").show("slide", {direction: "right"}, 500, function () {
            $('.fclose').fadeIn(50);
        });
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 200);

    });

    $('.backto').click(function () {
        $('.decor').css({'display': 'none'});
        $('.nodecor').css({'display': 'block'});
    });
    $('.mainb1').click(function () {
        $('.fforder').removeClass('animated fadeOutDown');
        $('.fforder').slideDown();
    });

    $('.ffootclose').click(function () {
        $('.absh2').css({
            marginBottom: '0px'
        });
        $('.fforder').removeClass('animated fadeOutDown');
        $('.fforder').addClass('animated fadeOutDown');
        setTimeout(function () {
            $('.fforder').css({'display': 'none'});
        }, 400);
        $('.getpresent').fadeIn(500);
        $('.ffordermain').fadeIn(500);
    });

    $('.fa-shopping-basket').parents('li').click(function () {
        if ($('.nodecor').css('display') == 'block') {
            $(".fclose").animate({
                opacity: 0
            }, 10);
            $(".fclose").hide();
            console.log(1);
            $('.nodecor').show(300);
            $(".fastorder").hide("slide", {direction: "right"}, 500, function () {
                $('.mainfastorder').css({display: 'none'});
                $('.modalfastorder').css({display: 'none'});
                $(".nodecor").css({display: 'none'});
            });

            $('.modalfastorder').animate({
                backgroundColor: 'transparent'
            }, 200);
        } else {
            if ($('.decor3').css('display') == 'block') {
                console.log(2);
                $(".fclose").css({opacity: 1});
                $('.decor3').fadeOut(500);
                $('.decor').css('display', 'none');
                $('.nodecor').css('display', 'block');

                $('.mainfastorder').css('display', 'block');
                $('.modalfastorder').css('display', 'block');
                $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
                $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);

                $(".fastorder").hide("slide", {direction: "right"}, 500);
                setTimeout(function () {
                    $(".nodecor").fadeIn(400);
                    $(".fastorder").show("slide", {direction: "right"}, 500, function () {
                        $(".fclose").show();
                    });
                }, 100);
                $('.modalfastorder').animate({
                    backgroundColor: 'rgba(0, 0, 0, 0.14)'
                }, 200);
            } else {
                if ($('.decor2').css('display') == 'block') {

                    $('.modalfastorder').css('display', 'block');
                    $('.mainfastorder ').css('display', 'block');
                    $('.fclose').fadeIn(1200);
                    console.log(88);
                    $('.decor2').fadeOut(500);
                    $(".fastorder").hide("slide", {direction: "right"}, 500);
                    setTimeout(function () {
                        $(".fastorder").show("slide", {direction: "right"}, 500);
                    }, 500);

                    $('.decor3').css('display', 'none');
                    $('.decor').css('display', 'none');
                    $('.nodecor').fadeIn(500);

                    $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
                    $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);

                    $('.modalfastorder').animate({
                        backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }, 200);

                } else {
                    $(".fclose").css({opacity: 1, display: 'none'});
                    console.log(3);
                    $('.decor3').css('display', 'none');
                    $('.decor').css('display', 'none');
                    $('.nodecor').css('display', 'block');
                    $('.modalfastorder').css('display', 'block');
                    $('.mainfastorder').css('display', 'block');
                    $(".fastorder").show("slide", {direction: "right"}, 500, function () {
                        $(".fclose").fadeIn(50);
                    });
                    $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
                    $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);

                    $('.modalfastorder').animate({
                        backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }, 200);
                    $('.decor2').css('display', 'none');
                }
            }
        }
    });

    $('.fclose, .modalfastorder').click(function () {
        $('.fclose').css({opacity: 0});
        $('.fclose').hide();
        $('.zen_popup_bg').fadeOut(100);
        $(".fastorder").hide("slide", {direction: "right"}, 500, function () {
            $('.modalfastorder').css('display', 'none');
            $('.mainfastorder ').css('display', 'none');
            $('.nodecor').hide();
            $(".fclose").css({opacity: 0});
        });
        $('.modalfastorder').animate({
            backgroundColor: 'transparent'
        }, 200);
    });

    jQuery(function ($) {
        $(".ftel").mask("+7(999)-999-99-99");

    });

    $('.bplus').click(function () {
        var counter = $(this).parents('.zencardfooter').find('.zenval').val();
        counter++;
        $(this).parents('.zencardfooter').find('.zenval').val(counter);
        $(this).parents('.zencardfooter').find('.zenval').html(counter);
    });

    $('.bminus').click(function () {
        var counter = $(this).parents('.zencardfooter').find('.zenval').val();
        if (counter == 0) {
            $(this).parents('.zencardfooter').find('.zenval').html(0);
        } else {
            counter--;
            $(this).parents('.zencardfooter').find('.zenval').val(counter);
            $(this).parents('.zencardfooter').find('.zenval').html(counter);
        }

    });

    $(".zen_button").click(function () {
        $(this).css({
            'opacity': '0',
            'z-index': '1'
        });
        $(this).parents('.big_zen_card').find(".zencardfooter").css({
            'opacity': '1'
        });
        $(this).parents('.big_zen_card').find('.zeneq').css({
            'opacity': '1'
        });
    });
    $(".bminus").click(function () {
        var circle = $(this).parents('.zencardfooter').find(".zeneq");
        circle.animate({
            paddingTop: '30px',
            color: '#5F323A'
        }, 220, function () {
            circle.css({paddingTop: '0px'});
            circle.animate({
                paddingTop: '10px',
                color: 'white'
            }, 220);
        });
    });

    $(".bplus").click(function () {
        var circle = $(this).parents('.zencardfooter').find(".zeneq");
        circle.animate({
            paddingTop: '0',
            color: '#5F323A',
        }, 220, function () {
            circle.css({paddingTop: '30px'});
            circle.animate({
                paddingTop: '10px',
                color: 'white'
            }, 220);
        });
    });

    // анимация при добавлении товара в корзину
    $(document.body).on('click', '.bplus', function () {
        $('.fa-shopping-basket').parents('li').addClass('cbutton--click');
        setTimeout(function () {
            $('.fa-shopping-basket').parents('li').removeClass('cbutton--click');
        }, 500);
    });
    $('.sbheadfff h4 span .fa').click(function(){
        $('.fa-shopping-basket').parents('li').addClass('cbutton--click');
        setTimeout(function () {
            $('.fa-shopping-basket').parents('li').removeClass('cbutton--click');
        }, 500);
    });
    // анимация при добавлении товара в избранное
    $(document.body).on('click', '.vizbrannoe', function () {
        $('.fa-heart').parents('li').addClass('cbutton--click');
        setTimeout(function () {
            $('.fa-heart').parents('li').removeClass('cbutton--click');
        }, 500);
    });

    // scroll down when click to выбрать подарок in bascket
    $(".getpresent, .chbutton").click(function () {
        $('.fastorder').animate({
            scrollTop: $(".getcontenthide").offset().top
        }, 2000);
    });

    // scrolldown to block below
    $("#section05 span").click(function () {
        $('body').animate({
            scrollTop: $(".block_2").offset().top
        }, 800);
    });

    var checkbox_index = 0;
    $('.checkbox').click(function () {
        $(this).children('ul').slideToggle('fast');
    });

    $('.checkbox ul li').click(function () {
        var li_html = $(this).html();
        $(this).parents('.checkbox').children('.checkbox_result').html(li_html);
        $(this).parents('.checkbox').children('.checkbox_arrow').css({
            borderColor: 'green',
            width: '15px'
        });
    });

    $('.radio li').prepend('<div class="radio_circle"><div class="radio_circle_in"></div></div>');

    $('.text_radio li').click(function () {

        $(this).parents('ul').find('li').removeClass('li_active');
        $(this).addClass('li_active');
    });

    /*Жду звонка*/
    $('.zen_nav_feedback li:first-child').click(function () {
        if ($('.zen_popup_nav').css('display') == 'block') {
            $('.zen_popup_bg').fadeOut('fast');
            $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);
            $(".zclose").fadeIn(200);
        } else {
            $('.nodecor').css('display', 'none');
            $('.zen_popup_bg').fadeIn('fast');
            $(".zen_popup_nav").show("slide", {direction: "right"}, 500);
            $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
            $(".fastorder").hide("slide", {direction: "right"}, 400);
            setTimeout(function () {
                $('.mainfastorder').hide();
                $('.modalfastorder').hide();
            }, 500);
            $('.fclose').hide();
            $(".zclose").fadeIn();
        }
    });

    $('.zen_nav_feedback li:last-child').click(function () {
        if ($('.zen_popup_nav2').css('display') == 'block') {
            console.log(44);
            $('.zen_popup_bg').fadeOut('fast');
            $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
            $('.marina_img2').fadeOut(500);
            //$(".zclose2").fadeIn(200);
        } else {
            console.log(55);
            $('.nodecor').css('display', 'none');
            $('.zen_popup_bg').fadeIn('fast');
            $(".zen_popup_nav2").show("slide", {direction: "right"}, 500);
            $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);
            $(".fastorder").hide("slide", {direction: "right"}, 500);
            setTimeout(function () {
                $('.mainfastorder').hide();
                $('.modalfastorder').hide();
            }, 500);
            $('.fclose').hide();
            $('.marina_img2').fadeIn(500);
            $(".zclose2").show();
        }

    });
    /*/Жду звонка*/

    $('.zen_popup_bg, .zclose, .zclose2').click(function () {
        $('.zen_popup_bg').fadeOut('fast');
        $(".zen_popup_nav2").hide("slide", {direction: "right"}, 500);
        $(".zen_popup_nav").hide("slide", {direction: "right"}, 500);
        $('.fclose').hide();

        setTimeout(function () {
            $('.zen_popup_nav').css('display', 'none');
            $('.zen_popup_nav2').css('display', 'none');
        }, 500);
    });

    $('.zen_call_form button').click(function () {
        $('.zen_call_form').fadeOut(400);
        setTimeout(function () {
            $('.zen_call_timer').fadeIn(400);
        }, 400);
    });

    $('body').on('click', '.radio_circle', function () {
        $(this).parents('ul').find('.radio_circle_in').removeClass('radio_circle_in_active');
        $(this).children('.radio_circle_in').addClass('radio_circle_in_active');
    });

    var buttons7Click = Array.prototype.slice.call(document.querySelectorAll('#btn-click button')),
        buttons9Click = Array.prototype.slice.call(document.querySelectorAll('button.btn-8g')),
        totalButtons7Click = buttons7Click.length,
        totalButtons9Click = buttons9Click.length;

    buttons7Click.forEach(function (el, i) {
        el.addEventListener('click', activate, false);
    });
    buttons9Click.forEach(function (el, i) {
        el.addEventListener('click', activate, false);
    });

    function activate() {
        var self = this, activatedClass = 'btn-activated';

        if (classie.has(this, 'btn-7h')) {
            // if it is the first of the two btn-7h then activatedClass = 'btn-error';
            // if it is the second then activatedClass = 'btn-success'
            activatedClass = buttons7Click.indexOf(this) === totalButtons7Click - 2 ? 'btn-error' : 'btn-success';
        }
        else if (classie.has(this, 'btn-8g')) {
            // if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
            // if it is the second then activatedClass = 'btn-error3d'
            activatedClass = buttons9Click.indexOf(this) === totalButtons9Click - 2 ? 'btn-success3d' : 'btn-error3d';
        }

        if (!classie.has(this, activatedClass)) {
            classie.add(this, activatedClass);
            setTimeout(function () {
                classie.remove(self, activatedClass)
            }, 1000);
        }
    }

    // close search block
    $('.darkback').click(function () {
        $('.selectblog').removeClass('animated fadeIn');
        $('.selectblog').slideUp(400, function(){
            $('.darkback').fadeOut(200);
        });
    });




});


