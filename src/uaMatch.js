import {isEmpty,not,compose,match} from 'ramda';

//获取浏览器用户代理
//getUserAgent :: () -> string
var getUserAgent = function () {
	return navigator.userAgent;
}

//判断内容非空
//isNotEmpty :: a -> boolean
var notEmpty = not(isEmpty);

//判断userAgent中是否匹配有reg的内容，传值为userAgent标识字符串正则表达式。可以用来识别客户端设备等
//uaMatch :: RegExp -> boolean
var uaMatch=function (reg){
  return compose(notEmpty,match(reg),getUserAgent);
};

export default uaMatch;
