import trace from './trace';
import {is,not,compose} from 'ramda';

var notString=compose(not,is(String));

/**
 * json字符串解码，传值检查如果不是字符串则退出。
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
var jsonDecode=function (str) {
  if (notString(str)) {
    trace('decode json error: ','argument is not a string');
    return;
  }
  var opt;
  try {
    opt=JSON.parse(str);
  } catch (e) {
    opt=null;
    trace('decode json error: ',e);
  }
  return opt;
};

export default jsonDecode;
