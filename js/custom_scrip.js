$(function () {

    /* add top slider swiper if not desktop */

        if(window.innerWidth <= 780){
            $("#myCarousel2 .addc .carousel-inner").addClass('swiper-wrapper');
            var sliderItem = $("#myCarousel2 .addc .item");
            sliderItem.each(function(){
                $(this).addClass('swiper-slide');
            });
            var my_wiper = new Swiper('#myCarousel2');
        }
        if(window.innerWidth > 780){
            $("#myCarousel2 .addc .carousel-inner").removeClass('swiper-wrapper');
            var sliderItem = $("#myCarousel2 .addc .inblock1");
            sliderItem.each(function(){
                $(this).removeClass('swiper-slide');
            });
        }
    


    var w = window.innerWidth;
    console.log(w);

    $('.carousel').carousel({
         interval: scaleDelayInterval
    });

//************************************************************************************************
    /*=======================================================================================
     Вывод определенного количества карточек в слайдере в зависимостри от расширения экрана
     =========================================================================================*/

    function sliderCardsChanger(num) {
        $('#myCarousel .carousel-inner .row-fluid').unwrap();
        $('#myCarousel .carousel-inner .inblock3').unwrap();

        var group = num, group_el = 1, carusel_children = 0;

        //podschet elementov
        $('.inblock3').each(function () {
            carusel_children++;
            $(this).addClass('carusel_children' + carusel_children + ' group' + group_el);

            if (carusel_children % group) {
                $('.group' + group_el).wrapAll('<div class="item"></div>');
            }
            else {
                $('.group' + group_el).wrapAll('<div class="item"></div>');
                group_el++;
            }
        });
    }


    if (w >= 1440 && w <= 1860) {
        sliderCardsChanger(4);
        //$(".carousel-control.right").css({right: '-110px'});
        //$(".carousel-control.left").css({left: '-90px'});
    }

    if (w > 1136 && w < 1440) {
        sliderCardsChanger(3);
    }

    if (w > 1049 && w <= 1136) {
        sliderCardsChanger(2);
    }

    if (w >= 1000 && w <= 1058) {

        sliderCardsChanger(2);
    }

    if (w > 680 && w <= 998) {
        sliderCardsChanger(2);
        $(".carousel-control.right").css({right: '10px'});
        $(".carousel-control.left").css({left: '10px'});
        $(".block_2 h2").css({margin: 0});
    }

    if (w <= 680) {
        sliderCardsChanger(1);
        $(".zen_content_wrapper").css({paddingTop: '0px'});
        $(".carousel-control.right").css({right: '-10px'});
        $(".carousel-control.left").css({left: '-10px'});
    }

    $('.carousel-inner .item:first-child').addClass('active');

    /*=======================================================================================
     / Вывод определенного количества карточек в слайдере в зависимостри от расширения экрана
     =========================================================================================*/

//*****************************************************************************************************
    /*==============================
     Девайдеры для фильтра меню
     ===============================*/

    var ostroe = $(".ul-menu-switch li:first-child");
    var recomenduemoe = $(".ul-menu-switch li:last-child");

    ostroe.click(function () {
        $(this).css({color: '#E73F3E', borderBottom: '3px solid #E73F3E', transition: '0.2s'});
        $(this).find('img').fadeOut(300);
        $(this).find('img').attr('src', 'images/fire-active.png');
        $(this).find('img').fadeIn(300);

        recomenduemoe.css({color: '#757575', borderBottom: '0px solid #E73F3E', transition: '0.2s'});
        recomenduemoe.find('img').attr('src', 'images/star.png');
    });
    recomenduemoe.click(function () {
        $(this).css({color: '#E73F3E', borderBottom: '3px solid #E73F3E', transition: '0.2s'});
        $(this).find('img').fadeOut(300);
        $(this).find('img').attr('src', 'images/star-active.png');
        $(this).find('img').fadeIn(300);

        ostroe.css({color: '#757575', borderBottom: '0px solid #E73F3E', transition: '0.2s'});
        ostroe.find('img').attr('src', 'images/fire.png');
    });

    /*==============================
     / Девайдеры для фильтра меню
     ===============================*/
//*************************************************************************************
    /*==============================
     дополнительные маркеры пагинации в зависимости от количества карточек
     ===============================*/
    // нижний слайдер
    var paginationitemsLength = $('#myCarousel .carousel-inner').children('.item').length;
    var pagiIncrement = $('#myCarousel .carousel-indicators').children('li').length - 1;
    for (var j = 0; j <= (paginationitemsLength - $('#myCarousel .carousel-indicators').children('li').length); j++) {
        pagiIncrement++;
        $('#myCarousel .carousel-indicators').append("<li data-target='#myCarousel' data-slide-to='" + pagiIncrement + "'></li>");
    }

    // верхний слайдер
    /* var paginationitemsLength2 = $('#myCarousel2 .carousel-inner').children('.item').length;

     var pagiIncrement2 = $('#myCarousel2 .carousel-indicators').children('li').length;
     for (var t = 0; t < (paginationitemsLength2 - $('#myCarousel2 .carousel-indicators').children('li').length); t++) {
     pagiIncrement2++;
     $('#myCarousel2 .carousel-indicators').append("<li data-target='#myCarousel2' data-slide-to='" + pagiIncrement2 + "'></li>");
     }*/

    /*==============================
     / дополнительные маркеры пагинации в зависимости от количества карточек
     ===============================*/

//*************************************************************************************

    /*==========================================
     Оформление заказа изменение radio при клике
     ============================================*/

    $('.radio li').click(function () {
        $(this).find('.radio_circle_in').addClass('radio_circle_in_active');
        $(this).siblings().find('.radio_circle_in').removeClass('radio_circle_in_active');
        //alert($(this).siblings());
    });

    /*============================================
     /Оформление заказа изменение radio при клике
     =============================================*/

//*************************************************************************************


    //********************************************************

    /*===========================================
     Cart
     ===========================================*/

    $(".kyzyluved p").html('0');

    var cart = {
        fillInTheCart: function () {
            // instance of cart html collection
            var cartHtml = $('.nodecort .absh');
            cartHtml.html('');
            cartHtml.append(
                "<div class='widthjuz'>"+
                    "<div class='tovary1'>"+
                    "<p class='tovhead'>Товары</p>"+
                    "</div>"+
                    "<div class='kolichestvo1'>"+
                    "<p class='tovhead'>Количество</p>"+
                    "</div>"+
                    "<div class='sena1'>"+
                    "<p class='tovhead'>Цена</p>"+
                    "</div>"+
                    "<div class='owiru1'>"+
                    "</div>"+
                    "<div class='clearfix'></div>"+
                "</div>"
            );
            // add products to user cart
            for (var j in cart.productsObj) {
                cartHtml.append(
                    "<div class='widthjuz'>" +
                    "<div class='tovary11 tovimg1'></div>" +
                    "<div class='tovary21'>" +
                    "<p class='p1'>" + j + "</p>" +
                    "<p class='p2'>" + cart.theProductsPrices[j] + " р</p>" +
                    "</div>" +
                    "<div class='kolichestvo1'>" +
                    "<div class='numberpm'>" +
                    "<div class='nbutton nminus'></div>" +
                    "<input type='text' name='' value='" + cart.theAmountOfProduct[j] + "' class='sumof'>" +
                    "<div class='nbutton nplus'></div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='sena1'>" +
                    "<p class='pricefo'>" + cart.productsObj[j] + " р</p>" +
                    "</div>" +
                    "<div class='owiru1'>" +
                    "<div class='closelight'></div>" +
                    "</div>" +
                    "<div class='clearfix'></div>" +
                    "</div>"
                );
            }
        },
        setCookie: function (name, value) {
            return document.cookie = name + '=' + JSON.stringify(value) + '; path=/';
        },
        getCookie: function getCookie(name) {
            var value = "; " + document.cookie;
            var parts = value.split("; " + name + "=");
            if (parts.length == 2) return parts.pop().split(";").shift();
        },
        theProductsPrices: {},
        theAmountOfProduct: {},
        productsObj: {},
        addProduct: function (productsName, productsPrise) {
            if (Object.keys(this.productsObj).length > 0) {
                if (this.productsObj.hasOwnProperty(productsName)) {
                    // increase products price
                    this.productsObj[productsName] = this.productsObj[productsName] + productsPrise;
                    // update the num of product's amount
                    this.theAmountOfProduct[productsName] = this.theAmountOfProduct[productsName] + 1;
                } else {
                    // add new product
                    this.productsObj[productsName] = productsPrise;
                    // add nums of product's amount
                    this.theAmountOfProduct[productsName] = 1;
                    // add products separate prices
                    this.theProductsPrices[productsName] = productsPrise;
                }
            } else {
                // add new product
                this.productsObj[productsName] = productsPrise;
                // add nums of product's amount
                this.theAmountOfProduct[productsName] = 1;
                // add products separate prices
                this.theProductsPrices[productsName] = productsPrise;
            }
        },
        totalProductsCount: function () {
            return Object.keys(this.productsObj).length;
        },
        totalProductsPrice: function () {
            var sum = 0;
            for (var el in this.productsObj) {
                if (this.productsObj.hasOwnProperty(el)) {
                    sum += parseFloat(this.productsObj[el]);
                }
            }
            return sum;
        }
    };


    // click event | add new product
    $(".bplus, .big_zen_card .zen_button").click(function () {
        var productsName = $(this).parents('.big_zen_card').find('h4').html();
        var productsPrise = $(this).parents('.big_zen_card').find('.price').html();
        productsPrise = productsPrise.replace('Р', '');
        productsPrise = productsPrise.replace(' ', '');
        productsPrise = parseInt(productsPrise);

        // add products to cookie
        if (cart.getCookie('usersCart')) {
            var cookieData = cart.getCookie('usersCart');
            var productsCountData = cart.getCookie('usersTheAmountOfProduct');
            var productsPrisesData = cart.getCookie('usersTheProductsPrices');

            cart.productsObj = JSON.parse(cookieData);
            cart.theAmountOfProduct = JSON.parse(productsCountData);
            cart.theProductsPrices = JSON.parse(productsPrisesData);

            if (!cart.productsObj.hasOwnProperty(productsName)) {
                cart.productsObj[productsName] = productsPrise;
                cart.theProductsPrices[productsName] = productsPrise;
                cart.theAmountOfProduct[productsName] = 1;

                cart.setCookie('usersCart', cart.productsObj);
                cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
                cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
                // fill the cart
                cart.fillInTheCart();
            } else {
                cart.productsObj[productsName] = cart.productsObj[productsName] + productsPrise;
                cart.theAmountOfProduct[productsName] = cart.theAmountOfProduct[productsName] + 1;
                cart.theProductsPrices[productsName] = productsPrise;

                cart.setCookie('usersCart', cart.productsObj);
                cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
                cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            }

            // change product amount
            //$(this).parents('.widthjuz').find('.numberpm input').val(cart.theAmountOfProduct[productsName]);
            $('.nodecort .absh .widthjuz .p1').each(function () {
                if ($(this).html() == productsName) {
                    $(this).parents('.widthjuz').find('.numberpm input').val(cart.theAmountOfProduct[productsName]);
                    $(this).parents('.widthjuz').find('.pricefo').html(cart.productsObj[productsName]);
                }
            });

            // change cart products num
            $(".kyzyluved p").html(Object.keys(cart.theAmountOfProduct).length);
            // change product count
            $(this).parents('.big_zen_card').find('.zenval').html(cart.theAmountOfProduct[productsName]);
            $(this).parents('.big_zen_card').find('.zeneq').html(cart.theAmountOfProduct[productsName]);
        } else {
            // add new product to cart
            cart.addProduct(productsName, productsPrise);
            // add new
            cart.setCookie('usersCart', cart.productsObj);
            cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);

            // change cart products num
            $(".kyzyluved p").html(cart.totalProductsCount());
            // change product count
            $(this).parents('.zencardfooter').find('.zenval').html(cart.theAmountOfProduct[productsName]);
            // fill the cart
            cart.fillInTheCart();
        }
        // add total products price to cart
        $('.senasena').html(cart.totalProductsPrice() + ' руб');
    }); // *click event | add new product

    // click event | delete product item
    $(document.body).on('click', '.owiru1', function () {
        var productName = $(this).parents('.widthjuz').find('.p1').html();

        // hide this products item
        $(this).parents('.widthjuz').hide();
        // update products count
        $('.big_zen_card h4').each(function () {
            if (productName == $(this).html()) {
                $(this).parents('.big_zen_card').find('.zenval').html(0);
                $(this).parents('.big_zen_card').find('.zeneq').html(0);
            }
        });

        delete cart.productsObj[productName];
        delete cart.theAmountOfProduct[productName];
        delete cart.theProductsPrices[productName];

        // update total products price
        $('.senasena').html(cart.totalProductsPrice() + ' руб');
        // change cart products num
        $(".kyzyluved p").html(cart.totalProductsCount());

        cart.setCookie('usersCart', cart.productsObj);
        cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
        cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
    });

    // plus product
    $(document.body).on('click', '.nplus', function () {
        var productName = $(this).parents('.widthjuz').find('.p1').html();

        // add products to cookie
        if (cart.getCookie('usersCart')) {
            var cookieData = cart.getCookie('usersCart');
            var productsCountData = cart.getCookie('usersTheAmountOfProduct');
            var productsPrisesData = cart.getCookie('usersTheProductsPrices');

            cart.productsObj = JSON.parse(cookieData);
            cart.theAmountOfProduct = JSON.parse(productsCountData);
            cart.theProductsPrices = JSON.parse(productsPrisesData);

            cart.productsObj[productName] = cart.productsObj[productName] + cart.theProductsPrices[productName];
            cart.theAmountOfProduct[productName] = cart.theAmountOfProduct[productName] + 1;

            cart.setCookie('usersCart', cart.productsObj);
            cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);

            $('.nodecort .absh .widthjuz .p1').each(function () {
                if ($(this).html() == productName) {
                    // update the num of product's amount
                    // update products price
                    // decrement products count
                    $(this).parents('.widthjuz').find('.numberpm input').val(cart.theAmountOfProduct[productName]);
                    $(this).parents('.widthjuz').find('.pricefo').html(cart.productsObj[productName] + ' р');
                    // update total products price
                    $('.senasena').html(cart.totalProductsPrice() + ' руб');
                }
            });
            $('.big_zen_card h4').each(function () {
                if ($(this).html() == productName) {
                    $(this).parents('.big_zen_card').find('.zenval').html(cart.theAmountOfProduct[productName]);
                    $(this).parents('.big_zen_card').find('.zeneq').html(cart.theAmountOfProduct[productName]);
                }
            });
        } else {
            cart.setCookie('usersCart', cart.productsObj);
            cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
        }
    });

    // minus product
    $(document.body).on('click', '.nminus', function () {
        var productName = $(this).parents('.widthjuz').find('.p1').html();
        // add products to cookie
        if (cart.getCookie('usersCart')) {
            var cookieData = cart.getCookie('usersCart');
            var productsCountData = cart.getCookie('usersTheAmountOfProduct');
            var productsPrisesData = cart.getCookie('usersTheProductsPrices');

            cart.productsObj = JSON.parse(cookieData);
            cart.theAmountOfProduct = JSON.parse(productsCountData);
            cart.theProductsPrices = JSON.parse(productsPrisesData);

            if ((cart.theAmountOfProduct[productName] - 1) < 1) {
                $('.nodecort .absh .widthjuz .p1').each(function () {
                    if ($(this).html() == productName) {
                        // hide this products item
                        $(this).parents('.widthjuz').hide();
                        // delte this elem from productsObj
                        delete cart.productsObj[productName];
                        // update total products price
                        $('.senasena').html(cart.totalProductsPrice() + ' руб');
                        // change cart products num
                        $(".kyzyluved p").html(cart.totalProductsCount());
                    }
                });
                $('.big_zen_card h4').each(function () {
                    if ($(this).html() == productName) {
                        $(this).parents('.big_zen_card').find('.zenval').html(0);
                        $(this).parents('.big_zen_card').find('.zeneq').html(0);
                    }
                });
                delete cart.productsObj[productName];
                delete cart.theAmountOfProduct[productName];
                delete cart.theProductsPrices[productName];
                cart.setCookie('usersCart', cart.productsObj);
                cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
                cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
            } else {
                cart.productsObj[productName] = cart.productsObj[productName] - cart.theProductsPrices[productName];
                cart.theAmountOfProduct[productName] = cart.theAmountOfProduct[productName] - 1;

                cart.setCookie('usersCart', cart.productsObj);
                cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
                cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);

                $('.nodecort .absh .widthjuz .p1').each(function () {
                    if ($(this).html() == productName) {
                        // update the num of product's amount
                        // update products price
                        // decrement products count
                        $(this).parents('.widthjuz').find('.numberpm input').val(cart.theAmountOfProduct[productName]);
                        $(this).parents('.widthjuz').find('.pricefo').html(cart.productsObj[productName] + ' р');
                        // update total products price
                        $('.senasena').html(cart.totalProductsPrice() + ' руб');
                    }
                });
                $('.big_zen_card h4').each(function () {
                    if ($(this).html() == productName) {
                        $(this).parents('.big_zen_card').find('.zenval').html(cart.theAmountOfProduct[productName]);
                        $(this).parents('.big_zen_card').find('.zeneq').html(cart.theAmountOfProduct[productName]);
                    }
                });
            }
        } else {
            cart.setCookie('usersCart', cart.productsObj);
            cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
        }
    });

    $('.bminus').click(function () {
        var productName = $(this).parents('.big_zen_card').find('h4').html();

        // add products to cookie
        if (cart.getCookie('usersCart')) {
            var cookieData = cart.getCookie('usersCart');
            var productsCountData = cart.getCookie('usersTheAmountOfProduct');
            var productsPrisesData = cart.getCookie('usersTheProductsPrices');

            cart.productsObj = JSON.parse(cookieData);
            cart.theAmountOfProduct = JSON.parse(productsCountData);
            cart.theProductsPrices = JSON.parse(productsPrisesData);

            if ((cart.theAmountOfProduct[productName] - 1) < 1) {
                $('.nodecort .absh .widthjuz .p1').each(function () {
                    if ($(this).html() == productName) {
                        // hide this products item
                        $(this).parents('.widthjuz').hide();
                        // delte this elem from productsObj
                        delete cart.productsObj[productName];
                        // update total products price
                        $('.senasena').html(cart.totalProductsPrice() + ' руб');
                        // change cart products num
                        $(".kyzyluved p").html(cart.totalProductsCount());
                    }
                });
                $('.big_zen_card h4').each(function () {
                    if ($(this).html() == productName) {
                        $(this).parents('.big_zen_card').find('.zenval').html(0);
                        $(this).parents('.big_zen_card').find('.zeneq').html(0);
                    }
                });
                delete cart.productsObj[productName];
                delete cart.theAmountOfProduct[productName];
                delete cart.theProductsPrices[productName];
                cart.setCookie('usersCart', cart.productsObj);
                cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
                cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
            } else {
                if (cart.productsObj.hasOwnProperty(productName)) {
                    cart.productsObj[productName] = cart.productsObj[productName] - cart.theProductsPrices[productName];
                    cart.theAmountOfProduct[productName] = cart.theAmountOfProduct[productName] - 1;

                    cart.setCookie('usersCart', cart.productsObj);
                    cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
                    cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);

                    $('.nodecort .absh .widthjuz .p1').each(function () {
                        if ($(this).html() == productName) {
                            // update the num of product's amount
                            // update products price
                            // decrement products count
                            $(this).parents('.widthjuz').find('.numberpm input').val(cart.theAmountOfProduct[productName]);
                            $(this).parents('.widthjuz').find('.pricefo').html(cart.productsObj[productName] + ' р');
                            // update total products price
                            $('.senasena').html(cart.totalProductsPrice() + ' руб');
                        }
                    });
                    $('.big_zen_card h4').each(function () {
                        if ($(this).html() == productName) {
                            $(this).parents('.big_zen_card').find('.zenval').html(cart.theAmountOfProduct[productName]);
                            $(this).parents('.big_zen_card').find('.zeneq').html(cart.theAmountOfProduct[productName]);
                        }
                    });
                }
            }
        } else {
            cart.setCookie('usersCart', cart.productsObj);
            cart.setCookie('usersTheProductsPrices', cart.theProductsPrices);
            cart.setCookie('usersTheAmountOfProduct', cart.theAmountOfProduct);
        }
    });

    // fill in everything if cookie exist
    if (cart.getCookie('usersCart')) {
        var cookieData = cart.getCookie('usersCart');
        var productsCountData = cart.getCookie('usersTheAmountOfProduct');
        var productsPrisesData = cart.getCookie('usersTheProductsPrices');

        cookieData = JSON.parse(cookieData);
        productsCountData = JSON.parse(productsCountData);
        productsPrisesData = JSON.parse(productsPrisesData);

        // change cart products num
        $(".kyzyluved p").html(Object.keys(productsCountData).length);
        // total products price
        var total_products_price = 0;
        for (var price in cookieData) {
            total_products_price += cookieData[price];
        }
        $('.senasena').html(total_products_price + ' руб');

        for (var prod in cookieData) {
            $('.big_zen_card h4').each(function () {
                if (prod == $(this).html()) {
                    $(this).parents('.big_zen_card').find('.zen_button').css({
                        'opacity': '0',
                        'z-index': '1'
                    });
                    $(this).parents('.big_zen_card').find(".zencardfooter").css({
                        'opacity': '1'
                    });
                    $(this).parents('.big_zen_card').find('.zeneq').css({
                        'opacity': '1'
                    });

                    // the amount of added product
                    $(this).parents('.big_zen_card').find('.zeneq').html(productsCountData[prod]);
                }
            });
        }

        for (var h in cookieData) {
            $('.nodecort .absh').append(
                "<div class='widthjuz'>" +
                "<div class='tovary11 tovimg1'></div>" +
                "<div class='tovary21'>" +
                "<p class='p1'>" + h + "</p>" +
                "<p class='p2'>" + productsPrisesData[h] + " р</p>" +
                "</div>" +
                "<div class='kolichestvo1'>" +
                "<div class='numberpm'>" +
                "<div class='nbutton nminus'></div>" +
                "<input type='text' name='' value='" + productsCountData[h] + "' class='sumof'>" +
                "<div class='nbutton nplus'></div>" +
                "</div>" +
                "</div>" +
                "<div class='sena1'>" +
                "<p class='pricefo'>" + cookieData[h] + " р</p>" +
                "</div>" +
                "<div class='owiru1'>" +
                "<div class='closelight'></div>" +
                "</div>" +
                "<div class='clearfix'></div>" +
                "</div>"
            );
        }
    }

    /*===========================================
     / Cart
     ==========================================*/

    /* Анимация цифры количества товара в корзине */
    var newCardInput = $('.typespm input');
    var newCardInputVal = 0;
    $(document.body).on('click', '.nminus, .minusts', function () {
         var input = $(this).siblings('input');
        input.animate({
            paddingTop: '20px',
            color: 'white'
        }, 150, function(){
                input.css({paddingTop: 0, paddingBottom: '20px'});
            });
        // delete then
        newCardInputVal--;
        newCardInput.val(newCardInputVal);
        //  / delete then
        input.animate({
            paddingBottom: '0px',
            color: '#454545'
        }, 150);
    });

    $(document.body).on('click', '.nplus, .plusts', function () {
        var input = $(this).siblings('input');
        input.animate({
            paddingBottom: '23px',
            color: 'white'
        }, 150, function(){
                input.css({paddingBottom: 0, paddingTop: '20px'});
            });
        // delete then
        newCardInputVal++;
        newCardInput.val(newCardInputVal);
        //  / delete then
        input.animate({
            paddingTop: '0px',
            color: '#454545'
        }, 150);
    });

    /* Кнопка заказать анимация */
    $(document.body).on('click', '.orderred', function(){
        //$(this).css({display: 'none'});
        $('.tx_for_order_block').css({display: 'block'});
        
        $('.order_waiting_for_answer').css({display: 'block'});
        $('.order_waiting_for_answer').removeClass('animated fadeInUp');
        $('.order_waiting_for_answer').removeClass('animated fadeOutDown');
        $('.order_waiting_for_answer').addClass('animated fadeInUp');
       // $('.order-last-block-qwas').css({marginBottom: '100px'});

       	$(".fastorder").animate({
               scrollTop: 120
        }, 500);

        /*$('.fastorder').animate({
            scrollTop: $(".decortype").offset().top
        }, 2000);*/

        setTimeout(function(){
            $('.order_trouble_with_connection').addClass('animated fadeOutDown');
            $('.order_waiting_for_answer').removeClass('animated fadeOutDown');
            $('.order_waiting_for_answer').removeClass('animated fadeInUp');
            $('.order_waiting_for_answer').addClass('animated fadeOutDown');

            setTimeout(function(){
                $('.order_waiting_for_answer').addClass('animated fadeOutDown');
                $('.order_waiting_for_answer').css({display: 'none'});
                $('.order_trouble_with_connection').removeClass('animated fadeOutDown');
                $('.order_trouble_with_connection').removeClass('animated fadeInUp');
                $('.order_trouble_with_connection').css({display: 'block'});
                $('.order_trouble_with_connection').addClass('animated fadeInUp');
            }, 500);
        }, 100000);
    });


    $('.order_trouble_with_connection button').click(function(){
        $('.order_trouble_with_connection').removeClass('animated fadeOutDown');
        $('.order_trouble_with_connection').removeClass('animated fadeInUp');
        $('.order_trouble_with_connection').css({display: 'block'});
        $('.order_trouble_with_connection').addClass('animated fadeOutDown');
        $('.order_waiting_for_answer').removeClass('animated fadeOutDown');
        $('.order_waiting_for_answer').removeClass('animated fadeInUp');
        $('.order_waiting_for_answer').css({display: 'block'});
        $('.order_waiting_for_answer').addClass('animated fadeInUp');
        $('.order_trouble_with_connection').css({display: 'none'});
        setTimeout(function(){
            $('.order_trouble_with_connection').addClass('animated fadeOutDown');
            $('.order_waiting_for_answer').removeClass('animated fadeOutDown');
            $('.order_waiting_for_answer').removeClass('animated fadeInUp');

            setTimeout(function(){
                $('.order_trouble_with_connection').css({display: 'none'});
                $('.order_waiting_for_answer').addClass('animated fadeOutDown');
                $('.order_trouble_with_connection').removeClass('animated fadeOutDown');
                $('.order_trouble_with_connection').removeClass('animated fadeInUp');
                $('.order_trouble_with_connection').css({display: 'block'});
                $('.order_trouble_with_connection').addClass('animated fadeInUp');
                $('.order_waiting_for_answer').css({display: 'none'});
            }, 500);
        }, 100000);
    });

    $('.order_waiting_for_answer_close_btn').click(function(){
       
       $(".fastorder").animate({
               scrollTop: 110
        }, 900);

        $('.order_trouble_with_connection').removeClass('animated fadeOutDown');
        $('.order_trouble_with_connection').removeClass('animated fadeInUp');
        $('.order_waiting_for_answer').removeClass('animated fadeOutDown');
        $('.order_waiting_for_answer').removeClass('animated fadeInUp');
        $('.order_waiting_for_answer').addClass('animated fadeOutDown');
        $('.order_trouble_with_connection').addClass('animated fadeOutDown');
       // $('.order-last-block-qwas').css({marginBottom: '0px'});
        $('.orderred').fadeIn(500);
        setTimeout(function(){
            $('.order_waiting_for_answer').css({display: 'none'});
            $('.order_trouble_with_connection').css({display: 'none'});
        }, 500);
    });


    /* Анимация сворачивания меню в левом сайдбаре */
    $('.zen_sidebar_ul li:first-child>img').css({
        '-moz-transform': 'rotate(180deg)',
        '-ms-transform': 'rotate(180deg)',
        '-webkit-transform': 'rotate(180deg)',
        '-o-transform': 'rotate(180deg)',
        'transform': 'rotate(180deg)',
    });
    $('.m-f-e').click(function(){
        if( $('.zen_sidebar_ul ul').css('display') == 'none' ){
            $('.zen_sidebar_ul ul').slideDown(600);
            $('.m-f-e img').css({
                '-moz-transform': 'rotate(15deg)',
                '-ms-transform': 'rotate(15deg)',
                '-webkit-transform': 'rotate(15deg)',
                '-o-transform': 'rotate(15deg)',
                'transform': 'rotate(180deg)',
                transition: '0.80s'
            });
        }else{
            $('.zen_sidebar_ul ul').slideUp(600);

            $('.m-f-e img').css({
                '-moz-transform': 'rotate(0deg)',
                '-ms-transform': 'rotate(0deg)',
                '-webkit-transform': 'rotate(0deg)',
                '-o-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)',
                transition: '0.80s'
            });
        }
    });

    // animation menu in about us
    $('.menusecond #menuihh').css({
        '-moz-transform': 'rotate(0deg)',
        '-ms-transform': 'rotate(0deg)',
        '-webkit-transform': 'rotate(0deg)',
        '-o-transform': 'rotate(0deg)',
        'transform': 'rotate(0deg)'
    });
    $('.menusecond').click(function(){
        if( $('.zen_sidebar_ul ul ul').css('display') == 'none' ){
            $('.zen_sidebar_ul ul ul').slideDown(500);
            $('.menusecond #menuihh').css({
                '-moz-transform': 'rotate(15deg)',
                '-ms-transform': 'rotate(15deg)',
                '-webkit-transform': 'rotate(15deg)',
                '-o-transform': 'rotate(15deg)',
                'transform': 'rotate(0deg)',
                transition: '0.50s'
            });
        }else{
            $('.zen_sidebar_ul ul ul').slideUp(500);
            $('.menusecond #menuihh').css({
                '-moz-transform': 'rotate(180deg)',
                '-ms-transform': 'rotate(180deg)',
                '-webkit-transform': 'rotate(180deg)',
                '-o-transform': 'rotate(180deg)',
                'transform': 'rotate(180deg)',
                transition: '0.50s'
            });
        }
    });





    $('.altyburyw button').click(function(){
        $(this).html('В корзине');
    });






  

});