/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
cookie相关函数
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
import {isNil} from 'ramda';
import setCookie from './setCookie';

//清除cookie
const delCookie=function (name) {
  setCookie(name, "", -1);
};

export default delCookie;
