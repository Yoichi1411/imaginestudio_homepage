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


    //Workをカテゴリー分け
    $('#photo').click(function(){
        $('.movie-work-wrapper,.interior-work-wrapper,.graphic-work-wrapper,.web-work-wrapper').fadeOut();
        $('.photo-work-wrapper').fadeIn();
    });

    $('#movie').click(function(){
        $('.photo-work-wrapper,.interior-work-wrapper,.graphic-work-wrapper,.web-work-wrapper').fadeOut();
        $('.movie-work-wrapper').fadeIn();
    });

    $('#interior').click(function(){
        $('.movie-work-wrapper,.photo-work-wrapper,.graphic-work-wrapper,.web-work-wrapper').fadeOut();
        $('.interior-work-wrapper').fadeIn();
    });

    $('#graphic').click(function(){
        $('.movie-work-wrapper,.interior-work-wrapper,.photo-work-wrapper,.web-work-wrapper').fadeOut();
        $('.graphic-work-wrapper').fadeIn();
    });

    $('#web').click(function(){
        $('.movie-work-wrapper,.interior-work-wrapper,.graphic-work-wrapper,.photo-work-wrapper').fadeOut();
        $('.web-work-wrapper').fadeIn();
    });

    //Work拡大表示スライダー
    //→photo-work1
    $('.work-up-button1').click(function(){
        $('.photo-slider1').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.photo-slider1').fadeOut();
    });

    //→photo-work2
    $('.work-up-button1-2').click(function(){
        $('.photo-slider2').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.photo-slider2').fadeOut();
    });

    //動画Work1再生制御
    $('.work-up-button2').click(function(){
        $('.movie-slider1').fadeIn();
        document.getElementById("movie-work-1").currentTime=0;
	    document.getElementById("movie-work-1").play();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider1').fadeOut();
    });

    //動画Work2再生制御
    $('.work-up-button2-2').click(function(){
        $('.movie-slider2').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider2').fadeOut();
    });

    //動画Work3再生制御
    $('.work-up-button2-3').click(function(){
        $('.movie-slider3').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider3').fadeOut();
    });

    //動画Work4再生制御
    $('.work-up-button2-4').click(function(){
        $('.movie-slider4').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider4').fadeOut();
    });

    //動画Work5再生制御
    $('.work-up-button2-5').click(function(){
        $('.movie-slider5').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider5').fadeOut();
    });

    //動画Work6再生制御
    $('.work-up-button2-6').click(function(){
        $('.movie-slider6').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider6').fadeOut();
    });

    //動画Work7再生制御
    $('.work-up-button2-7').click(function(){
        $('.movie-slider7').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider7').fadeOut();
    });

    //動画Work8再生制御
    $('.work-up-button2-8').click(function(){
        $('.movie-slider8').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.movie-slider8').fadeOut();
    });

    //→graphic-work1
    $('.work-up-button4').click(function(){
        $('.graphic-slider1').fadeIn();
    });

    $('.slider-close-button').click(function(){
        $('.graphic-slider1').fadeOut();
    });

    //Workスライダー切り替え
    $('.change-btn').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active');
        if ($(this).hasClass('next-btn')) {
          $displaySlide.next().addClass('active');
        } else {
          $displaySlide.prev().addClass('active');
        }
        
        var slideIndex = $('.slide').index($('.active'));

        $('.change-btn').show();
        
        if(slideIndex==0){
          $('.prev-btn').hide();
        } else if(slideIndex==3){
          $('.next-btn').hide();
        }
        
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