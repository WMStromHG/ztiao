Room.Game = {};
Room.Game.dom = function(){
    Dom.lv = 0;
    Dom.score = 0;
    Dom.Hand = "";
    Dom.HTime = 0;
    Dom.Time1 = 6;
    Dom.Time2 = 8;
    Dom.video = $("#MP4");
    Dom.Video = document.getElementById("MP4");

    $("#_btn").on('touchstart',function(e){
        mp3_play("scale_intro");
        setTimeout(mp3_play("scale_loop",1),2000);


        cc.tap(e);
        if(Dom.HTime) return;
        Room.Game.hold();
        Dom.HTime++;
        Dom.Hand = setInterval(function(){
            Dom.HTime++;
            if(Dom.HTime >= 30){
                $("#_btn").touchend();
            }
        }, 100);
    });

    $("#_btn").on('touchend',function(e){
        mp3_stop("scale_intro");
        mp3_stop("scale_loop");

        //遮罩出现
        Dom._unable.show();

        cc.tap(e);
        Dom.lv++;

        Dom.press.gotoAndPlay("ini");

        if(!Dom.HTime) return;
        clearInterval(Dom.Hand);
        Dom.Hand = "";

        if(Dom.HTime<Dom.Time1){
            Room.Game.jump2();
        }else if(Dom.Time1<=Dom.HTime && Dom.HTime<=Dom.Time2) {
            Room.Game.press()
        }else if(Dom.HTime>Dom.Time2){
            Room.Game.jump3();
        }
        Dom.HTime = 0;
    });
};

Room.Game.hold = function(){
    if(Dom.HTime) return;
    var sy = 0.85;

    var id = Dom.lv+1;

    Dom.px = cav_game.cc["person"].x;
    Dom.py = cav_game.cc["person"].y;
    cav_game.cc["game_b"+id].addChild(cav_game.cc["person"]);
    cav_game.cc["person"].x = -150+GameBoxs[id].reg.x;
    cav_game.cc["person"].y = -415+GameBoxs[id].reg.y;

    Dom.press.gotoAndPlay("run");
    cvtw.get(GameBoxs[id].div).to({scaleY:sy, y:GameBoxs[id].y+25 }, 700);
};

Room.Game.press = function(){
    cav_game.cc["game"].addChild(cav_game.cc["person"]);
    cav_game.cc["person"].x = Dom.px;
    cav_game.cc["person"].y = Dom.py;

    Room.Game.box_re();

    setTimeout(function(){
        mp3_play("combo");
    },400);


    if(Dom.lv == 19){
        Room.Game.jump1(function(){
            Room.Game.box_re();

            Dom.video.show();
            Dom.Video.play(0);
            Dom.Video.addEventListener("ended",function(){
                Room.Game.gameover();
            });
        });
    }else{
        //箱子落下
        Room.Game.jump1(function(){
            Room.Game.scene_mov();
            Room.Game.box_create();
        });
    }
};


