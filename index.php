<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type">
    <meta content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <title>正泰跳一跳</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="target-densitydpi=device-dpi,width=700px,user-scalable=no">
    <script>
        var DEFAULT_WIDTH = 700,//页面的默认宽度
            ua=navigator.userAgent.toLowerCase(),//根据useragent的信息获取浏览器信息
            deviceWidth=window.screen.width,//设备的宽度
            devicePixelRatio=window.devicePixelRatio||1,//物理像素和设备独立像素的比例，默认为1
            targetDensitydpi;
        //Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
        if(ua.indexOf("android")!==-1&&parseFloat(ua.slice(ua.indexOf("android")+8))<4){
            targetDensitydpi=DEFAULT_WIDTH/deviceWidth*devicePixelRatio*160;
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'target-densitydpi=' + targetDensitydpi + ',width=device-width,user-scalable=no');
        }
    </script>

    <link rel="stylesheet" href="./src/css/style.css" />
    <link rel="stylesheet" href="./src/css/index.css" />
    <link rel="stylesheet" href="./src/css/game.css" />

</head>

<body>
<div id="_unable"></div>
<div id="_reset">
    <div class="score">13</div>
    <img class="again" src="img/game/again.png" alt=""/>
    <div class="top">历史最高分：65</div>
</div>

<div id="app">

    <section class="cc" id="Loader">
        <div class="main">
            <div class="line">
                <div class="lineX"></div>
            </div>
            <img src="img/loader.gif" alt="">
            <div class="word"></div>
        </div>
    </section>

    <section class="cc " id="Index">
        <div class="main">
            <img src="img/home.jpg" alt=""/>
        </div>
    </section>

    <section class="cc " id="Game">
        <div class="bg p all"></div>
        <div class="main">
            <canvas id="cav_game" width="700" height="1140"></canvas>
            <div id="_btn"></div>
        </div>
    </section>

</div>


<script src="./lib/jquery-2.1.4.min.js"></script>
<script src="./lib/jquery.mobile-1.4.5.min.js"></script>
<script src="./lib/createjs/createjs-2015.11.26.min.js"></script>
<script src="./lib/velocity/velocity.js"></script>
<script src="./lib/libs.js"></script>
<script src="./lib/libs_canvas.js"></script>
<script src="./src/js/resize.js"></script>

<script src="./src/js/sprite_game.js"></script>

<script src="./src/js/init.js"></script>
<script src="./src/js/init_game.js"></script>

<script src="./src/js/index.js"></script>
<script src="./src/js/game.js"></script>

<script>
    $("body").on('touchmove',function(event){ event.preventDefault(); },false);

    $(window).load(function(){
        $("iframe").hide();
        $("#ad_colse_container").remove();
        $("body > *").each(function(){
            if(!$(this).hasClass("ui-page")) $(this).hide();
        });

       setTimeout(function(){
           // if(!Dom.ad_bad) window.location.reload();
       },5000);

        loader();
    });


</script>

<!--<script src="./wx/jweixin-1.0.0.js"></script>-->
<?php
//require_once "wx/jssdk.php";
//$jssdk = new JSSDK("wx2b5e5b328d9c762c", "0a28b1c3e79cb65a0bdeda110b7d4cbe");
//$signPackage = $jssdk->GetSignPackage();
?>

<script>
    /*
     * 注意：
     * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
     * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
     * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
     *
     * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
     * 邮箱地址：weixin-open@qq.com
     * 邮件主题：【微信JS-SDK反馈】具体问题
     * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
     */
    //wx.config({
    //    debug: false,
    //    appId: '< ?php //echo $signPackage["appId"];?>//',
    //    timestamp: < ?php //echo $signPackage["timestamp"];?>//,
    //    nonceStr: '< ?php //echo $signPackage["nonceStr"];?>//',
    //    signature: '< ?php //echo $signPackage["signature"];?>//',
    //    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    //});
    //
    //wx.ready(function () {
    //    Dom.ad_bad = 1;
    //    loader();
    //
    //    wx.onMenuShareAppMessage({
    //        title: '只有1%的高智商才能通关', // 分享标题
    //        desc: 'J.D.V 以梦为马 · 诗酒趁年华', // 分享描述
    //        link: 'http://mk1.jdv.cc/index.php', // 分享链接
    //        imgUrl: 'http://mk1.jdv.cc/wx/logo.png', // 分享图标
    //        type: 'link', // 分享类型,music、video或link，不填默认为link
    //        dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
    //    });
    //
    //    wx.onMenuShareTimeline({
    //        title: '只有1%的高智商才能通关', // 分享标题
    //        link:'http://mk1.jdv.cc/index.php',
    //        imgUrl: 'http://mk1.jdv.cc/wx/logo.png' // 分享图标
    //    });
    //});
</script>
<!--<script src="https://s19.cnzz.com/z_stat.php?id=1271414784&web_id=1271414784" language="JavaScript"></script>-->
</body>
</html>
