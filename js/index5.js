window.onload = function() {
//第一个轮播图
var swiper = new Swiper('.swiper-shouyeli', {
      spaceBetween: 30,
      loop:true,
      effect: 'fade',
      autoplay:{
       disableOnInteraction:false,
            
        },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
//  滚动事件
$(function(){
            $(window).scroll(function(){
                height = $(window).scrollTop();
                if(height > 100){
                    $('#zuodian').fadeIn();
                    $('#youdian').fadeIn();
                    $('#topde').fadeIn();
                }else{
                    $('#zuodian').fadeOut();
                    $('#youdian').fadeOut();
                    $('#topde').fadeOut();
                };
            });
        });
  




}