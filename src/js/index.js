Room.Loader = {};
Room.Loader.ppt = function(){
    var Start = "Index";
    cc.ppt(["Loader", Start] , function(after , callback){
        cc.m["Loader"].velocity({ opacity: 0}, { duration: 1000, display: "none" });
        cc.m[Start].css({"opacity": 0}).show().velocity({ opacity: 1}, { duration: 1000});
    })
};


Room.Index = {};
Room.Index.dom = function(){
    Dom.game = {};
    $("#Index .start").tap(function(e){
        Room.Index.ppt();
    });
    $(".list_btn").click(function(e){
        $("#index_list").fadeIn(500);
    });
    $("#index_list .exit").click(function(e){
        $("#index_list").fadeOut(500);
    });

    $("#_reset .share").click(function(e){
        $("#_share").fadeIn(500);
    });
    $("#_share").click(function(e){
        $("#_share").fadeOut(500);
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
