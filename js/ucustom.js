$(document).ready(function () {


    $('.ufa-search').click(function () {
        $('.asdfghjk').removeClass('animated fadeInRight');
        $('.asdfghjk').addClass('animated fadeOut');
        $('.usin').css({ border:'2px solid  #dddddd',width:'460px', padding: '8px 30px 8px 8px'});
        $('.usearch').css({width:'485px'});


        $('.fa-search').css({opacity:'0'});
            $('.asdfghjk').css({display:'none'});

        setTimeout(function (){
            $('.rotateclose').css({display:'inherit'});
            $('.rotateclose').removeClass('animated fadeOut');
            $('.rotateclose').addClass('animated fadeIn');
        }, 500);

    });
    $('.rotateclose').click(function () {
        $('.darkback').css({display:'none'});
        $('.darkback').css({display:'none'});

        $('.selectblog').removeClass('animated fadeIn');
        $('.selectblog').addClass('animated fadeOut');


        $('.fa-search').css({opacity:'1'});
        $('.rotateclose').css({display:'none'});

        $('.rotateclose').removeClass('animated fadeIn');
        $('.rotateclose').addClass('animated fadeOut');


        $('.usin').css({ border:'none',width:'0px', padding: '0'});



        setTimeout(function (){
            $('.selectblog').css({display:'none'});
            $('.usearch').css({width:'30px'});
            $('.asdfghjk').removeClass('animated fadeOut');
            $('.asdfghjk').addClass('animated fadeInRight');
            $('.asdfghjk').css({display:'inline-block'});
        }, 600);
    });

    $('.usin').click(function () {
        $('.darkback').css({display:'block'});
        $('.selectblog').css({display:'block'});
        $('.selectblog').removeClass('animated fadeOut');
        $('.selectblog').addClass('animated fadeIn');

        setTimeout(function (){

        }, 500);
    });


    //search for safari browser
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('.search-container input').css({top:'0px', left:'-4px'});
        $('.search-container form').css({top:'15px'});
        $('.in form').css({top:'-10px'});
        $('.open form').css({top:'-10px'});
    }
    //new card type order button
    $('.orderredb').click(function () {
        $(this).css({display:'none'});
        $('.typespm').css({display:'block'});
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
        $('.zen_sidebar').animate({ 'width': 'toggle' }, 1000);
    });

    $('.getcontenthide').click(function () {
        $('.gett').removeClass('animated slideInUp');
        $('.gett').addClass('animated slideOutDown');
        setTimeout(function () {
            $('.gett').css({ 'display': 'none' });
            $('.getpresent').css({ 'display': 'block' });
            $('.ffordermain').css({ 'display': 'block' });
            $('.getpresent').addClass('animated fadeIn');
        }, 500);


    });

    $('.getpresent, .chbutton').click(function () {
        $('.gett').css({ 'display': 'block' });
        $('.gett').removeClass('animated slideOutDown');
        $('.gett').addClass('animated slideInUp');
        $('.getpresent').css({ 'display': 'none' });
        $('.ffordermain').css({ 'display': 'none' });
    });

    $('.closelight').click(function () {
        $(this).parents('.widthjuz').css({ 'display': 'none' });
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
        $('.nodecor').css({ 'display': 'none' });
        $( ".decor").show( "slide", { direction: "down" }, 500);

        /*$('.nodecor').css({ 'display': 'none' });
        $('.decor').css({ 'display': 'block' });
        $('.decor').addClass('animated fadeInUp');
        setTimeout(function(){
            $('.decor').removeClass('animated fadeInUp');
        }, 500);
        $('.fastorder').animate({
            scrollTop: $("h1").offset().top
        }, 500);*/
    });




    $('.rectangle2').click(function () {


        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 200);

        //$('.fastorder').removeClass('animated slideOutRight');
        $(".fastorder").toggle( "slide", { direction: "right" }, 500);
        $('.nodecor').css({ 'display': 'none' });
        $('.decor2').css({ 'display': 'block' });
        setTimeout(function () {
            $('.fclose').fadeIn('slow');
        }, 500);

        /*$('.mainfastorder').css('display', 'block');
        $('.fastorder').addClass('animated slideInRight');
        $('.mainfastorder').fadeIn('fast');
        setTimeout(function () {
            $('.fclose').fadeIn('slow');
        }, 500);

        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');

       //$('.fastorder').removeClass('animated slideOutRight');
        $('.nodecor').css({ 'display': 'none' });
        $('.decor2').css({ 'display': 'block' });


        $('.mainfastorder').css('display', 'block');
        $('.fastorder').addClass('animated slideInRight');
        $('.mainfastorder').fadeIn('fast');
        setTimeout(function () {
            $('.fclose').fadeIn('slow');
        }, 500);
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 200);
*/
        

    });


    $('.big_zen_card h4, .img').click(function () {
        $('.nodecor').css('display', 'none');
        $('.decor').css({ display: 'none' });
        $('.decor3').css({ display: 'block' });

        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');

        $('.commentr').fadeIn();
        $('.fclose').fadeIn('slow');
        $(".fastorder").show( "slide", { direction: "right"  }, 500 );
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 500);



        /*$('.fastorder').removeClass('animated fadeOutRight');
        $('.nodecor').css({ display: 'none' });
        $('.decor').css({ display: 'none' });
        $('.decor3').css({ display: 'block' });

        $('.mainfastorder').css('display', 'block');
        $('.modalfastorder').css('display', 'block');

        $('.fastorder').addClass('animated fadeInRight');

        setTimeout(function () {
            $('.commentr').fadeIn();
        }, 500);
        setTimeout(function(){
            $('.fclose').fadeIn('slow');
        }, 1000);
        $('.modalfastorder').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.14)'
        }, 500);*/

    });

    /*$('.fclose, .modalfastorder').click(function () {
        $('.fastorder').removeClass('animated fadeInRight');
        $('.fastorder').addClass('animated fadeOutRight');

        $('.fclose').css('display', 'none');
        setTimeout(function () {
            $('.nodecor').css('display', 'block');
            $('.mainfastorder').css('display', 'none');
        }, 1000);
    });
*/

    $('.backto').click(function () {
        $('.decor').css({ 'display': 'none' });
        $('.nodecor').css({ 'display': 'block' });
    });
    $('.mainb1').click(function () {
        $('.fforder').removeClass('animated fadeOutDown');
        $('.fforder').slideDown();
    });
    //d
    $('.ffootclose').click(function () {
        $('.absh2').css({
            marginBottom: '0px'
        });
        $('.fforder').removeClass('animated fadeOutDown');
        $('.fforder').addClass('animated fadeOutDown');
        setTimeout(function(){
            $('.fforder').css({ 'display': 'none' });
        }, 400);
        $('.getpresent').fadeIn(500);
        $('.ffordermain').fadeIn(500);
    });


     $('.fa-shopping-basket').parents('li').click(function () {
        if ( $('.nodecor').css('display') == 'block' ){
            console.log(1);
            $('.mainfastorder').css({display: 'block'});
            $('.modalfastorder').css({display: 'block'});
            $('.nodecor').show(300);
             
            $( ".fclose").toggle( "fade", 10);
            $( ".fastorder").toggle( "slide", { direction: "right" }, 500);
            $(".nodecor").fadeOut(400);

            $('.modalfastorder').animate({
                backgroundColor: 'transparent'
            }, 200);
        
         }else{
             if ( $('.decor3').css('display') == 'block' ){
                 console.log(2);
                 $('.decor3').fadeOut(500);
                 $('.decor').css('display', 'none');
                 $('.nodecor').css('display', 'block');
                 
                 $('.mainfastorder').css('display', 'block');
                 $('.modalfastorder').css('display', 'block');
                  $(".zen_popup_nav2").hide( "slide", { direction: "right"  }, 500 );
                    $(".zen_popup_nav").hide( "slide", { direction: "right"  }, 500 );
                  $(".fclose").show();

                  $(".fastorder").hide( "slide", { direction: "right" }, 500);
                  setTimeout(function(){
                      $(".nodecor").fadeIn(400);
                      $(".fastorder").show( "slide", { direction: "right" }, 500);
                  }, 100);
                  $('.modalfastorder').animate({
                        backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }, 200);
             }else{
                 console.log(3);
                    $('.decor3').css('display', 'none');
                    $('.decor').css('display', 'none');
                    $('.nodecor').css('display', 'block');
                    $('.modalfastorder').css('display', 'block');
                    $('.mainfastorder').css('display', 'block');
                    $(".fastorder").toggle( "slide", { direction: "right" }, 500);
                    $(".zen_popup_nav2").hide( "slide", { direction: "right"  }, 500 );
                    $(".zen_popup_nav").hide( "slide", { direction: "right"  }, 500 );

                    $(".fclose").toggle( "fade", 900);

                    $('.modalfastorder').animate({
                        backgroundColor: 'rgba(0, 0, 0, 0.14)'
                    }, 200);
                    $('.decor2').css('display', 'none');
             }
         }




         // old
        /*if ( $('.nodecor ').css('display') == 'block' ){
            $('.fastorder').removeClass('animated fadeInRight');
            $('.fastorder').addClass('animated fadeOutRight');
            
            $('.fclose').hide();
            setTimeout(function(){
                $('.mainfastorder').fadeOut(320);
                $('.nodecor ').css({display: 'none'});
            }, 650);
            

        }else{
            $('.fastorder').css('display', 'none');
            $('.fclose').hide();
            $('.fastorder').removeClass('animated fadeOutRight');
            $('.zen_popup_nav').removeClass('animated fadeInRight');
            $('.zen_popup_nav').addClass('animated fadeOutRight');
            $('.zen_popup_nav2').removeClass('animated fadeInRight');
            $('.zen_popup_nav2').addClass('animated fadeOutRight');
            $('.zen_popup_bg').fadeOut(300);
            $('.mainfastorder').css('display', 'block');
            $('.modalfastorder').css('display', 'block');
            setTimeout(function () {
                $('.fastorder').css('display', 'block');
                $('.zen_popup_nav').css('display', 'none');
                $('.zen_popup_nav2').css('display', 'none');
                $('.decor3').css('display', 'none');
                $('.decor').css('display', 'none');
                $('.nodecor').css('display', 'block');
                $('.fastorder').addClass('animated fadeInRight');
                $('.zen_popup_bg').css('display', 'none');
            }, 100);
            $('.modalfastorder').animate({
                backgroundColor: 'rgba(0, 0, 0, 0.14)'
            }, 500);
            setTimeout(function () {
                $('.fclose').fadeIn(600);
            }, 1100);

        }

        $('.decor2').css('display', 'none');*/
    });




    $('.fclose, .modalfastorder').click(function () {
        $('.zen_popup_bg').fadeOut(100);
        $(".fastorder").hide( "slide", { direction: "right"  }, 500 );
        $('.fclose').hide();
        $('.nodecor').fadeOut(200);

        setTimeout(function () {
            //$('.decor3').css({ display: 'none'});
            $('.modalfastorder').css('display', 'none');
            $('.mainfastorder ').css('display', 'none');
            
        }, 500);

        $('.modalfastorder').animate({
            backgroundColor: 'transparent'
        }, 500);
     
        
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
        }, 220, function(){
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
        }, 220, function(){
            circle.css({paddingTop: '30px'});
            circle.animate({
                paddingTop: '10px',
                color: 'white'
            }, 220);
        });
    });
    /*animation*/


    // http://stackoverflow.com/a/11381730/989439
    /*function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    var support = {animations: Modernizr.cssanimations},
        animEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        },
        animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
        onEndAnimation = function (el, callback) {
            var onEndCallbackFn = function (ev) {
                if (support.animations) {
                    if (ev.target != this) return;
                    this.removeEventListener(animEndEventName, onEndCallbackFn);
                }
                if (callback && typeof callback === 'function') {
                    callback.call();
                }
            };
            if (support.animations) {
                el.addEventListener(animEndEventName, onEndCallbackFn);
            }
            else {
                onEndCallbackFn();
            }
        },
        eventtype = mobilecheck() ? 'touchstart' : 'click';

    [].slice.call(document.querySelectorAll('.cbutton')).forEach(function (el) {
        el.addEventListener(eventtype, function (ev) {
            classie.add(el, 'cbutton--click');
            onEndAnimation(classie.has(el, 'cbutton--complex') ? el.querySelector('.cbutton__helper') : el, function () {
                classie.remove(el, 'cbutton--click');
            });
        });
    });*/

    // анимация при добавлении товара в корзину
    $(document.body).on('click', '.bplus', function () {
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

    /*$('.zen_nav_feedback').click(function () {
     $('.zen_popup_nav').removeClass('animated fadeOutRight');
     $('.zen_popup_nav').css('display', 'block');
     $('.zen_popup_nav').addClass('animated fadeInRight');
     $('.zen_popup_bg').fadeIn('fast');
     });*/

    /*Жду звонка*/
    $('.zen_nav_feedback li:first-child').click(function(){
        if ( $('.zen_popup_nav').css('display') == 'block' ){
            $('.zen_popup_bg').fadeOut('fast');
            $(".zen_popup_nav").toggle( "slide", { direction: "right" }, 500);
            $(".zclose").toggle( "fade", 400);
         }else{
            $('.nodecor').css('display', 'none');
            $('.zen_popup_bg').fadeIn('fast');
            $(".zen_popup_nav").toggle( "slide", { direction: "right" }, 500);
            $(".zen_popup_nav2").hide( "slide", { direction: "right" }, 500 );
            $(".fastorder").hide( "slide", { direction: "right" }, 400 );
             setTimeout(function(){
                $('.mainfastorder').hide();
                $('.modalfastorder').hide();
            }, 500);
            $('.fclose').hide();
            $(".zclose").fadeIn();
         }


       /* if($('.zen_popup_nav').css('display') == 'block') {
            $('.zen_popup_nav').css({display: 'none'});
            $('.zen_popup_bg').fadeOut(400);
        }else{
            $('.nodecor').css('display', 'none');
            $('.zen_popup_nav').addClass('animated fadeOutRight');
            $('.zen_popup_nav2').addClass('animated fadeOutRight');

            $('.fastorder').removeClass('animated fadeInRight');
            $('.fastorder').addClass('animated fadeOutRight');

            $('.fclose').css('display', 'none');
            $('.modalfastorder').css('display', 'none');
            setTimeout(function () {
                $('.zen_popup_nav').removeClass('animated fadeOutRight');
                $('.zen_popup_nav').css('display', 'block');
                $('.zen_popup_nav').addClass('animated fadeInRight');
                $('.zen_popup_bg').fadeIn('fast');
                $('.zen_popup_nav2').css('display', 'none');
            }, 500);
        }*/
    });

    $('.zen_nav_feedback li:last-child').click(function(){
         if ( $('.zen_popup_nav2').css('display') == 'block' ){
            $('.zen_popup_bg').fadeOut('fast');
            $(".zen_popup_nav2").toggle( "slide", { direction: "right" }, 500);
            $('.marina_img2').fadeOut(500);
            $(".zclose2").toggle( "fade", 400);
         }else{
            $('.nodecor').css('display', 'none');
            $('.zen_popup_bg').fadeIn('fast');
            $(".zen_popup_nav2").toggle( "slide", { direction: "right" }, 500);
            $(".zen_popup_nav").hide( "slide", { direction: "right"  }, 500 );
            $(".fastorder").hide( "slide", { direction: "right"  }, 500 );
            setTimeout(function(){
                $('.mainfastorder').hide();
                $('.modalfastorder').hide();
            }, 500);
            $('.fclose').hide();
            $('.marina_img2').fadeIn(500);
            $(".zclose2").show();
         }



        /*if($('.zen_popup_nav2').css('display') == 'block'){
            $('.zen_popup_nav2').addClass('animated fadeOutRight');
            setTimeout(function(){
                $('.zen_popup_nav2').css({display: 'none'});
                $('.zen_popup_nav2').removeClass('animated fadeOutRight');
            }, 500);
            $('.zen_popup_bg').fadeOut(500);
        }else{
            $('.nodecor').css('display', 'none');
            $('.zen_popup_nav').addClass('animated fadeOutRight');

            $('.zen_popup_nav2').addClass('animated fadeOutRight');
            $('.fastorder').removeClass('animated fadeInRight');
            $('.fastorder').addClass('animated fadeOutRight');

            $('.fclose').css('display', 'none');
            $('.modalfastorder').css('display', 'none');
            setTimeout(function (){
                $('.marina_img2').fadeIn(500);
                $('.zen_popup_nav2').removeClass('animated fadeOutRight');
                $('.zen_popup_nav2').css('display', 'block');
                $('.zen_popup_nav2').addClass('animated fadeInRight');
                $('.zen_popup_nav').css('display', 'none');
                $('.zen_popup_bg').fadeIn('fast');
                $('.zclose2').fadeIn(400);

            },10);
        }*/
    });
    /*Жду звонка*/

    $('.zen_popup_bg, .zclose, .zclose2').click(function () {
        $('.zen_popup_bg').fadeOut('fast');
        $(".zen_popup_nav2").hide( "slide", { direction: "right"  }, 500 );
        $(".zen_popup_nav").hide( "slide", { direction: "right"  }, 500 );
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











});


