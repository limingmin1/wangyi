$(function() {
	

	//  滚动事件
	//      $(function(){
	$(window).scroll(function() {
		height = $(window).scrollTop();
		if(height > 100) {
			$('#zuodian').css({
				"position": "fixed",
				"top": "100px",
				"left": "0px"
			})
			$('#youdian').css({
				"position": "fixed",
				"top": "50px",
				"rigth": "0px"
			})
			$('#topde').fadeIn();
		} else {

			$('#zuodian').css({
				"position": "absolute",
				"top": "560px",
				"left": "0px"
			})
			$('#youdian').css({
				"position": "absolute",
				"top": "560px",
				"rigth": "0px"
			})
			$('#topde').fadeOut();
		};
	});
	//      });

	$(".centure").html("")

	var num = window.location.search.substr(1)
	$.get("js/xiangqingye.json", function(str) {
		var inde = num
//		var imgs = str[inde].img
//		console.log(imgs)
		$(`
	 	            <div class="centure-shou">
	 	               <a>首页</a>
							    <span class="centure-shou-span1"></span>
							    <span class="centure-shou-span2">${str[inde].title}</span>
                </div>
            <div class="centure-lunbo">		    	
						  <div class="swiper-container  swiper-shouyeli">
						    <div class="swiper-wrapper"></div>			    
						    <div class="swiper-pagination swiper-pagination-white">
						    </div>
						    <div class="swiper-button-next  swiper-youdian"></div>
						    <div class="swiper-button-prev swiper-zuodian"></div>
						</div>
						<div class="centure-fenlei">
						  <div class="centure-fenlei-ziti">
						    <div class="centure-fenlei-zitiyi">
						       <span class="centure-fenlei-name">分类：</span>
						       <div class="centure-fenlei-duzi chaziyi">
						       </div>
						    </div>
						    <div class="centure-fenlei-zitier">
						       <span class="centure-fenlei-name">配送地址：</span>
						       <div class="centure-fenlei-duzi chazier">
						       </div>
						    </div>
						    <div class="centure-fenlei-zitisan">
		    		    <span class="centure-fenlei-name">排序：</span>
		    			<div class="centure-fenlei-duzi">
		    				<a class="centure-fenlei-duziaa active">默认</a>
		    				<a class="centure-fenlei-duziaa">
		    					<span>价格</span>
		    					<div class="centure-fenlei-duziaa-div">
		    						<i class="centure-fenlei-duziaa-div1"></i>
		    						<i class="centure-fenlei-duziaa-div2"></i>
		    					</div>
		    				</a>
		    				<a class="centure-fenlei-duziaa">
		    					<span>上架事件</span>
		    						<i class="centure-fenlei-duziaa-div3"></i>
		    				</a>
		    			</div>
		    			</div>
						  </div>
						</div>
						      <div class="centure-fenlei-zongde">
						         
						      </div>
					  </div>
                `).appendTo($(".centure"))
                var imm=str[inde].img
                var lists=str[inde].list
                var listg=str[inde].lis
                var iitem=str[inde].item
                console.log(iitem)
	          $.each(imm, function(i) {
							$(`
				     	   <div class="swiper-slide">
							      	<img src=${imm[i]} />
							      </div>
				     	`).appendTo($(".swiper-wrapper"))
				    })
     	       $.each(lists, function(j) {
							$(`
				     	   <a class="centure-fenlei-duziaa">${lists[j]}</a>
				     	`).appendTo($(".chaziyi"))
				     	
				     	
            })
	          $.each(listg, function(j) {
							$(`
				     	   <a class="centure-fenlei-duziaa">${listg[j]}</a>
				     	`).appendTo($(".chazier"))
				     	
				     	
            })
	          $.each(iitem, function(j) {
							$(`
				     	   <div class="qdhwsh">
		        		<p class="qdhwsh-pp">
		        			<span class="qdhwsh-pp-name">${iitem[j].head}</span>
		        		</p>
		        	    <p class="qdhwsh-pp-name1">${iitem[j].head1}</p>
		        	</div>
		        	<ul class="qdhwxia">
		        	</ul>
				     	`).appendTo($(".centure-fenlei-zongde"))
				     	var lii=iitem[j].li
				     	$.each(lii, function(i) {
				     		
							$(`
				     	  <li class="qdhwxia-li">
		        				<div class="qdhwxia-li-divsh">
		        					<img class="imgs" src="${lii[i].img}" />
		        					<div class="qdhwxia-li-divshimg">
		        						<img src="${lii[i].imgs}" />
		        					</div>
		        					<img class="qdhwxia-li-divshimg1" src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png" />
		        					<div class="qdhwxia-li-divshziti">
		        						<div class="qdhwxia-li-divshzitiozuo">
		        							<div class="qdhwxia-li-divshzitiozuo1">
		        								<span>${lii[i].titles}</span>
		        							</div>
		        							<div class="qdhwxia-li-divshzitiozuo2">
		        								<span>${lii[i].txt}</span>
		        							</div>
		        						</div>
		        						<div class="qdhwxia-li-divshzitioyou">${lii[i].title}</div>
		        					</div>
		        					<div class="qdhwxia-li-divshzitixia">
		        						<div class="qdhwxia-li-divshzitixia1">
		        							<span class="qdhwxia-li-divshzitixia1sp">${lii[i].center}</span>
		        						</div>
		        						<h4 class="qdhwxia-li-divshzitixia1h4">
		        							<span>${lii[i].head}</span>
		        						</h4>
		        						<p class="qdhwxia-li-divshzitixia1pp">
		        							<span class="qdhwxia-li-divshzitixia1pp1">
        							  	
		        								<span>${lii[i].price}</span>
		        							</span>
		        							<span class="qdhwxia-li-divshzitixia1pp2">
		        							
		        								<span>${lii[i].change}</span>
		        							</span>
		        						</p>
		        						<div class="qdhwxia-li-divshzitixia1div">
		        							<hr  />
		        							<p class="qdhwxia-li-divshzitixia1div1">${lii[i].foot}</p>
		        						</div>
		        					</div>
		        				</div>
		        			
		        	    </li>
				     	`).appendTo($(".qdhwxia").last())
				     	var nams=lii[i].center
				     	
				     	 if(nams==""){		
				   			$('.qdhwxia-li-divshzitixia1sp').last().css("display","none")
				     
				     	 
				     	}	
            })
				    
				     	
            })
	          
	          
	          
	          
	          
	          
	          
	          
	          
	          
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

	})

})