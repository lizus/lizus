(function (){
    if (!orz) return;

    //获取对象的属性值
    //prop :: object -> string -> a
    orz.prop = orz.curry(function (obj,prop) {
        if (orz.isObject(obj)) {
            return obj[prop] ? obj[prop] : orz.trace(prop + ' is not a prop in the object',obj[prop]);
        }
        return orz.trace('the first argument is not an object',null);
    });

    //获取对象的属性名数组
    //props :: object -> array
    orz.props = function (obj) {
        if (orz.isObject(obj)) return Object.keys(obj);
        return orz.trace('the argument is not an object',[]);
    };

    //用于设置项的object转换成string,例如url的params
    //objToStr :: object -> string
    orz.objToStr = function (obj) {
        var str='';
        if (orz.isObject(obj)) {
            str=[];
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    str.push(prop+'='+encodeURIComponent(orz.objToStr(obj[prop])));
                }
            }
            str=str.join('&');
        }
        if (orz.isString(obj)) str=obj;
        return str;
    };

    //拼接两个对象，当属性名相同时，使用obj的值，返回def
    //joinObject :: object -> object -> object
    orz.joinObject = function (def,obj) {
        var opt={};
        if (orz.isObject(def) && orz.isObject(obj)) {
            for(var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    def[prop] = obj[prop];
                }
            }
            opt=def;
        }
        return opt;
    };
})();