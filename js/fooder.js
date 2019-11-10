$(function() {
	
	$('.aaaaa').click(function(){
		var index=$(this).index()
		console.log(index)
		window.open("index2sy.html?"+(index-1))
	})
})