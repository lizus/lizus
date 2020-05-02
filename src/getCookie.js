/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
cookie相关函数
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
import {isNil} from 'ramda';

//获取cookie
var getCookie=function (name) {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)){
    return decodeURIComponent(arr[2]);
  }
  return '';
};

export default getCookie;
