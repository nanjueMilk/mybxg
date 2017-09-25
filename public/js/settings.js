define(['jquery', 'template', 'uploadify', 'region'], function ($, template) {
    //调用接口获取个人信息
    var profile = $('#profile');
    $.ajax({
        type: 'get',
        url: '/api/teacher/profile',
        dataType: 'json',
        success: function (data) {
            //console.log(data);
            // 解析数据，渲染页面
            var html = template('settingsTpl', data.result);
            $('#settingsInfo').html(html);
            //处理头像上传
            $('#upfile').uploadify({
                width: 220,
                height: 120,
                buttonText: '',
                itemTemplate: '<span></span>',
                swf: '/public/assets/jquery-uploadify/uploadify.swf',
                uploader: '/api/uploader/avatar',
                fileObjName: 'tc_avatar',
                onUploadSuccess: function (a,b) {
                    //console.log(b);
                    var obj = JSON.parse(b);
                    //console.log(obj);
                    $('.preview img').attr('src',obj.result.path);
                }
            });
            // 处理省市县三级联动
            $('#pcd').region({
                url: '/public/assets/jquery-region/region.json',
            });

        }

    })

})
