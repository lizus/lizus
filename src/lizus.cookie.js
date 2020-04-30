/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
cookie相关函数
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
(function (){
    if (!orz)  return;

    //获取cookie
    orz.getCookie=function (name) {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            return decodeURIComponent(arr[2]);
        }
        return '';
    };
    //设置cookie
    orz.setCookie=function (cname,cvalue,exdays,currentPath) {
        if (!orz.isExist(exdays)) exdays=1;
        exdays=exdays-0;
        if(isNaN(exdays)) exdays=1;
        if (!orz.isExist(currentPath)) {
            path=';path=/';
        }else{
            path='';
        }
        var d=new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires="expires="+d.toUTCString();
        document.cookie=cname+"="+encodeURIComponent(cvalue)+"; "+expires+path;
    };
    //清除cookie
    orz.delCookie=function (name) {
        setCookie(name, "", -1);
    };
})();