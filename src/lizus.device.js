/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
设备判断
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
(function(){
	if (!orz)  return;

	//获取浏览器用户代理
	//getUserAgent :: () -> string
	var getUserAgent = function () {
		return navigator.userAgent;
	}

	//判断内容非空
	//isNotEmpty :: a -> boolean
	var isNotEmpty = orz.not(orz.isEmpty);

	//返回浏览器标识名称
	//getDevice :: () -> string
	orz.getDevice=function () {
		var u=getUserAgent();
		if (u.indexOf('MicroMessenger')!=-1) return '微信';
		if (u.indexOf('Android')!=-1) return 'Android';
		if (u.indexOf('iPhone')!=-1) {
			if (screen.height==812) return 'iPhone X';
			return 'iPhone';
		}
		if (u.indexOf('iPad')!=-1) return 'iPad';
		if (u.indexOf('Safari')!=-1 && u.indexOf('Chrome')==-1) return 'iPad';
		if (u.indexOf('Edge')!=-1) return 'Edge浏览器';
		if (u.indexOf('360SE')!=-1) return '360浏览器';
		if (u.indexOf('360EE')!=-1) return '360浏览器';
		if (u.indexOf('Maxthon')!=-1) return '傲游浏览器';
		if (u.indexOf('Tencent')!=-1) return 'QQ浏览器';
		if (u.indexOf('MetaSr')!=-1) return '搜狗浏览器';
		if (u.indexOf('Opera')!=-1) return 'Opera浏览器';
		if (u.indexOf('Firefox')!=-1) return 'Firefox浏览器';
		if (u.indexOf('Chrome')!=-1) return 'Chrome浏览器';
		if (u.indexOf('Safari')!=-1) return 'Safari浏览器';
		if (u.indexOf('MSIE')!=-1) return 'IE浏览器';
		if (u.indexOf('like Gecko')!=-1) {
			if (u.indexOf('OPR')!=-1) {
				return 'Opara浏览器';
			}
			return 'IE浏览器';
		}
	}
	/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
	用于获取浏览器设置
	常用属性有：
	clientWidth - 浏览器视口宽
	clientHeight - 浏览器视口高
	使用时创建示例如下：
	var clientWidthBigThen=function(w){
		var gte=orz.not(orz.lt(w));
		return orz.flow(orz.getDocument('clientWidth'),gte);
    };
	var lg=clientWidthBigThen(1200);
	var md=clientWidthBigThen(992);
	var sm=clientWidthBigThen(768);
	//getDocument :: string -> string
	---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
	orz.getDocument=function (prop) {
		return function () {
			return document.documentElement[prop] || document.body[prop] || 0;
		};
	};

	//判断设备是否是ios
	//isIos :: () -> boolean
	orz.isIos=orz.flow(getUserAgent,orz.match(/(iPhone|iPod|ios|iPad)/i),isNotEmpty);

	//判断设备是否是安卓
	//isAndroid :: () -> boolean
	orz.isAndroid=orz.flow(getUserAgent,orz.match(/Android/i),isNotEmpty);

	//判断设备是否是移动端
	//isMobile :: () -> boolean
	orz.isMobile=orz.flow(getUserAgent,orz.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),isNotEmpty);

	//判断设备是否是PC端
	//isPC :: () -> boolean
	orz.isPC=orz.not(orz.isMobile);

})();
