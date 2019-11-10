$(document).ready(function () {
//	第一个轮播图
 var swiper = new Swiper('.swiper-container-jiayi', {
      autoplay:{
       disableOnInteraction:false,
            
        },
        observer:true,
        loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
 
//  进行json请求  
	 function  sumter(){
//		   $('#center').html('');
		   $('.terrretrw').html('');
		   $.ajax({
			   type: "get",
			   url: "js/index1.json",
			   data: {},
			   async:"false",
			   dataType: "json",
		   }).done(function(str){
			   var arr=eval(str)
			   $.each(arr,function(i){
				  var lists=arr[i];
//				  $.each(lists,function(j){
					$(`
					<div class="swiper-slide">
					      	<div class="lunbo-waicen">
					      		<div class="lunbo-waicen-shang">
					      			<img src="${lists.imgyi}" />
					      			<div class="lunbo-waicen-shang-waiimg">
					      				<img src="${lists.imger}" />
					      			</div>
					      			<img class="lunbo-img" src="img/bf43c8b8b8c205b14e3ac27021e04394.png" />
					      			<div class="lunbo-waicen-shang-waixia">
					      				<div class="lunbo-waicen-shang-waixiashu">
					      					<p class="lunbo-zshang-pp1">${lists.zitiyi}</p>
					      					<span class="lunbo-zshang-spsp1">${lists.zitier}</span>
					      					<span class="lunbo-zshang-spsp2">${lists.zitisan}</span>
					      				</div>
					      			    <div class="lunbo-waicen-shang-waixiashuxi">
					      			    	${lists.zitisi}
					      			    </div>
					      			</div>
					      		</div>
					      	    <div class="lunbo-waicen-xia">
					      	    	<span class="lunbo-waicen-xiaxin">${lists.zitiwu}</span>
					      	    	<span class="lunbo-waicen-xiaxin1">${lists.zitiliu}</span>
					      	    	<p class="lunbo-waicen-xiaxin2">
					      	    		<span class="lunbo-waicen-xiaxin2-li1">
					      	    			<span>${lists.ziqian}</span>
					      	    			<span>${lists.zishuyi}</span>
					      	    		</span>
					      	    		<span class="lunbo-waicen-xiaxin2-li2">
					      	    			<span>${lists.ziqian}</span>
					      	    			<span>${lists.zishuer}</span>
					      	    		</span>
					      	    	</p>
					      	    </div>
					      	</div>
					      </div>
					`).appendTo('.terrretrw')
				  })
			   
			   //  第二个轮播图    
   var swiperer = new Swiper('.swiper-container-jiaer', {
      slidesPerView: 4,
      spaceBetween: 10,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
			   
			   
			   })
//		   })
	   }
	   sumter()
//  第一个选项卡
    $(".renqijian-neiban-lixuan-zitili").click(function(){
    	$(".renqijian-neiban-lixuan-zitili").eq($(this).index()).addClass("xuanxiangka").siblings().removeClass("xuanxiangka")
$('.renqijian-neixia').eq($(this).index()).addClass("renqijian-neixiachux").siblings().removeClass("renqijian-neixiachux")
    })
//	 据加生活  
    var swiper = new Swiper('.swiper-container-cendeer', {
      spaceBetween: 30,
      effect: 'fade',
       loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    var swiper = new Swiper('.swiper-jiadeyouyuyu', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop:true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
//  滚轮事件
    $(function(){
            $(window).scroll(function(){
                height = $(window).scrollTop();
                if(height > 100){
//                  $('#dingzuo').fadeIn();
//                  $('#dingzuo').css({"position":"fixed",""})
                    $('#dingyou').fadeIn();
                    $('#topbuu').fadeIn();
                }else{
//                  $('#dingzuo').fadeOut();
                    $('#dingyou').fadeOut();
                    $('#topbuu').fadeOut();
                };
                 if(height > 700){                                
                 $('#dingzuo').css({"position":"fixed","top":"100px","left":"0px"})
                 $('#dingyou').css({"position":"fixed","top":"60px","right":"0px"})
                }else{                	
                $('#dingzuo').css({"position":"absolute","top":"800px","right":"0px"})
                $('#dingyou').css({"position":"absolute","top":"800px","right":"0px"})
                };
            });
        });


})
