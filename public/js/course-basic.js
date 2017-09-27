define(['jquery', 'template', 'util', 'ckeditor'], function ($, template, util, CKEDITOE) {
    // 设置导航菜单选中
    util.setMenu('/course/add');
    // 获取课程Id
    var csId = util.qs('cs_id');
    // 获取操作标志位
    var flag = util.qs('flag');
    // 根据课程id查询课程相关信息
    $.ajax({
        type: 'get',
        url: '/api/course/basic',
        data: {cs_id: csId},
        dataType: 'json',
        success: function (data) {
            if (data.code == 200) {
                //console.log(data)
                if (flag) {
                    data.result.operate = '课程编辑';
                } else {
                    data.result.operate = '课程添加';
                }
                var html = template('basicTpl', data.result);
                $('#basicInfo').html(html);

                // 处理二级分类的下拉联动
                $('#firstType').change(function () {
                    var pid = $(this).val();
                    //console.log(pid)
                    // 根据一级列表的id查询二级分类的数据
                    $.ajax({
                        type: 'get',
                        url: '/api/category/child',
                        data: {cg_id: pid},
                        dataType: 'json',
                        success: function (data) {
                            //console.log(data)
                            // 拼接二级分类的下拉选项
                            var tpl = '<option>请选择二级分类...</option>' +
                                '{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                            var html = template.render(tpl, {list: data.result});
                            $('#secondType').html(html);
                        }
                    })
                })
                // 处理富文本
                CKEDITOR.replace('editor', {
                    toolbar: [
                        {
                            name: 'clipboard',
                            items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']
                        },
                        {name: 'editing', items: ['Scayt']},
                    ]
                });
                //同步富文本内容
                for(var instance in CKEDITOR.instances){
                    CKEDITOR.instances[instance].updateElement();
                }

            }
        }
    })
})