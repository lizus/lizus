import uaMatch from './uaMatch';

//判断客户端是否是ios
var isIos=uaMatch(/(iPhone|iPod|ios|iPad)/i);

export default isIos;
