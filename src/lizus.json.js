/* ---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=*
json 处理
---=*--*=*-=*-=-*-=* ^.^ *---=*--*=*-=*-=-*-=* */
(function (){
    if (!orz)  return;

    orz.jsonEncode=function (str) {
        return JSON.stringify(str);
    };
    orz.jsonDecode=function (str) {
        var opt;
        try {
            opt=JSON.parse(str);
        } catch (e) {
            opt=null;
            orz.trace('decode json error: ',e);
        }
        return opt;
    };
})();