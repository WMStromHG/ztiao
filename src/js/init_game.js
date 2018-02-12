var cav_game;
var drawArr = [];
var GameBoxs = {};
var SceneMov = [];


var git = {};
git.a = [200, 750];
git.x = 328;
git.y = 177;
git.pw = 300;
git.ph = 600;

var boxReg = {};
boxReg.box1 = [224, 155, 15, 0,0, "box1_word", 140,-140]; //中心x,中心y,分数,跳过去偏移x,y,浮出图片, 高度微调参数
boxReg.box2 = [240, 110, 3, 0,0, "box2_word",  170,-170];
boxReg.box3 = [265, 150, 5, 0,0, "box3_word",  170,-150];
boxReg.box4 = [227, 117, 3, 0,0, "box4_word",  170,-170];
boxReg.box5 = [230, 125, 3, 0,0, "box5_word",  170,-170];
boxReg.box6 = [245, 120, 3, 0,0, "box6_word",  170,-170];
boxReg.box7 = [250, 182, 3, 0,0, "box7_word",  170,-170];
boxReg.box8 = [222, 118, 3, 0,0, "box8_word",  130,-170];
boxReg.box9 = [265, 180, 10, 0,0, "box9_word",  170,-170];
boxReg.box10 = [250, 153, 3, 0,0, "box10_word",  130,-140];
boxReg.box11 = [250, 210, 3, 0,0, "box11_word",  170,-170];
boxReg.box12 = [218, 111, 20, 0,0, "box12_word",  170,-170];
boxReg.box13 = [231, 190, 0, 0,0, "", 0,0];
boxReg.box14 = [220, 120, 1, 0,0, "box_word",  190,-140];
boxReg.box15 = [228, 114, 1, 0,0, "box_word",  190,-140];
boxReg.box16 = [203, 108, 0, 0,0, "box_word",  190,-140];
boxReg.box17 = [230, 125, 1, 0,0, "box_word",  190,-140];
boxReg.box18 = [235, 170, 1, 0,0, "box_word",  190,-140];
boxReg.box19 = [203, 180, 1, 0,0, "box_word",  190,-140];
boxReg.box20 = [226, 120, 1, 0,0, "box_word",  190,-140];
boxReg.box21 = [228, 114, 1, 0,0, "box_word",  190,-140];
boxReg.box22 = [210, 115, 1, 0,0, "box_word",  190,-140];
boxReg.box23 = [185, 85, 0, 0,0, "", 0,0];
boxReg.box24 = [220, 120, 0, 0,0, "", 0,0];
boxReg.box25 = [240, 100, 0, 0,0, "", 0,0];
boxReg.box26 = [220, 115, 0, 0,0, "", 0,0];
boxReg.box27 = [230, 115, 0, 0,0, "", 0,0];
boxReg.box28 = [230, 115, 0, 0,0, "", 0,0];
boxReg.box29 = [230, 115, 0, 0,0, "", 0,0];
boxReg.box30 = [230, 115, 0, 0,0, "", 0,0];

function GameLoad_cav(){
    cav_game = new CanvasCreate($("#cav_game"));

    cav_game.ccv("game");
    cav_game.framerate = 10;

    cav_game.drawSprite("jump","",{
        framerate:35,
        mov: {
            ini2: [0],
            ini: [18],
            back: [0,17,"ini2"],
            run: [18,35,"ini"],

            back_to: [0,17,"to_ini"],
            run_to: [18,35,"to_ini2"],

            to_ini : [36,41,"ini"],
            to_ini2: { frames: [41,40,39,38,37,36], next:"ini2"}
        }
    });
    Dom.p = cav_game.sprite["jump"];

    cav_game.drawSprite("good","",{
        framerate:30,
        mov: {
            ini: [14],
            run: [0,13,"ini"]
        },
        conf:{
            x:-814, y:-160
        }
    });
    Dom.good = cav_game.sprite["good"];

    cav_game.drawSprite("press","",{
        framerate:30,
        mov: {
            ini: [25],
            run: [0,24]
        },
        conf:{
            x:-818, y:-165
        }
    });
    Dom.press = cav_game.sprite["press"];

    cav_game.ccv("person", "", "game");
    drawArr.push(cav_game.sprite["good"]);
    drawArr.push(cav_game.sprite["jump"]);
    drawArr.push(cav_game.sprite["press"]);

    cav_game.draw("person", drawArr);

    GameReSet();
    GamePersonSet(1);

    cav_game.show("game");

}

