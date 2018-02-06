<?php
$cc = new cc();
$g = $cc->get();

//接口与回调
$appID = "******";
$appsecret = "******";
$REDIRECT_URI = urlencode("http://demo.maitianer.com/h5/akx/index.php");

if(!$g->code){

    if(!$g->id ) die();

    $goUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?";
    $goUrl.= "appid={$appID}&redirect_uri={$REDIRECT_URI}&response_type=code&scope=snsapi_base&state=".$g->id."#wechat_redirect";
    header("Location: {$goUrl}");
    //echo "<a href='{$goUrl}'>{$goUrl}</a>";
    exit;
}

$code = $g->code;
$id = $g->state;
if(!$id || !$code) die();

$url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid={$appID}&secret={$appsecret}&code={$code}&grant_type=authorization_code";
$json = $cc->curl_get($url);
$json = json_decode($json, true);
$openid = $json['openid'];

if($openid){
    $cc->where = "openid='{$openid}'";
    $rs = $cc->opsql("user");

    if(!$rs){
        $cc->sqli("openid",$openid);
        $cc->sqli("dates",$cc->now());
        $cc->opsql("user", "add");
    }

    $cc->where = "id='{$id}'";
    $rs = $cc->opsql("stage");

}else header("Location: http://demo.maitianer.com/h5/akx/index.php?id=".$id);
?>