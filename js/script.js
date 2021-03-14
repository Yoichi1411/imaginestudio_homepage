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
            if (scroll > targetElement - windowHeight + 200){
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

    //Newsをカテゴリー分け
    $('.info-btn').click(function(){
        $('.photo,.interior,.graphic,.web,.blog,.soon').fadeOut();
        $('.info').fadeIn();
    });

    $('.photo-btn').click(function(){
        $('.info,.interior,.graphic,.web,.blog').fadeOut();
        $('.photo,.soon').fadeIn();
    });

    $('.interior-btn').click(function(){
        $('.info,.photo,.graphic,.web,.blog').fadeOut();
        $('.interior,.soon').fadeIn();
    });

    $('.graphic-btn').click(function(){
        $('.info,.photo,.interior,.web,.blog').fadeOut();
        $('.graphic,.soon').fadeIn();
    });

    $('.web-btn').click(function(){
        $('.info,.photo,.interior,.graphic,.blog').fadeOut();
        $('.web,.soon').fadeIn();
    });

    $('.blog-btn').click(function(){
        $('.info,.photo,.interior,.graphic,.web').fadeOut();
        $('.blog,.soon').fadeIn();
    });


});


//ページ読み込み後の実行プログラム
window.onload = function() {
    //ローディング画面をフェードアウト
    const loader = document.getElementById('loading-wrapper');
    loader.classList.add('completed');
  
    //冒頭アニメーションを再生
    var media = document.getElementById("op-video");
  
    media.currentTime = 0.5;
    media.play();
  
};