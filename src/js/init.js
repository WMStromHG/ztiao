function loader() {
    libs.create();
    libs.setTicker(25);
    libs.iniDom();

    Dom.loadWord = $("#Loader .word");
    Dom.loadLine = $("#Loader .lineX");

    Loads.loads("bg",  "img/game/", "bg.png");

    Loads.loads("box1",  "img/game/", "box1.png");
    Loads.loads("box2",  "img/game/", "box2.png");
    Loads.loads("box3",  "img/game/", "box3.png");
    Loads.loads("box4",  "img/game/", "box4.png");
    Loads.loads("box5",  "img/game/", "box5.png");
    Loads.loads("box6",  "img/game/", "box6.png");
    Loads.loads("box7",  "img/game/", "box7.png");
    Loads.loads("box8",  "img/game/", "box8.png");
    Loads.loads("box9",  "img/game/", "box9.png");
    Loads.loads("box10",  "img/game/", "box10.png");
    Loads.loads("box11",  "img/game/", "box11.png");
    Loads.loads("box12",  "img/game/", "box12.png");
    Loads.loads("box13",  "img/game/", "box13.png");
    Loads.loads("box14",  "img/game/", "box14.png");
    Loads.loads("box15",  "img/game/", "box15.png");
    Loads.loads("box16",  "img/game/", "box16.png");
    Loads.loads("box17",  "img/game/", "box17.png");
    Loads.loads("box18",  "img/game/", "box18.png");
    Loads.loads("box19",  "img/game/", "box19.png");
    Loads.loads("box20",  "img/game/", "box20.png");
    Loads.loads("box21",  "img/game/", "box21.png");
    Loads.loads("box22",  "img/game/", "box22.png");
    Loads.loads("box23",  "img/game/", "box23.png");
    Loads.loads("box24",  "img/game/", "box24.png");
    Loads.loads("box25",  "img/game/", "box25.png");
    Loads.loads("box26",  "img/game/", "box26.png");
    Loads.loads("box27",  "img/game/", "box27.png");
    Loads.loads("box28",  "img/game/", "box28.png");
    Loads.loads("box29",  "img/game/", "box29.png");
    Loads.loads("box30",  "img/game/", "box30.png");

    Loads.loads("jump",  "img/game/", "jump.png");
    Loads.loads("good",  "img/game/", "good.png");
    Loads.loads("press",  "img/game/", "press.png");

    Loads.loads("box_word",  "img/game/", "box_word.png");
    Loads.loads("box1_word",  "img/game/", "box1_word.png");
    Loads.loads("box2_word",  "img/game/", "box2_word.png");
    Loads.loads("box3_word",  "img/game/", "box3_word.png");
    Loads.loads("box4_word",  "img/game/", "box4_word.png");
    Loads.loads("box5_word",  "img/game/", "box5_word.png");
    Loads.loads("box6_word",  "img/game/", "box6_word.png");
    Loads.loads("box7_word",  "img/game/", "box7_word.png");
    Loads.loads("box8_word",  "img/game/", "box8_word.png");
    Loads.loads("box9_word",  "img/game/", "box9_word.png");
    Loads.loads("box10_word",  "img/game/", "box10_word.png");
    Loads.loads("box11_word",  "img/game/", "box11_word.png");
    Loads.loads("box12_word",  "img/game/", "box12_word.png");

    Loads.loads("mp3_combo",  "mp3/", "combo.mp3");
    Loads.loads("mp3_scale_intro",  "mp3/", "scale_intro.mp3");
    Loads.loads("mp3_scale_loop",  "mp3/", "scale_loop.mp3");

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