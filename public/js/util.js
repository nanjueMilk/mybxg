define(['jquery'], function ($) {
    return {
        qs: function (key) {
            //获取url参数中的指定参数值
            //console.log(location)  //search:?tc_id=2&flag=123
            var param = location.search.substr(1);
            var result = null;
            //console.log(param)
            if (param) {
                var ps = param.split('&');
                // console.log(ps);
                // 数组 ["tc_id=2", "flag=123"]
                $.each(ps, function (index, item) {
                    //console.log(item);
                    var kv = item.split('=');
                    // console.log(kv);
                    if (kv[0] == key) {
                        result = kv[1];
                        return false; //终止each循环
                    }
                });
            }
            return result;
        }
    }
});
