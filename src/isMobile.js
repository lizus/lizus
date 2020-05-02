import uaMatch from './uaMatch';

//判断客户端是否是移动端
var isMobile=uaMatch(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

export default isMobile;
