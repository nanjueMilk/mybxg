define(['jquery', 'cookie'], function ($) {

    $('#loginBtn').click(function () {
        //console.log(123);
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                //console.log(data)
                if (data.code == 200) {
                    $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
                    location.href = '/main/index'
                }
            }
        });
        return false;

    });

})
