$(function(){
    var $header = $('.hdrWrap');

    $(window).on('scroll', function(){
        var scrolltop = $('html').scrollTop();
        console.log(scrolltop);
        if(scrolltop < 100){
            $header.css({backgroundColor: 'transparent'});
        }else if(scrolltop > 300){
            $header.css({backgroundColor: 'black'});
        }
    });
});