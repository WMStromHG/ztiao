<?php

require('config.php');
require('cc.php');
$cc = new cc;

$g = $cc->get();

$cc->where = 'openid = "'.$g->openid.'"';
$rsc = $cc->opsql('people','rsc');
$i = 0;
foreach ($rsc as $key => $rs) {
    $i++;
}
if($i == 0){
    $g->openid = utf8_decode($g->openid);
    $ni = $g->nickname;
    $g->nickname = utf8_decode($g->nickname);
    echo $ni.' '.$g->nickname;
    $g->sex = utf8_decode($g->sex);
    $g->language = utf8_decode($g->language);
    $g->city = utf8_decode($g->city);
    $g->province = utf8_decode($g->province);
    $g->country = utf8_decode($g->country);
    $g->headimgurl = utf8_decode($g->headimgurl);
    $g->unionid = utf8_decode($g->unionid);

    $cc->sqli("openid",$g->openid);
    $cc->sqli("nickname",$g->nickname);
    $cc->sqli("sex",$g->sex);
    $cc->sqli("language",$g->language);
    $cc->sqli("city",$g->city);
    $cc->sqli("province",$g->province);
    $cc->sqli("country",$g->country);
    $cc->sqli("headimgurl",$g->headimgurl);
    $cc->sqli("unionid",$g->unionid);
    $cc->sqli("score",0,'nums');
    $cc->sqli("date",$cc->now());
    $cc->opsql("people", 'add');
}