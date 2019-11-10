$(document).ready(function () {
//	轮播图
	var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      effect: 'fade',
      loop:true,
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
//  ajax的请求
    $(".zhongchou-waper-nei").html("")
//  var licon =$(this).attr("li_con")
    $.get("js/index3.json",function(str){
        $.each(str,function(i){
        	var titll=str[i].title
            var name = str[i].zitiyi
            var zitiy=str[i].zitiers
            var shuy=str[i].shuziyi
            var baiy=str[i].baifen
            var meiy=str[i].meiyuan
            var wany=str[i].wanyi
            var handey=str[i].handeyi
            var shuzie=str[i].shuzier
            var renzi=str[i].renzi
            var shuzis=str[i].shuzisan
            var zitier=str[i].zitier
            var zizisi=str[i].shuzisi
            console.log(name)
                    $(`
                <li class="zhongchou-lifple">
	    	    		<div class="zhongchou-lifple1">
	    	    			<img class="biada" src="${titll}" />
	    	    		</div>
	    	    		<div class="zhongchou-lifple2">
	    	    			<p class="zhongchou-lifple2-li1">${name}</p>
	    	    			<p class="zhongchou-lifple2-li2">
	    	    				${zitiy}
	    	    			</p>
	    	    			<div class="zhongchou-lifple2-li3">
	    	    				<div class="zhongchou-lifple2-li3li">
	    	    					<div class="zhongchou-lifple2-li3li1">
	    	    						<div class="zhongchou-lifple2-li3li1li"></div>
	    	    					</div>
	    	    				</div>
	    	    				<span class="zhongchou-lifple2-li3ziti1">
	    	    					<span>${shuy}</span>
	    	    					<span>${baiy}</span>
	    	    				</span>
	    	    				<ul class="zhongchou-lifple2-li3ziti2">
	    	    					<li>
	    	    						<p class="zhongchou-text1">
	    	    					<span>${meiy}</span>	
	    	    					<span>${wany}</span>
	    	    						</p>
	    	    						<p class="zhongchou-text2">${handey}</p>
	    	    					</li>
	    	    					<li>
	    	    						<p class="zhongchou-text1">
	    	    					<span>${shuzie}</span>	
	    	    					<span>${renzi}</span>
	    	    						</p>
	    	    						<p class="zhongchou-text2">${shuzis}</p>
	    	    					</li>
	    	    					<li>
	    	    						<p class="zhongchou-text1">
	    	    					${zizisi}
	    	    						</p>
	    	    						<p class="zhongchou-text2">${zitier}</p>
	    	    					</li>
	    	    				</ul>
	    	    			</div>
	    	    		</div>
	    	    	</li>
               
                `).appendTo($(".zhongchou-waper-nei"))
      
        })
    })
//  滚轮事件
    $(function(){
            $(window).scroll(function(){
                height = $(window).scrollTop();
                if(height > 100){
                    $('#zuoding').fadeIn();
                    $('#toubu').fadeIn();
                }else{
                    $('#zuoding').fadeOut();
                    $('#toubu').fadeOut();
                };
            });
        });


})