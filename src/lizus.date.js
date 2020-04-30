/* ---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=*
date相关函数
---=*--*=*-=*-=-*-=* 🌹 *---=*--*=*-=*-=-*-=* */
(function(){
  if (!orz) return;

  //用于将参数格式化为日期对象
  //dateFormat :: a -> Date
  orz.dateFormat = function (a) {
    if (orz.isDate(a)) return a;
    if (orz.isString(a)) {
      var m=orz.match(/^[012]\d{3}[-\/][01]\d[-\/][0-3]\d(\s+[0-2]\d(:[0-5]\d(:[0-5]\d)?)?)?/gi,a);
      if (!orz.isEmpty(m)) return new Date(orz.replace(/\-/g,'/',m[0]));//ios不认时间格式：YYYY-MM-DD要改为YYYY/MM/DD
      return new Date(a);
    }
    if (orz.isNumber(a)) return new Date(a);
    return new Date('error');
  };

  //根据不同的f返回两个日期的时间差
  /* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
  //生成文章发布时间,传入的time为时间字符串
  orz.getDateDiff=function (time) {
    var second=orz.dateDiff('second',time,new Date());
    var day=Math.floor(second/(24*3600));
    var hour=Math.floor((second%(24*3600))/3600);
    var minute=Math.floor((second%3600)/60);
    var date=orz.dateFormat(time);
    var dateYear=date.getFullYear();
    var dateMonth=orz.lpad('0',2,date.getMonth()+1);
    var dateDate=orz.lpad('0',2,date.getDate());
    if (day>30) return dateYear+'-'+dateMonth+'-'+dateDate;
    if (day>3) return dateMonth+'-'+dateDate;
    if (day>0) return day+'天前';
    if (hour>0) return hour+'小时前';
    if (minute>0) return minute+'分钟前';
    if (second<0) return '预计于：'+dateYear+'-'+dateMonth+'-'+dateDate+'发表';
    return '刚刚发表';
  };
  ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
  //dateDiff :: string -> string -> string -> number || null
  orz.dateDiff=function (f,a,b) {
    a=orz.dateFormat(a).getTime();
    b=orz.dateFormat(b).getTime();
    if (isNaN(a) || isNaN(b)) return orz.trace('date is error. ',null);
    var diff=b-a;
    var div=1;
    switch (f) {
      case 'week':
        div=7*24*3600*1000;
        break;
      case 'day':
        div=24*3600*1000;
        break;
      case 'hour':
        div=3600*1000;
        break;
      case 'minute':
        div=60*1000;
        break;
      case 'second':
        div=1000;
        break;
      default:
        div=1;
    }
    return Math.floor(diff/div);
  };
})();