function GameReSet(){

    for(var i = 1; i<=20; i++){
        cav_game.cc["game"].removeChild(cav_game.cc["game_b"+i]);
        cav_game.cc["game_b"+i] = "";
        cav_game.img["b"+i] = "";
        cav_game.img["b"+i+"_word"] = "";
    }

    SceneMov = [];

    var ArrList=[1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    var Arrlist_box = getArrayItems(ArrList,19);

    GameBoxSet(1, "b1","box16", 0, 0);
    GameBoxSet(2, "b2","box"+Arrlist_box[1], 1,  "d");
    GameBoxSet(3, "b3","box"+Arrlist_box[2], -1, "r");
    GameBoxSet(4, "b4","box"+Arrlist_box[3], -1, "d");
    GameBoxSet(5, "b5","box"+Arrlist_box[4], 1, "l");
    GameBoxSet(6, "b6","box"+Arrlist_box[5], 1, "l");
    GameBoxSet(7, "b7","box"+Arrlist_box[6], 1, "d");
    GameBoxSet(8, "b8","box"+Arrlist_box[7], -1, "r");
    GameBoxSet(9, "b9","box"+Arrlist_box[8], -1, "d");
    GameBoxSet(10, "b10","box"+Arrlist_box[9], 1, "l");
    GameBoxSet(11, "b11","box"+Arrlist_box[10], 1, "d");
    GameBoxSet(12, "b12","box"+Arrlist_box[11], -1, "r");
    GameBoxSet(13, "b13","box"+Arrlist_box[12], -1, "d");
    GameBoxSet(14, "b14","box"+Arrlist_box[13], 1, "l");
    GameBoxSet(15, "b15","box"+Arrlist_box[14], 1, "l");
    GameBoxSet(16, "b16","box"+Arrlist_box[15], 1, "d");
    GameBoxSet(17, "b17","box"+Arrlist_box[16], -1, "r");
    GameBoxSet(18, "b18","box"+Arrlist_box[17], -1, "r");
    GameBoxSet(19, "b19","box"+Arrlist_box[18], -1, "d");

    GameBoxSet(20, "b20","box13", 1, "d");
}

function GamePersonGet(id){
    var box = GameBoxs[id];
    var reg = boxReg["box"+id];
    // Dom.p.x = box.x - git.pw/2 - reg[0]/2;
    // Dom.p.y = box.y - git.ph/2 - reg[1]/2;
    return {x:(box.x - git.pw/2), y:(box.y - git.ph/2 - 115)};
}

function GamePersonSet(id){

    cav_game.cc["game"].addChild(cav_game.cc["person"]);

    var box = GameBoxs[id];
    var reg = boxReg["box"+id];
    // Dom.p.x = box.x - git.pw/2 - reg[0]/2;
    // Dom.p.y = box.y - git.ph/2 - reg[1]/2;
    cav_game.cc["person"].x = box.x - git.pw/2;
    cav_game.cc["person"].y = box.y - git.ph/2 - 115;

}

function GameBoxSet(id, nm, img, b, s){
    var pa = {};
    pa.regX = boxReg[img][0];
    pa.regY = boxReg[img][1];

    if(id>1){
        var bx = GameBoxs[id-1].x+(b*git.x);
        var by = GameBoxs[id-1].y - git.y;
    }else{
        var bx = git.a[0];
        var by = git.a[1];
    }

    cav_game.ccv("game_"+nm, {x:bx, y:by}, "game");
    cav_game.drawImg(nm,"game_"+nm, pa, Loads.loaded[img]);

    if(id>2) cav_game.cc["game_"+nm].alpha = 0.001;

    //生成提示图片
    var pic = "";
    if(boxReg[img] && boxReg[img][5]) pic = boxReg[img][5];
    if(pic && Loads.loaded[pic]){
        cav_game.drawImg(nm+"_word","game_"+nm, pa, Loads.loaded[pic]);
        // cav_game.img[nm+"_word"].y = cav_game.img[nm+"_word"].y;
        cav_game.img[nm+"_word"].alpha = 0;
    }


    GameBoxs[id] = {};
    GameBoxs[id].div = cav_game.cc["game_"+nm];
    GameBoxs[id].box = cav_game.img[nm];
    GameBoxs[id].num = boxReg[img][2];
    GameBoxs[id].create = b;
    GameBoxs[id].x = bx;
    GameBoxs[id].y = by;
    GameBoxs[id].img = img;
    GameBoxs[id].word = cav_game.img[nm+"_word"];
    GameBoxs[id].reg = {x:boxReg[img][3], y:boxReg[img][4]};
    GameBoxs[id].word_xy = {x:boxReg[img][6], y:boxReg[img][7]};

    SceneMov.push(s);

}


//随机数组抽出
function getArrayItems(arr, num) {
    //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
    var temp_array = new Array();
    for (var index in arr) {
        temp_array.push(arr[index]);
    }
    //取出的数值项,保存在此数组
    var return_array = new Array();
    for (var i = 0; i<num; i++) {
        //判断如果数组还有可以取出的元素,以防下标越界
        if (temp_array.length>0) {
            //在数组中产生一个随机索引
            var arrIndex = Math.floor(Math.random()*temp_array.length);
            //将此随机索引的对应的数组元素值复制出来
            return_array[i] = temp_array[arrIndex];
            //然后删掉此索引的数组元素,这时候temp_array变为新的数组
            temp_array.splice(arrIndex, 1);
        } else {
            //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break;
        }
    }
    return return_array;
}


function GetRequest() {
    var url = location.search; //获取url中含"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }

    Dom.openid = theRequest['openid'];
    Dom.nickname = theRequest['nickname'];
    Dom.sex = theRequest['sex'];
    Dom.language = theRequest['language'];
    Dom.city = theRequest['city'];
    Dom.province = theRequest['province'];
    Dom.country = theRequest['country'];
    Dom.headimgurl = theRequest['headimgurl'];
    Dom.unionid = theRequest['unionid'];

    $("#_unable").html('<input id="openid" name="openid" value="'+Dom.openid+'" type="hidden"/>');

    //生成玩家信息
    $.ajax({
        type: "POST",
        url: "people.php",
        data: "openid="+Dom.openid+
            "&nickname="+Dom.nickname+
            "&sex="+Dom.sex+
            "&language="+Dom.language+
            "&city="+Dom.city+
            "&province="+Dom.province+
            "&country="+Dom.country+
            "&headimgurl="+Dom.headimgurl+
            "&unionid="+Dom.unionid,
        success: function(msg){
//            alert( msg );
        }
    });


    //向数据库调取所有玩家顺序
   $.ajax({
       type: "POST",
       data: "openid="+Dom.openid,
       url: "getlist.php",
       success: function(msg){
           if(msg=="err") {
               alert("openid不正确");
               return;
           }
           var json = eval('(' + msg + ')');

           var list = json.list;
           var html = "";
           for(var i in list){
               html+= '<div class="li">\n' +
                   '                <div class="i">'+(parseInt(i)+1)+'</div>\n' +
                   '                <div class="headimg"><img src="'+list[i].headimgurl+'" alt=""/></div>\n' +
                   '                <div class="nm">'+list[i].nickname+'</div>\n' +
                   '                <div class="score">'+list[i].score+'</div>\n' +
                   '            </div>';
           }
           $("#index_list .list_box").html(html);

           var my = json.my;
           var my_html = '<div class="i">'+my.num+'</div>\n' +
               '            <div class="headimg"><img src="'+my.headimgurl+'" alt=""/></div>\n' +
               '            <div class="nm">'+my.nickname+'</div>\n' +
               '            <div class="score">'+my.score+'</div>';
           $("#index_list .my").html(my_html);

       }
   });

    return theRequest;
}