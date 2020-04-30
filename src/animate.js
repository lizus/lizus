/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
IE9补丁
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */

window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  function( callback ){
    window.setTimeout(callback, 1000 / 60);
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
使用帧动画优化动画表现
传入fn来实现每一帧的动画内容
使用start开始动画，stop停止
var n=0;
var a=animate(function (){
orz.trace('n: ',n++);
});
a.start();
---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=* */
//animate :: () -> object
const animate=function (fn) {
  var id=0,//记录动画的ID
  startTime=0,//记录动画开始的时间
  stopTime=0,//记录动画停止的时间
  hasStart=false;//是否开始动画了
  function animation(){
    fn.call(this);
    id = requestAnimationFrame(animation);
  };
  return {
    startTime:startTime,
    stopTime:stopTime,
    start:function (){
      if (hasStart) return;
      startTime=new Date();
      id = requestAnimationFrame(animation);
      hasStart=true;
    },
    stop:function () {
      stopTime=new Date();
      if (id) {
        cancelAnimationFrame(id);
      }
      id=0;
      hasStart=false;
    }
  };
};

module.exports=animate;
