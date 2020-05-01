import trace from './trace';
import * as R from 'ramda';
const {is,not,compose}=R;

const notString=compose(not,is(String));

/**
 * json字符串解码，传值检查如果不是字符串则退出。
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
const jsonDecode=function (str) {
  if (notString(str)) {
    trace('decode json error: ','argument is not a string');
    return;
  }
  let opt;
  try {
    opt=JSON.parse(str);
  } catch (e) {
    opt=null;
    trace('decode json error: ',e);
  }
  return opt;
};

export default jsonDecode;
