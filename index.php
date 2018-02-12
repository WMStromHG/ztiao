<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type">
    <meta content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <title>正泰迎新春 好运跳不停</title>
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
<video id="MP4" src="mp4/video.mp4"></video>
<div id="_unable"></div>
<div id="_reset">
    <div class="score">0</div>
    <div class="share"></div>
    <img class="again" src="img/game/again.png" alt=""/>
    <div class="list_btn"></div>
</div>
<div id="_share"></div>
<div id="index_list">
    <div class="list">
        <div class="list_box">
<!--            <div class="li">-->
<!--                <div class="i">1</div>-->
<!--                <div class="headimg"><img src="img/index/1.jpg" alt=""/></div>-->
<!--                <div class="nm">蜡笔小新</div>-->
<!--                <div class="score">345</div>-->
<!--            </div>-->
        </div>
        <div class="my">
<!--            <div class="i">100</div>-->
<!--            <div class="headimg"><img src="img/index/1.jpg" alt=""/></div>-->
<!--            <div class="nm">我的排名</div>-->
<!--            <div class="score">345</div>-->
        </div>
    </div>
    <img class="exit" src="img/index/exit.png" alt=""/>
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

    <section class="cc" id="Index">
        <img class="bg p all" src="img/index/bg.jpg" alt=""/>
        <div class="main">
            <img src="img/index/home.png" alt=""/>
            <div class="start"></div>
            <div class="list_btn"></div>
        </div>
    </section>

<!--    <section class="cc" id="Video">-->
<!--        <video class="video" id="myvideo" src="mp4/video.mp4" poster="img/index/bg.jpg"-->
<!--               preload="auto" webkit-playsinline="true" playsinline="" x-webkit-airplay="allow"-->
<!--               x5-video-player-type="h5" x5-video-player-fullscreen="true" style="object-fit: fill"-->
<!--               width="700px" height="1140px"></video>-->
<!--    </section>-->

    <section class="cc" id="Game">
        <div class="bg p all"></div>
        <div class="main">
            <div id="score">0</div>
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

        // Dom.ad_bad = 1;
        GetRequest();
        loader();
    });


</script>

<script src="./wx/jweixin-1.0.0.js"></script>
<?php
require_once "wx/jssdk.php";
$jssdk = new JSSDK("wx65686ceae017c3db", "506a2b826046895986055a2d1619cc11");
$signPackage = $jssdk->GetSignPackage();
?>

<script>

//    document.addEventListener("WeixinJSBridgeReady", function func() {
//
//
//        var myvideo=document.getElementById("myvideo");
//
//
//        $('#video').attr({
//            'width': window.innerWidth + 'px',
//            'height': window.innerHeight + 'px'
//        });
//
//        myvideo.addEventListener("ended",function () {
//            myvideo.pause();
////            $(".video").hide(); // 隐藏视频
//            //Room.Loader.ppt2(); // 开始跳到下一页
//
//        },false);
//    }, false);
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
    wx.config({
       debug: false,
       appId: '<?php echo $signPackage["appId"];?>',
       timestamp: <?php echo $signPackage["timestamp"];?>,
       nonceStr: '<?php echo $signPackage["nonceStr"];?>',
       signature: '<?php echo $signPackage["signature"];?>',
       jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });

    wx.ready(function () {

       wx.onMenuShareAppMessage({
           title: '正泰迎新春 好运跳不停', // 分享标题
           desc: '正泰迎新春 好运跳不停！', // 分享描述
           link:'http://m.chint.com/minisite/c-world/data/jump/wx_login/demo.php', // 分享链接
           imgUrl: 'http://m.chint.com/minisite/c-world/data/jump/wx/logo.png', // 分享图标
           type: 'link', // 分享类型,music、video或link，不填默认为link
           dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
       });

       wx.onMenuShareTimeline({
           title: '正泰迎新春 好运跳不停', // 分享标题
           link:'http://m.chint.com/minisite/c-world/data/jump/wx_login/demo.php', // 分享链接
           imgUrl: 'http://m.chint.com/minisite/c-world/data/jump/wx/logo.png' // 分享图标
       });
    });
</script>

</body>
</html>
