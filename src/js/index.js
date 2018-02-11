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
    $("#Index").tap(function(e){
        Room.Index.ppt();
    });

};

Room.Index.coming = function(){

};

Room.Index.go_after = function () {

};

Room.Index.ppt = function(){
    var start = "Game";
    cc.ppt(["Index", start] , function(after , callback){
        cc.m["Index"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000 });
    })
};
