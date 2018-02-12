<?php
//基本
header("Content-type: text/html; charset=utf-8");
error_reporting(E_ERROR | E_WARNING | E_PARSE);
date_default_timezone_set("Asia/Shanghai");

//版本号
define('Version', '1.0.2');
define('VersionDate', '2014-10-26');
//1. preg_match 替代ereg (ccv.php)

//数据库
define("DbHost", "127.0.0.1:3307");
define("DbNm",   "chint_jump");
define("DbRoot", "chint_jump");
define("DbPsw",  "");
define("DbPost", "3306");
define("DbPre",  "zt_");


//微信
//define("WxToken", "mv3c");
//define("WxAppId", "wx3c3cfd2765774ff4");
//define("WxAppSecret", "72e804e196ae7ad57769ae20d27911ec");
//define("WxMenu", 0);


//地址解析
$U = explode('.php',$_SERVER['PHP_SELF']);
$Ui= explode('/',$U[0]);
$U = $U[1];//路由
$C = end($Ui);//入口名
array_pop($Ui);
$D = implode('/',$Ui);//子目录

define('D', $D);//子目录
define('C', $C);//入口名

//缓存//调试
if($Debug) {
	define("Debug", 1);
	define("Cache", 0);
}else{
	define("Debug", 0);
	define("Cache", 1);
}
if($Cache) define("CacheNm", '_'.$Cache);
else define("CacheNm", '');
?>