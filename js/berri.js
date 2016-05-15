//音频播放
var a = document.getElementById("audio");
function clickA(){
    if(a.paused){
        a.play();
    }else{
        a.pause();
    }
    var volume = a.volume;
}
$(function(){
	$(".nav-btn-ico").click(function() {
		var $this=$(this);
		$this.toggleClass('nav-btn-close');
		$this.parent().next().slideToggle();
	});

	//进度条加载
	$(".progress-ring").loadingRing();

	//向下箭头
	var arrowObj = $("#arrow_down"),
		aboutOffsetTop= $("#about_title").offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() > $("#about_info").offset().top){
			arrowObj.hide();
		}
		else{
			arrowObj.show();
		}
	});
	arrowObj.click(function(){
		$("body,html").animate({
			scrollTop:aboutOffsetTop
		},200)
	});

	// snowflake
	$(".snow-canvas").snow();

	//动画
	// This example adds a duration to the tweens so they are synced to the scroll position
	var controller = $.superscrollorama();
	
	// amount of scrolling over which the tween takes place (in pixels)
	var scrollDuration = 200; 

	//about
	controller.addTween('#about_title', TweenMax.from( $('#about_title'), .5, {css:{opacity: 0,top:'-100px'}}), scrollDuration);
	controller.addTween('#about_info', TweenMax.from( $('#about_info'), 1, {css:{opacity: 0}}), 400);
	controller.addTween('#mac', TweenMax.from( $('#mac'), 1, {css:{bottom: "-500px",opacity: 0}}), scrollDuration);
	//skill
	controller.addTween('#skill_title', TweenMax.from( $('#skill_title'), .5, {css:{opacity: 0,top:'-100px'}}), scrollDuration);
	controller.addTween('#skill_planet', TweenMax.from( $('#skill_planet'), .5, {css:{opacity: 0,left:'-100px',top:'200px'}}), scrollDuration);
	controller.addTween('#code_css', TweenMax.from( $('#code_css'), .5, {css:{opacity: 0,width:0}}), scrollDuration);
	controller.addTween('#code_js', TweenMax.from( $('#code_js'), .5, {css:{bottom:"-200px"}}), scrollDuration);
	controller.addTween('#skill_man', TweenMax.from( $('#skill_man'), .5, {css:{left:0}}), scrollDuration);
	controller.addTween('.skill-list-1', TweenMax.from( $('.skill-list-1'), .5, {css:{left:"-200%"}}), scrollDuration);
	controller.addTween('.skill-list-2', TweenMax.from( $('.skill-list-2'), .5, {css:{left:"-200%"}}), scrollDuration);
	controller.addTween('.skill-list-3', TweenMax.from( $('.skill-list-3'), .5, {css:{left:"-200%"}}), scrollDuration);
	controller.addTween('.skill-list-4', TweenMax.from( $('.skill-list-4'), .5, {css:{left:"-200%"}}), scrollDuration);
	// progerss
	controller.addTween('#progress_title', TweenMax.from( $('#progress_title'), .5, {css:{opacity: 0,top:'-100px'}}), scrollDuration);
	// work
	controller.addTween('#work_title', TweenMax.from( $('#work_title'), .5, {css:{opacity: 0,top:'-100px'}}), scrollDuration);
	controller.addTween('#work_planet', TweenMax.from( $('#work_planet'), .5, {css:{opacity: 0,top:'-200px'}}), scrollDuration);
	controller.addTween('.exp-list-1', TweenMax.from( $('.exp-list-1'), .5, {css:{left:"100%"}}), scrollDuration);
	controller.addTween('.exp-list-2', TweenMax.from( $('.exp-list-2'), .5, {css:{left:"100%"}}), scrollDuration);
	controller.addTween('.exp-list-3', TweenMax.from( $('.exp-list-3'), .5, {css:{left:"100%"}}), scrollDuration);
	controller.addTween('.exp-list-4', TweenMax.from( $('.exp-list-4'), .5, {css:{left:"100%"}}), scrollDuration);
	// works list
	controller.addTween('#device_mac', TweenMax.from( $('#device_mac'), .5, {css:{"margin-left": 0}}), scrollDuration);
	controller.addTween('#device_ipad', TweenMax.from( $('#device_ipad'), .5, {css:{right:0}}), scrollDuration);
	controller.addTween('#device_iphone', TweenMax.from( $('#device_iphone'), .5, {css:{right:0}}), scrollDuration);
	controller.addTween('.works-list-1', TweenMax.from( $('.works-list-1'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-2', TweenMax.from( $('.works-list-2'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-3', TweenMax.from( $('.works-list-3'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-4', TweenMax.from( $('.works-list-4'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-5', TweenMax.from( $('.works-list-5'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-6', TweenMax.from( $('.works-list-6'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-7', TweenMax.from( $('.works-list-7'), .5, {css:{opacity: 0}}), scrollDuration);
	controller.addTween('.works-list-8', TweenMax.from( $('.works-list-8'), .5, {css:{opacity: 0}}), scrollDuration);
});