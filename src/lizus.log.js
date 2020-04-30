/* ---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=*
console在不同浏览器之间的兼容，需要输出时，统一使用orz.log
在IE下调试的时候，dir经常会出错，替换成log
---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=* */
(function(){
  if (!orz) return;

  orz.log=function () {
    var opt=Array.prototype.slice.call(arguments,0);
    if (window.console) {
      var fn;
      if(console.info){
        fn=window.console.info;
      }else{
        fn=window.console.log;
      }
      fn.apply(null,opt);
    }else{
      alert(opt);
    }
  };
})();
