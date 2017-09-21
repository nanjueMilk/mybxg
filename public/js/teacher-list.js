define(['jquery', 'template'], function ($, template) {
    //  调用接口获取所有的教师数据
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        success: function (data) {
            //console.log(data);
            //解析数据，渲染页面
            console.log(data.result);
            var html = template('teacherTpl', {list: data.result});
            $('#teacherInfo').html(html);

            //启用注销功能
            $('.eod').click(function () {
                var that = this;
                //console.log(123);
                var td = $(this).parent();
                //console.log(td);
                var tcId = td.attr('data-tcId');
                var status = td.attr('data-status');
                //console.log(tcId,status)
                $.ajax({
                    type: 'post',
                    url: '/api/teacher/handle',
                    data: {
                        tc_id: tcId,
                        tc_status: status
                    },
                    dataType: 'json',
                    success: function (data) {
                        //console.log(data)
                        if (data.code == 200) {
                            td.attr('data-status', data.result.tc_status);
                            if (data.result.tc_status == 0) {
                                $(that).text('注销');
                            } else {
                                $(that).text('启用')
                            }
                        };
                    }
                });
            })
        }
    });
});
