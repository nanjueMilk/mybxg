define(['jquery', 'template'], function ($, template) {
    //  ���ýӿڻ�ȡ���еĽ�ʦ����
    $.ajax({
        type: 'get',
        url: '/api/teacher',
        success: function (data) {
            //console.log(data);
            //�������ݣ���Ⱦҳ��
            var html = template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
        }

    })
});
