/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
cookie相关函数
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
import {isNil} from 'ramda';

//设置cookie
var setCookie=function (cname,cvalue,exdays,currentPath) {
  if (!isNil(exdays)) exdays=1;
  exdays=exdays-0;
  if(isNaN(exdays)) exdays=1;
  if (!isNil(currentPath)) {
    path=';path=/';
  }else{
    path='';
  }
  var d=new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires="expires="+d.toUTCString();
  document.cookie=cname+"="+encodeURIComponent(cvalue)+"; "+expires+path;
};

export default setCookie;
