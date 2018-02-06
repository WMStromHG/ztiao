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
boxReg.box1 = [141, 82, 1, 0,0, "game_pic", 0]; //中心x,中心y,分数,跳过去偏移x,y,浮出图片, 高度微调参数
boxReg.box2 = [130, 76, 2, 0,0, "game_pic", 0];

function GameLoad_cav(){
    cav_game = new CanvasCreate($("#cav_game"));

    cav_game.ccv("game");
    cav_game.framerate = 10;

    cav_game.drawImg("box1");
    cav_game.drawImg("box2");

    cav_game.drawSprite("jump","",{
        framerate:70,
        mov: {
            ini: [0],
            run: [0,30,"ini"],
            back: { frames: cv.back(30), next:"ini"}
        }
    });
    Dom.p = cav_game.sprite["jump"];


    GameBoxSet(1, "b1","box1", 0, 0);
    GameBoxSet(2, "b2","box2", 1,  "d");
    GameBoxSet(3, "b3","box1", -1, "r");
    GameBoxSet(4, "b4","box2", -1, "d");
    GameBoxSet(5, "b5","box1", 1, "l");
    GameBoxSet(6, "b6","box2", 1, "l");
    GameBoxSet(7, "b7","box1", 1, "d");
    GameBoxSet(8, "b8","box2", -1, "d");
    GameBoxSet(9, "b9","box1", 1, "d");


    drawArr.push(cav_game.sprite["jump"]);

    cav_game.draw("game", drawArr);
    cav_game.show("game");

    GamePersonSet(1);
}

function GamePersonGet(id){
    var box = GameBoxs[id];
    var reg = boxReg["box"+id];
    // Dom.p.x = box.x - git.pw/2 - reg[0]/2;
    // Dom.p.y = box.y - git.ph/2 - reg[1]/2;
    return {x:(box.x - git.pw/2), y:(box.y - git.ph/2 - 65)};
}

function GamePersonSet(id){
    var box = GameBoxs[id];
    var reg = boxReg["box"+id];
    // Dom.p.x = box.x - git.pw/2 - reg[0]/2;
    // Dom.p.y = box.y - git.ph/2 - reg[1]/2;
    Dom.p.x = box.x - git.pw/2;
    Dom.p.y = box.y - git.ph/2 - 65;


    // cav_game.cc["game_b"+id].addChild(cav_game.sprite["jump"]);

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
        cav_game.img[nm+"_word"].y = cav_game.img[nm+"_word"].y-100;
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

    SceneMov.push(s);

}