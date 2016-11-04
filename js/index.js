

require("../css/index.css");
require("../css/reset.css");
require("../swiper/swiper-3.4.0.min.css");
//require("../iconfont/iconfont.css");

$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getBanner.php?callback=",
	dataType:"JSONP",
	success:function(data){
		var result = eval(data);
		var str = result.map(function(item){
			return JSON.parse(item.goodsBenUrl)[0];
		});
		var len = str.length;
		for(var i = 0; i < len; i++){
			$("#swiperSlide").append('<div class="swiper-slide"><img src="'+str[i]+'"/></div>');
		}
		var swiper = new Swiper(".swiper-container",{
			loop:true,
			autoplay:2000,
			autoplayDisableOnInteraction : false,
			pagination: '.swiper-pagination',
		});
	}
});
var myScroll;
var pullDownFlag = 0;
var pullUpFlag = 0;
function loaded(){
	myScroll = new IScroll("#wrapper",{
		probeType: 3,
		mouseWheel:true,
		scrollbars: false,
		fadeScrollbars: true,
		interactiveScrollbars: true,
		shrinlScrollbars: true,
		shrinkScrollbars:'scale',
		useTransfrom: true,
		useTransition: true,
		boune:true,
		freeScroll:false,
		startX: 0,
		startY: 0,
	});
}




