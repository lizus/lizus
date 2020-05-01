/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
设备判断
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
//返回浏览器标识名称
//getDevice :: () -> string
const getDevice=function () {
	let u=navigator.userAgent;
	if (u.indexOf('MicroMessenger')!=-1) return '微信';
	if (u.indexOf('Android')!=-1) return 'Android';
	if (u.indexOf('iPhone')!=-1) {
		if (screen.height==812) return 'iPhone X';
		return 'iPhone';
	}
	if (u.indexOf('Mac OS')!=-1) return 'MacOS';
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
};

export default getDevice;
