Room.Game = {};
Room.Game.dom = function(){
    Dom.lv = 0;
    Dom.Hand = "";
    Dom.HTime = 0;
    Dom.Time1 = 3;
    Dom.Time2 = 15;

    $("#_btn").on('touchstart',function(e){
        cc.tap(e);
        if(Dom.HTime) return;
        Room.Game.hold();
        Dom.HTime++;
        Dom.Hand = setInterval(function(){
            Dom.HTime++
        }, 100);
    });

    $("#_btn").on('touchend',function(e){
        cc.tap(e);
        Dom.lv++;

        if(!Dom.HTime) return;
        clearInterval(Dom.Hand);
        Dom.Hand = "";

        if(Dom.HTime<Dom.Time1){
            alert("跳太近");
        }else if(Dom.Time1<Dom.HTime && Dom.HTime<Dom.Time2) {
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

    Dom.px = cav_game.sprite["jump"].x;
    Dom.py = cav_game.sprite["jump"].y;
    cav_game.cc["game_b"+id].addChild(cav_game.sprite["jump"]);
    Dom.p.x = -150;
    Dom.p.y = -366;

    var xx = 0;
    var img = GameBoxs[id].img;
    if(boxReg[img] && boxReg[img][6]) xx = boxReg[img][6];

    cvtw.get(GameBoxs[id].div).to({scaleY:sy, y:GameBoxs[id].y+25+xx }, 700);
};

Room.Game.press = function(){

    cav_game.cc["game"].addChild(cav_game.sprite["jump"]);
    Dom.p.x = Dom.px;
    Dom.p.y = Dom.py;

    cvtw.removeTweens(GameBoxs[Dom.lv].div);
    cvtw.get(GameBoxs[Dom.lv].div).to({scaleY:1,  y:GameBoxs[Dom.lv].y }, 85);

    Room.Game.jump1(function(){
        Room.Game.scene_mov();
        Room.Game.box_create();
    });

};


Room.Game.jump1 = function(fn){

    var id = Dom.lv+1;

    if(GameBoxs[id].create == 1) Dom.p.gotoAndPlay("run");
    if(GameBoxs[id].create == -1) Dom.p.gotoAndPlay("back");
    var go = GamePersonGet(id);
    cvtw.get(Dom.p).to({x:go.x, y:go.y }, 400).call(function(){

        var word = GameBoxs[id].word;
        var y = word.y;
        word.y = y+100;
        cvtw.get(word).to({y:y, alpha:1 }, 400).wait(500).to({y:y-30, alpha:0 }, 300)

    });



    setTimeout(fn, 500);
};
Room.Game.jump2 = function(){};
Room.Game.jump3 = function(){
    if(GameBoxs[Dom.lv+1].create == 1)  {
        Dom.p.gotoAndPlay("run");
        cvtw.get(Dom.p).to({x:1000, y:-450 }, 500);
    }
    if(GameBoxs[Dom.lv+1].create == -1) {
        Dom.p.gotoAndPlay("back");
        cvtw.get(Dom.p).to({x:-500, y:-450 }, 500);
    }
};

Room.Game.scene_mov = function(){
    var mov = SceneMov[Dom.lv];

    if(mov=="d"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y) }, 400);
    }else if(mov=="l"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y), x: (cav_game.cc["game"].x - git.x) }, 600);
    }else if(mov=="r"){
        cvtw.get(cav_game.cc["game"]).to({y: (cav_game.cc["game"].y + git.y), x: (cav_game.cc["game"].x + git.x) }, 600);
    }

};

Room.Game.box_create = function(){

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