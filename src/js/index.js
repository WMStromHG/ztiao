Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Game";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};


Room.Index = {};
Room.Index.dom = function(){
    Dom.game = {};
    $("#Index .start").tap(function(e){
        cc.tap(e);
        mp3_play("bg", 1);
        Room.Index.ppt();
    });

    $("#Index .rules").tap(function(e){
        cc.tap(e);
        Room.Index.ppt1();
    });

    $("#Read").tap(function(e){
        cc.tap(e);
        Room.Index.ppt2();
    });

};

Room.Index.coming = function(){
    $("#Index .topWheel").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 4500, loop: true});
    $("#Index .bottomWheel").velocity({ rotateZ:["360deg","0deg"] }, { easing:"linear", duration: 4500, loop: true});
};

Room.Index.go_after = function () {
    $("#Index .topWheel").velocity("stop");
    $("#Index .bottomWheel").velocity("stop");
};

Room.Index.ppt = function(){
    var start = "GameLoad1";
    cc.ppt(["Index", start] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000, complete:function(){
            after.go();
            GameLoad1();
        }});
    })
};

Room.Index.ppt1 = function () {
    Dom._unable.show();
    cc.ppt(["Index","Read"] , function ( after , callback ) {
        cc.m["Index"].velocity({opacity:0},{duration:500,display:"none"});
        cc.m["Read"].css({"left":-700}).show().velocity({left:0},{duration:500, complete:function () {
            after.go();
            Dom._unable.hide();
        }});
    })
};

Room.Index.ppt2 = function () {
    Dom._unable.show();
    cc.ppt(["Read","Index"] , function ( after , callback ) {
        cc.m["Read"].velocity({left:-700},{duration:400,display:"none", complete:function(){
            Dom._unable.hide();
        }});
        cc.m["Index"].css({"opacaity":0}).show().velocity({opacity:1});
    })
};
