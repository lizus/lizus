import uaMatch from './uaMatch';

//判断客户端是否是android
const isAndroid=uaMatch(/Android/i);

export default isAndroid;