Room.Game.jump1 = function(fn){
    var id = Dom.lv+1;

    if(id==20) {
        Dom.p.gotoAndPlay("run");
    }else{
        if(GameBoxs[id].create == 1) {
            if(GameBoxs[id+1].create == 1) Dom.p.gotoAndPlay("run");
            if(GameBoxs[id+1].create == -1) Dom.p.gotoAndPlay("run_to");
        }
        if(GameBoxs[id].create == -1) {
            if(GameBoxs[id+1].create == -1) Dom.p.gotoAndPlay("back");
            if(GameBoxs[id+1].create == 1) Dom.p.gotoAndPlay("back_to");
        }
    }

    var go = GamePersonGet(id);
    cvtw.get(cav_game.cc["person"]).to({x:go.x+GameBoxs[id].reg.x, y:go.y+GameBoxs[id].reg.y }, 400).call(function(){
        Dom.good.gotoAndPlay("run");
        var word = GameBoxs[id].word;
        var x = word.x+GameBoxs[id].word_xy.x;
        word.x = x;
        var y = word.y+GameBoxs[id].word_xy.y;
        word.y = y+50;
        cvtw.get(word).to({y:y, alpha:1 }, 400).wait(500).to({y:y-30, alpha:0 }, 2000)

    });

    setTimeout(fn, 500);
};
Room.Game.jump2 = function(){
    Room.Game.box_re();
    if(GameBoxs[Dom.lv+1].create == 1)  {
        Dom.p.gotoAndPlay("run");
        cvtw.get(cav_game.cc["person"]).to({x:50, y:-400 }, 500);
    }
    if(GameBoxs[Dom.lv+1].create == -1) {
        Dom.p.gotoAndPlay("back");
        cvtw.get(cav_game.cc["person"]).to({x:-350, y:-400 }, 500);
    }
    Room.Game.gameover();
};
Room.Game.jump3 = function(){
    Room.Game.box_re();
    if(GameBoxs[Dom.lv+1].create == 1)  {
        Dom.p.gotoAndPlay("run");
        cvtw.get(cav_game.cc["person"]).to({x:500, y:-1000 }, 500);
    }
    if(GameBoxs[Dom.lv+1].create == -1) {
        Dom.p.gotoAndPlay("back");
        cvtw.get(cav_game.cc["person"]).to({x:-800, y:-1000 }, 500);
    }
    Room.Game.gameover();
};

//整体移动
Room.Game.scene_mov = function(){
    var mov = SceneMov[Dom.lv];

    //d down向下 l left向左 r right向右
    if(mov=="d"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y) }, 400);
    }else if(mov=="l"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y), x: (cav_game.cc["game"].x - git.x) }, 600);
    }else if(mov=="r"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y), x: (cav_game.cc["game"].x + git.x) }, 600);
    }

    //遮罩消失
    setTimeout(function(){
        Dom._unable.hide();
    },600);
};

//箱子落下
Room.Game.box_create = function(){

    Dom.score += GameBoxs[Dom.lv+1].num;
    $("#score").html(Dom.score);

    var id = Dom.lv+2;
    var my = GameBoxs[id].y;
    GameBoxs[id].div.y =  my-150;

    cvtw.get(GameBoxs[id].div).to({alpha: 1}, 70)
        .to({y: my}, 150)
        .to({scaleY: 0.85, y: my+30}, 20)
        .to({scaleY: 1, y: my-45}, 150)
        .to({y: my-15}, 50)
        .to({y: my}, 20);
};

//箱子挤压恢复
Room.Game.box_re = function(){
    cvtw.removeTweens(GameBoxs[Dom.lv].div);
    cvtw.get(GameBoxs[Dom.lv].div).to({scaleY:1,  y:GameBoxs[Dom.lv].y }, 85);
};

//game over
Room.Game.gameover = function(){
    setTimeout(function(){
        Dom._unable.hide();
        Dom._reset.show();

        var openid = $("#openid").val();

        $.ajax({
            type: "POST",
            url: "score.php",
            data: "openid="+openid+
                "&score="+Dom.score,
            success: function(msg){
//            alert( "Data Saved: " + msg );
            }
        });

        $("#_reset .score").html(Dom.score);
    },700);
};

//game reset
$("#_reset .again").click(function(){
    Dom._reset.hide();
    Dom.video.hide();

    Dom.score = 0;
    $("#score").html("0");

    cav_game.cc["game"].y = 0;
    cav_game.cc["game"].x = 0;
    Dom.p.gotoAndPlay("ini");

    for(var i in GameBoxs){
        cvtw.removeTweens(GameBoxs[i].div);

//        重置弹出话语框位置
//         GameBoxs[i].word.x = 0;
//         GameBoxs[i].word.y = 0;

        GameBoxs[i].div.scaleY = 1;
        if(i>2) GameBoxs[i].div.alpha = 0;
    }

    Dom.lv = 0;
    GameReSet();
    GamePersonSet(1);

//    location.reload();
});