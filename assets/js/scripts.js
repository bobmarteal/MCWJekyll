// Scripts for MCW Hopefully very short
jQuery(document).ready(function ($) {
    $('.animated').css('opacity', 0);
    $('.animated').waypoint(function (direction) {
        $(this.element).addClass('fadeIn');
        console.log('far out');
    }, {
        offset: '50%'
    });

});