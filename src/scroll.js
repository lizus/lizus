/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
IE9补丁
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function( callback ){
    window.setTimeout(callback, 1000 / 30);//针对旧浏览器使用1秒30帧，新浏览器一般是60帧，更平滑一些
  };
})();
window.cancelAnimationFrame=window.cancelAnimationFrame ||
Window.webkitCancelAnimationFrame ||
window.mozCancelAnimationFrame ||
window.msCancelAnimationFrame ||
window.oCancelAnimationFrame ||
function( id ){
  window.clearTimeout( id );
};

/* ---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=*
优化页面滚动事件，在$(window).on('scroll')滚动事件中添加事件用scroll包裹
针对略旧的浏览器自动使用setTimeout.
同时针对滚动位置进行优化，如果位置没动（1像素范围内）则不运行。
借此减少函数执行次数
示例:

var scroll = require('./scroll');
import {scroll} from 'lizus';

(function($){
  var go=scroll(function (e) {
    var st=window.pageYOffset
    			|| document.documentElement.scrollTop
    			|| document.body.scrollTop
    			|| 0;
    orz.log(st);
  });
  $(window).on('scroll',go);
})(jQuery);
---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=* */
var scroll=function (fn) {
  var scrolling=false;
  var pos=0;
  return function (e) {
    var st=window.pageYOffset
    			|| document.documentElement.scrollTop
    			|| document.body.scrollTop
    			|| 0;
    st=Math.round(st);
    if (st==pos) return;
    pos=st;
    if (!scrolling) {
      window.requestAnimationFrame(function (e){
        fn.call(e);
        scrolling=false;
      });
      scrolling=true;
    }
  };
};

export default scroll;
