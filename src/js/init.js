function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();

    Dom.loadWord = $("#Loader .word");
    Dom.loadLine = $("#Loader .lineX");

    Loads.loads("bg",  "img/game/", "bg.png");

    Loads.loads("box1",  "img/game/", "box1.png");
    Loads.loads("box2",  "img/game/", "box2.png");

    Loads.loads("jump",  "img/game/", "jump.png");

    Loads.loads("game_pic",  "img/game/", "pic.png");

    Loads.loads("mp3_press",  "mp3/", "press.mp3");
    Loads.loads("mp3_land",  "mp3/", "land.mp3");

    Loads.progress = function(e){
        var i = parseInt(e.loaded*100);
        if(i>100) i=100;

        Dom.loadWord.html(i+"%");
        Dom.loadLine.css("top", 155-(e.loaded*155));
    };

    Loads.complete = function(){
        $("#Game>.bg").html(Loads.get("bg"));

        // $("#Index .pic").html(Loads.get("index_pic"));

        GameLoad_cav();

        setTimeout(Room.Loader.ppt, 300);
    };
    Loads.loading();
}