<?php
    //后端路由（根据url的不同响应不同的页面）
    header('content-type:text/html; charset=utf-8');
    //include('./views/main/index.html');
    // 通过url区分用户想访问哪个页面

//    //默认目录名称
//    $dir = 'main';
//    //默认文件名称
//    $filename = 'index';
//
//    //处理路由
//    if(array_key_exists('PATH_INFO',$_SERVER)){
//        //PATH_INFO属性存在
//        $path = $_SERVER['PATH_INFO'];
//        //去掉第一个斜杠
//        $str = substr($path,1); //main/index
//        //字符串分割和js中的split方法很像
//        $ret = explode('/',$str);
//        if(count($ret) == 2){
//            //路由有两层
//            $dir = $ret[0]; //覆盖目录
//            $filename = $ret[1]; //覆盖文件名称
//        }else{
//            //其他情况全部跳转到登录页面
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

