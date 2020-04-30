(function(){
    if (!orz) return;

    //用于获取地址中的GET参数值，传入url: location.search可获得当前页的参数
    // urlGet :: string -> string -> string
    orz.urlGet = orz.curry(function $_GET(url,tag) {
        if (url) {
            var reg=new RegExp('[\?&]'+tag+'=([^&]*)','g');
            var m,n;
            //此处利用循环获取最后一个tag的值，预防url中存在多个同名tag
            do {
                m=reg.exec(url);
                if (m) n=m;
            } while (m);
            if (orz.isArray(n)) {
                return n[1];
            }
        }
        return '';
    });

    //获取url中所有参数
    //urlGets :: string -> object
    orz.urlGets = function (url) {
        var obj={};
        if (url) {
            var reg=new RegExp('[\?&]([^=&]+)=?([^&]*)','g');
            var m;
            do {
                m=reg.exec(url);
                if (m) obj[m[1]]=m[2];
            } while (m);
        }
        return obj;
    };

    //获取地址中的锚名称
    //urlAnchor :: string -> string
    orz.urlAnchor = function (url) {
        if (url) {
            var reg = new RegExp('#([^\?&]*)');
            var m = reg.exec(url);
            if (orz.isArray(m)) return m[1];
        }
        return '';
    };

    //用于获取url的基础地址
    //urlBase :: string -> string
    orz.urlBase =  function (url) {
        if (orz.isString(url)) {
            url=orz.replace(/#.*/,'',url);
            url=orz.replace(/\?.*/,'',url);
            return url;
        }
        return orz.trace('url is not a string','');
    };

    //根据传参生成新的地址，传参可以是字符串，也可以是对象
    //getUrl :: string -> string || object -> string
    orz.getUrl = function (url,params) {
        if (orz.isString(url)) {
            var defParams=orz.urlGets(url);
            var baseUrl=orz.urlBase(url);
            if (orz.isString(params)) params=orz.strToObj(params);
            if (orz.isObject(params)) defParams=orz.joinObject(defParams,params);
            if (Object.keys(defParams).length>0) {
                url=baseUrl+'?'+orz.objToStr(defParams);
            }
        }
        return url;
    };
})();
