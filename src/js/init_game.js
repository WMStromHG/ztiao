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
boxReg.box1 = [224, 125, 1, 40,22, "box1_word", 140,-140]; //中心x,中心y,分数,跳过去偏移x,y,浮出图片, 高度微调参数
boxReg.box2 = [229, 90, 1, 0,0, "box2_word",  170,-170];
boxReg.box3 = [233, 116, 1, 0,0, "box3_word",  170,-150];
boxReg.box4 = [227, 87, 1, 0,0, "box4_word",  170,-170];
boxReg.box5 = [220, 85, 1, 0,0, "box5_word",  170,-170];
boxReg.box6 = [227, 90, 1, 0,0, "box6_word",  170,-170];
boxReg.box7 = [224, 122, 1, 0,0, "box7_word",  170,-170];
boxReg.box8 = [222, 88, 1, 0,0, "box8_word",  130,-170];
boxReg.box9 = [228, 103, 1, 0,0, "box9_word",  170,-170];
boxReg.box10 = [223, 123, 1, 0,0, "box10_word",  130,-140];
boxReg.box11 = [223, 171, 1, 0,0, "box11_word",  170,-170];
boxReg.box12 = [218, 81, 1, 0,0, "box12_word",  170,-170];
boxReg.box13 = [231, 162, 1, 0,0, "", 0,0];
boxReg.box14 = [226, 90, 1, 0,0, "box_word",  190,-140];
boxReg.box15 = [228, 84, 1, 0,0, "box_word",  190,-140];
boxReg.box16 = [203, 78, 1, 0,0, "box_word",  190,-140];

function GameLoad_cav(){
    cav_game = new CanvasCreate($("#cav_game"));

    cav_game.ccv("game");
    cav_game.framerate = 10;

    cav_game.drawSprite("jump","",{
        framerate:70,
        mov: {
            ini: [0],
            run: [0,30,"ini"],
            back: { frames: cv.back(30), next:"ini"}
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
            x:-818, y:-160
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
            x:-818, y:-175
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

    var ArrList=[1,2,3,4,5,6,7,8,9,10,11,12,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,16,16,16,16];

    var Arrlist_box = getArrayItems(ArrList,19);

    console.log(Arrlist_box);

    GameBoxSet(1, "b1","box15", 0, 0);
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
    return {x:(box.x - git.pw/2), y:(box.y - git.ph/2 - 80)};
}

function GamePersonSet(id){

    cav_game.cc["game"].addChild(cav_game.cc["person"]);

    var box = GameBoxs[id];
    var reg = boxReg["box"+id];
    // Dom.p.x = box.x - git.pw/2 - reg[0]/2;
    // Dom.p.y = box.y - git.ph/2 - reg[1]/2;
    cav_game.cc["person"].x = box.x - git.pw/2;
    cav_game.cc["person"].y = box.y - git.ph/2 - 80;

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
    GameBoxs[id].y= by;
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