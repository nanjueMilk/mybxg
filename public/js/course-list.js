define(['jquery', 'template', 'util'], function ($, template, util) {
    util.setMenu(location.pathname);
    // 获取所有的课程信息
    $.ajax({
        type: 'get',
        url: '/api/course',
        dataType: 'json',
        success: function (data) {
            // 解析数据，渲染页面
            //console.log(data)
            var html = template('courseTpl', {list: data.result});
            $('#courseInfo').html(html);
        }
    })
})