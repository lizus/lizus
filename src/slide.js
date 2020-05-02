
var $=jQuery;

//slide 幻灯插件
//author: lizus.com@gmail.com
//url: http://lizus.com
//插件使用:
//需要保持幻灯所在DIV的格式如下:
//支持的animate: leftToRight,rightToLeft,topToBottom,bottomToTop
/*
<div class="vitara_slide_in no-js" id="vitara_slide_homepage" data-ratio=1.5 data-max-height="500" data-animate="rightToLeft" data-speed="5000" data-event="click">
	<div class="slide_loading"></div>
	<div class="vitara_slide"><ul>
		<li><a><img src=></a></li>
	</ul></div>
</div>
*/
$.fn.extend({
	slide:function(o){
		o=$.extend({
			ratio:$(this).attr('data-ratio')|| 1.5,//轮播宽高比(必填)
			maxWidth:$(this).attr('data-max-width')|| null,//轮播最大宽度
			maxHeight:$(this).attr('data-max-height')|| null,//轮播最大高度
			animate:$(this).attr('data-animate')|| 'leftToRight',//动画
			speed:$(this).attr('data-speed')|| 5000,//轮播速度
			e:$(this).attr('data-event')|| 'click',//用于extra是用什么事件触发，选项有hover,click
		}, o || {});
		var that=$(this);
		var p=that.parent();
		var w=0;//轮播宽
		var h=0;//轮播高
		var s=that.children('.vitara_slide');//真正的轮播区域
		if (s.length<1) return;
		var ul=s.children('ul');
		if (ul.length<1) return;
		var lis=ul.children('li');
		if (lis.length<1) return;
		that.removeClass('no-js');
		that.find('.slide_loading').hide();
		s.css({
			'position':'relative',
			'overflow':'hidden',
			'margin':0,
			'padding':0,
		});
		lis.css({
			'display':'block',
			'overflow':'hidden',
			'margin':0,
			'padding':0,
		});
		ul.css({
			'margin':0,
			'padding':0,
			'position':'absolute',
			'left':0,
			'top':0,
		});
		extra_init();
		page_init();
		var btns=that.children('.slide_btn');
		var es=that.children('.extra').find('li');
		init();
		$(window).on('resize',init);

		if (lis.length<2) return;//只有一张图的话初始化一下不启动轮播

		//左右翻页按钮事件
		btns.on(o.e,function (){
			lis.stop(true,true);
			var index=get_current_eq();
			if ($(this).hasClass('slide_prev')) {
				index=index-1;
				if (index<0) index=lis.length-1;
			}
			if ($(this).hasClass('slide_next')) {
				index=index+1;
				if(index>=lis.length) index=0;
			}
			goTo(index);
		});
		//列表翻页按钮事件
		es.on(o.e,function (){
			lis.stop(true,true);
			var index=es.index($(this));
			goTo(index);
		});
		var _loop=setInterval(loop,o.speed);
		that.hover(function (){
			lis.stop(true,true);
			clearInterval(_loop);
		},function (){
			lis.stop(true,true);
			_loop=setInterval(loop,o.speed);
		});

		//宽高及样式初始化执行，在窗口载入及重绘大小的时候都要进行
		function init(){
			w_init();
			h_init();
			set_w_h();
			lis.stop(true,true);
			var eq=get_current_eq();
			switch (o.animate) {
				case 'topToBottom':
					ul.css({
						'top':0-eq*h
					});
					break;
				case 'bottomToTop':
					lis.css({
						'position':'absolute',
						'left':0,
					});
					lis.each(function (){
						$(this).css('top',(lis.length-1-lis.index($(this)))*h);
					});
					ul.css({
						'top':0-(lis.length-1-eq)*h
					});
					break;
				case 'rightToLeft':
					lis.css('float','right');
					ul.width(lis.length*w);
					ul.css({
						'left':0-(lis.length-1-eq)*w
					});
					break;
				case 'leftToRight':
				default:
					lis.css('float','left');
					ul.width(lis.length*w);
					ul.css({
						'left':0-eq*w
					});
			}
		}

		function w_init(){
			w=p.width();
			if (o.maxWidth && w>o.maxWidth) w=o.maxWidth;
		}

		function h_init(){
			h=w/o.ratio;
			if (o.maxHeight && h>o.maxHeight) h=o.maxHeight;
		}

		function set_w_h(){
			s.width(w);
			s.height(h);
			lis.width(w);
			lis.height(h);
		}

		function extra_init(){
			var html='<div class="extra"><ul class="ul_'+lis.length+'">';
			lis.each(function (){
				html+='<li>'+$(this).html()+'</li>';
			});
			html+='</ul></div>';
			that.append(html);
		}

		function page_init(){
			that.append('<span class="slide_btn slide_prev"><i class="icon-left"></i></span>');
			that.append('<span class="slide_btn slide_next"><i class="icon-right"></i></span>');
		}

		function get_current_eq(){
			var eq=lis.index(lis.filter('.current'));
			if (eq<0) {
				eq=0;
				lis.eq(eq).addClass('current');
				es.removeClass('current');
				es.eq(eq).addClass('current');
			}
			return eq;
		}

		//单步动画
		function goTo(eq){
			var obj={};
			switch (o.animate) {
				case 'rightToLeft':
					obj={
						'left':0-(lis.length-1-eq)*w
					}
					break;
				case 'bottomToTop':
					obj={
						'top':0-(lis.length-1-eq)*h
					}
					break;
				case 'topToBottom':
					obj={
						'top':0-eq*h
					}
					break;
				case 'leftToRight':
				default:
					obj={
						'left':0-eq*w
					}
					break;
			}
			ul.animate(obj,500,function (){
				lis.removeClass('current');
				lis.eq(eq).addClass('current');
			});
			es.removeClass('current');
			es.eq(eq).addClass('current');
		}
		//循环动画
		function loop(){
			var index=lis.index(lis.filter('.current'));
			index=index+1;
			if(index>=lis.length) index=0;
			goTo(index);
		}
	}
});

var slide=function (tag){
	$(tag).each(function(){
		$(this).slide();
	});
};

export default slide;
