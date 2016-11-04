/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
		dataType:"JSONP",
		success:function(data){
			var result = eval(data);
			var str = result.map(function(item){
				return JSON.parse(item.goodsBenUrl)[0];
			});
			
			var swiper = new Swiper(".swiper-container",{
				loop:true,
				autoplay:2000,
				autoplayDisableOnInteraction : false,
				pagination: '.swiper-pagination',
			});
		}
	});


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map