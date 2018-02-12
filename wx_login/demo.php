<?php
require_once 'lib/signature.class.php';

ob_clean();

$config = array(
    'key'   =>  'RJUkMogHnpk9hA0PO5LYjNqEgW9Yj2UY',
    'redirect_uri'  =>  'http://m.chint.com/minisite/c-world/data/jump'
);

// 实例化签名类
$signature = new Signature($config);

// 生成签名
$sign = $signature->getSign();

$config['signature'] = $sign;

$requestUrl = 'http://media.chint.com/api/wx_login?' . http_build_query($config);

//echo(http_build_query($config));
//exit;
header('location: ' . $requestUrl);
