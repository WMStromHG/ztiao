<?php

require('config.php');
require('cc.php');
$cc = new cc;

$g = $cc->get();

$cc->where = 'openid = "'.$g->openid.'"';
$rsc = $cc->opsql('people','rsc');
$score = 0;
foreach ($rsc as $key => $rs) {
    $score = $rs['score'];
}

if($g->score > $score){
    $cc->where = 'openid = "'.$g->openid.'"';

    $cc->sqli("score",$g->score,'num');
    $cc->sqli("date",$cc->now());
    $cc->opsql("people", 'edit');
}