$(document).ready(function () {
	var myPlugin = {
      name: 'debugger',
      params: {
        debugger: false,
      },
      on: {
        init: function () {
          if (!this.params.debugger) return;
//        console.log('init');
        },
        click: function (e) {
          if (!this.params.debugger) return;
//        console.log('click');
        },
        tap: function (e) {
          if (!this.params.debugger) return;
//        console.log('tap');
        },
        doubleTap: function (e) {
          if (!this.params.debugger) return;
//        console.log('doubleTap');
        },
        sliderMove: function (e) {
          if (!this.params.debugger) return;
//        console.log('sliderMove');
        },
        slideChange: function () {
          if (!this.params.debugger) return;
//        console.log('slideChange', this.previousIndex, '->', this.activeIndex);
        },
        slideChangeTransitionStart: function () {
          if (!this.params.debugger) return;
//        console.log('slideChangeTransitionStart');
        },
        slideChangeTransitionEnd: function () {
          if (!this.params.debugger) return;
//        console.log('slideChangeTransitionEnd');
        },
        transitionStart: function () {
          if (!this.params.debugger) return;
//        console.log('transitionStart');
        },
        transitionEnd: function () {
          if (!this.params.debugger) return;
//        console.log('transitionEnd');
        },
        fromEdge: function () {
          if (!this.params.debugger) return;
//        console.log('fromEdge');
        },
        reachBeginning: function () {
          if (!this.params.debugger) return;
//        console.log('reachBeginning');
        },
        reachEnd: function () {
          if (!this.params.debugger) return;
//        console.log('reachEnd');
        },
      },
    };
	Swiper.use(myPlugin);

//     Init Swiper
    var swiper = new Swiper('.swerttper', {
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay:{
       disableOnInteraction:false,
            
        },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Enable debugger
      debugger: true,
    });
    
    $('.yanxuan-xiamian-dianjili').click(function(){
    	 $(".yanxuan-xiamian-dianjilinei").eq($(this).index()).addClass("ssjia").parent().siblings().children().removeClass('ssjia');
 $('.yanxuan-xiamian-dianxiayi').hide().eq($(this).index()).show();
    })
//  $('.yanxuan-xiamian-dianjilinei')
    
//  第二个轮播图
    
    var swiper = new Swiper('.swicondeerttt', {
        direction: 'vertical',
        loop:true,
        slidesPerView: 2,
//      slidesPerView: 1,
//      spaceBetween: 30,
        mousewheel: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    //  滚轮事件
    $(function(){
            $(window).scroll(function(){
                height = $(window).scrollTop();
                if(height > 100){
                    $('#zuodi').fadeIn();
                    $('#toptop').fadeIn();
                }else{
                    $('#zuodi').fadeOut();
                    $('#toptop').fadeOut();
                };
            });
        });
    
    
})