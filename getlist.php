<?php

require('config.php');
require('cc.php');
$cc = new cc;

$g = $cc->get();
if(!$g->openid) die("err");

$json = '{"list":[';

$cc->top = 10;
$cc->order = "score@, id";
$cc->field = "id,nickname,headimgurl,score";
$rsc = $cc->opsql('people','rsc');

$list = [];
while($rs = $cc->rs($rsc)){
    $list[]= '{"nickname":"'.$rs["nickname"].'" , "headimgurl":"'.$rs["headimgurl"].'" , "score":"'.$rs["score"].'"}';
}
$json.= implode(",", $list);
$json.= '],';

$cc->where = "openid='".$g->openid."'";
$cc->field = "id,nickname,headimgurl,score";
$my = $cc->opsql('people');

$cc->order = "score@, id";
$cc->where = "score>='".$my["score"]."'";
$num = $cc->rsnum("people");

$json.= '"my":{"num":"'.$num.'","nickname":"'.$my["nickname"].'" , "headimgurl":"'.$my["headimgurl"].'" , "score":"'.$my["score"].'"}';

$json.= '}';

echo $json;

$cc->cls();