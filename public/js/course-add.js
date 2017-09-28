define(['jquery','util','form'], function ($,util) {
    // 设置导航菜单栏选中
    util.setMenu(location.pathname);
    // 绑定表单提交单击事件
    $('#courseBtn').click(function () {
        $('#courseForm').ajaxSubmit({
            type: 'post',
            url: '/api/course/create',
            //插件不需要传参
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    //跳转到下一步
                    //console.log(data)
                    location.href = '/course/basic?cs_id=' + data.result.cs_id;
                }
            }
        })
    })
});
