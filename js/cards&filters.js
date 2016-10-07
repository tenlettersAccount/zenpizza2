/*===========================================
 Позиционирование нижних карточек товаров
 ==========================================*/
var w = window.innerWidth;
var boxCssClass = "zen_card2 big_zen_card2";
var currentNumOfBlocks = $("#div_center_zend_cards").children().length;
var lastBlock = $("#div_center_zend_cards").children().length;

var zenObject = document.getElementsByClassName('big_zen_card');
var myClient2 = $(zenObject)[lastBlock - 1].getBoundingClientRect();
var l = Math.round(myClient2.left);

var addOneBlock = function () {
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
};
var addTwoBlocks = function () {
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
};
var addThreeBlocks = function () {
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
    $("#div_center_zend_cards").append('<div id="ett" class="' + boxCssClass + '"></div>');
};

if (w <= 1821 && w >= 1400) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        // console.log(l);
        if (l >= 642 && l <= 693) {
            addTwoBlocks();
            break;
        }
        if (l >= 925 && l <= 940) { // 934
            addTwoBlocks();
            break;
        }
        if (l >= 765 && l <= 780) { // 772
            addThreeBlocks();
            break;
        }
        if (l >= 804 && l <= 860) { // 853
            addOneBlock();
            break;
        }
    }
}

if (w < 900) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 194 && l <= 205) {
            addOneBlock();
            break;
        }
    }
}
if (w <= 1416 && w >= 900) { // 1398
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 500 && l <= 593) { // 793
            addOneBlock();
            break;
        }
        if (l >= 597 && l <= 642) { // 632
            addTwoBlocks();
            break;
        }
        if (l > 766 && l <= 802) { // 793
            addOneBlock();
            break;
        }
        if (l >= 608 && l <= 616) { // 610
            addTwoBlocks();
            break;
        }
        if (l >= 545 && l <= 790) { // 553
            addOneBlock();
            break;
        }
    }

}
if (w <= 1357) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 300 && l <= 360) {
            addOneBlock();
            break;
        }
    }
}
if (w <= 1306 && w > 1295) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 575 && l <= 580) { // 777
            addOneBlock();
            break;
        }
    }
}
if (w <= 1740 && w > 1734) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 1129 && l <= 1134) { // 777
            addOneBlock();
            break;
        }
    }
}
if (w > 1820) {
    for (var i = 0; i < currentNumOfBlocks; i++) {
        if (l >= 808 && l <= 815) {
            addThreeBlocks();
            break;
        }
        if (l >= 970 && l <= 982) {
            addTwoBlocks();
            break;
        }
        if (l >= 1138 && l <= 1152) {
            addOneBlock();
            break;
        }
    }
}

/*===========================================
 / Позиционирование нижних карточек товаров
 ==========================================*/


/* Filters offset fixed */
var navPoss, winPoss;

function refreshVar(){
    navPoss = $('.ul-menu-switch').offset().top
    return navPoss;
}
refreshVar();
$(window).resize(refreshVar);
$(window).scroll(function(){
    winPoss = $(window).scrollTop();
    if(winPoss>=navPoss){
        $('.ul-menu-switch').addClass('fixed ');
        $('.ul-menu-switch').css({border:'none'});
        $('.delchoose').css({right:'210px'});

    }else{
        $('.ul-menu-switch').removeClass('fixed ');
        $('.ul-menu-switch').css({border:'1px solid #cfc3b3'});
        $('.delchoose').css({right:'50px'});
    }
});


















