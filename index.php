<?php
    //���·�ɣ�����url�Ĳ�ͬ��Ӧ��ͬ��ҳ�棩
    header('content-type:text/html; charset=utf-8');
    //include('./views/main/index.html');
    // ͨ��url�����û�������ĸ�ҳ��

//    //Ĭ��Ŀ¼����
//    $dir = 'main';
//    //Ĭ���ļ�����
//    $filename = 'index';
//
//    //����·��
//    if(array_key_exists('PATH_INFO',$_SERVER)){
//        //PATH_INFO���Դ���
//        $path = $_SERVER['PATH_INFO'];
//        //ȥ����һ��б��
//        $str = substr($path,1); //main/index
//        //�ַ����ָ��js�е�split��������
//        $ret = explode('/',$str);
//        if(count($ret) == 2){
//            //·��������
//            $dir = $ret[0]; //����Ŀ¼
//            $filename = $ret[1]; //�����ļ�����
//        }else{
//            //�������ȫ����ת����¼ҳ��
//            $filename = 'login';
//        }
//    }
    //$path = $_SERVER['PATH_INFO'];
    //echo $path;
//    include('./views/'.$dir.'/'.filename.'.html');
    $dir = 'main';
	$filename = 'index';
	if(array_key_exists('PATH_INFO',$_SERVER)){
		$path = $_SERVER['PATH_INFO'];
		$str = substr($path,1);
		$ret = (explode('/',$str));
		if(count($ret)== 2){
			$dir = $ret[0];
			$filename = $ret[1];
		}else{
			$filename = 'login';
		}

	}
	include('./views/'.$dir.'/'.$filename.'.html');
?>

