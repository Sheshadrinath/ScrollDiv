$(document).ready(function () {
    'use strict';
    
    if ($('.scrollable').get(0) && $('.scrollable').get(0).scrollWidth > $(document).width()) {
        $('.control-container').prepend('<div><button class="scrollbtn btn scrollleft"><span class="glyphicon glyphicon-chevron-left"><span/></button></div>')
                        .append('<div><button class="scrollbtn btn scrollright"><span class="glyphicon glyphicon-chevron-right"><span/></button></div>');
        $('.scrollable').addClass('condensed-scrollbar');
    }
    
    $('.scrollleft').click(function () {
        var leftPos = $('.scrollable').scrollLeft();
        $('.scrollable').animate({
            scrollLeft: leftPos - 500
        }, 500);
    });
    
    $('.scrollright').click(function () {
        var leftPos = $('.scrollable').scrollLeft();
        $('.scrollable').animate({
            scrollLeft: leftPos + 500
        }, 500);
    });

});