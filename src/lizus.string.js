/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
文本字符串处理相关函数
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
(function (){
    if (!orz)  return;

    //match的curry化，match的返回结果具有不确定性，要注意
    //match :: regexp || string -> string -> array
    orz.match=orz.curry(function (q,str) {
        if (orz.isEmpty(str)) return false;
        return String.prototype.match.call(str,q) || false;
    });

    //replace的curry化
    //replace :: regexp || string -> string || (string -> string) -> string -> string
    orz.replace=orz.curry(function (q,r,str) {
        if (orz.isEmpty(str)) return '';
        return String.prototype.replace.call(str,q,r);
    });

    //用于去掉字符串两端空白
    //trim :: string -> string
    orz.trim=orz.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');

    //用于字符串补位,第一个参数决定是否右补位（否则就是左补位），第二个参数为补位用的字符串，第三个是补位长度，第四个是应用字符串
    //如将3 补位为 03
    // pad :: boolean -> string -> number -> string -> string
    orz.pad=orz.curry(function (right,add,len,str) {
        right=orz.isTrue(right);
        if (orz.isEmpty(add)) add='0';
        add=String(add);
        str=String(str);
        var needLen=len-str.length;
        if (needLen <= 0) return str;
        var needStr='';
        while(needStr.length<needLen) {
            needStr+=add;
        }
        needStr=needStr.substring(0,needLen);
        return right ? str+needStr : needStr+str;
    });

    //左补位
    //lpad :: string -> number -> string -> string
    orz.lpad = orz.pad(false);

    //右补位
    //rpad :: string -> number -> string -> string
    orz.rpad = orz.pad(true);

    //将字符串解析为对象，用于一些设置或url的param项
    //strToObj :: string -> object
    orz.strToObj = function (str) {
        var obj={};
        if (orz.isString(str)) {
            str=str.split('&');
            var reg=new RegExp('([^=]+)=?([^=]*)','g');
            str.map(function (item) {
                var m;
                do {
                    m=reg.exec(item);
                    if (m) obj[m[1]]=decodeURIComponent(m[2]);
                } while (m);
            });
        }
        return obj;
    };
})();
