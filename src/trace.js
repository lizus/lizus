import * as R from 'ramda';
const {not,isNil,curry,compose}=R;

const notNil=compose(not,isNil);

//用于调试，tag用于标识调试信息，x为调试项，最终返回x不阻止程序运行
//trace :: string -> a -> a
const trace=curry(function trace(tag,x) {
  if (notNil(console)) {
    console.log(tag,x);
    /*
    //如果浏览器中没有console对象，一般就是旧浏览器，那就不调试
  }else{
    alert(tag);
    alert(opt);
    */
  }
  return x;
});

export default trace;
