define(['jquery', 'cookie'], function ($) {
    // 登录功能
    $('#loginBtn').click(function () {
        //console.log(123);
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                console.log(data)
                if (data.code == 200) {
                    //把用户的登录信息存储到cookie中，方便跨页面共享数据
                    $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/main/index'
                }
            }
        });
        return false;  //阻止按钮的默认行为

    });

})
