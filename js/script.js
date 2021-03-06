$(function(){
    //ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header-right').addClass('active');
        } else {
            $('.header-right').removeClass('active');
        }
    });

    //要素をふわっと表示
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','1');
                $(this).css('transform','translateX(0)');
            }
        });
        $('.rotate').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 50){
                $(this).css('transform','rotateY(0)');
            }
        });
    });
});