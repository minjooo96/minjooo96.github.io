//================================= section 1 왼쪽 메인 배열
var mainleftA = new Array();
mainleftA[1] = "left_new_1.jpg";
mainleftA[2] = "left_new_2.jpg";
mainleftA[3] = "left_new_3.jpg";
mainleftA[4] = "left_new_4.jpg";
mainleftA[5] = "left_new_5.jpg";

//================================= section 1 오른쪽 메인 배열
var mainrightA = new Array();
mainrightA[1] = "right_1.png";
mainrightA[2] = "right_2.png";
mainrightA[3] = "right_3.png";
mainrightA[4] = "right_4.png";
mainrightA[5] = "right_5.png";

//================================= section 1 왼쪽 메인 서브메뉴 배열
var mainsubA = new Array();
mainsubA[0] = "left_sub_1.jpg";
mainsubA[1] = "left_sub_2.jpg";
mainsubA[2] = "left_sub_3.jpg";
mainsubA[3] = "left_sub_4.jpg";
mainsubA[4] = "left_sub_5.jpg";
mainsubA[5] = "left_sub_6.jpg";

//================================= section 2 왼쪽 메인 배열
var sec2_leftA = new Array();
sec2_leftA[1] = "1.jpg";
sec2_leftA[2] = "1-1.jpg";
sec2_leftA[3] = "1-2.jpg";
sec2_leftA[4] = "1-3.jpg";
sec2_leftA[5] = "2.jpg";
sec2_leftA[6] = "2-1.jpg";
sec2_leftA[7] = "2-2.jpg";
sec2_leftA[8] = "3.jpg";
sec2_leftA[9] = "3-1.jpg";
sec2_leftA[10] = "3-2.jpg";
sec2_leftA[11] = "4.jpg";
sec2_leftA[12] = "5.jpg";
sec2_leftA[13] = "6.jpg";

var timer = setInterval("mainleft_timer()", 3000);

//================================================================ nav js


$(function(){
    $("section").hide();
    $("#sec1_main").show();
    
    //메뉴 클릭시 section 변하기
    $("nav ul li").on("click",function(){
        $("section").hide();
        navcl = $(this).index();
        //alert(navcl);
        if(navcl == 1){
           $("#sec1_main").show();
        }
        else if(navcl == 2){
           $("#sec2_menu").show();
        }
        else if(navcl == 3){
           $("#sec3_store").show();
        }
        else if(navcl == 4){
           $("#sec4_event").show();
        }
        else if(navcl == 5){
           $("#sec5_delivery").show();
        }
    });
        
    //메뉴 클릭시 animate
    $("#nav_animate").hide();
    $("nav ul li").on("click",function(){
        navcl = $(this).index();
        //alert(navcl);
        $("#nav_animate").fadeIn().animate({"top":100*navcl},500);
        if(navcl == 1 ){
           $("#nav_animate").fadeOut();
        }
        else if(navcl == 0 || navcl == 5 || navcl == 6 || navcl == 7){
           $("#nav_animate").hide();
        }
    });
    
    //메뉴 클릭시 아이콘 색깔 바뀌기
    $("nav ul li:nth-child(1)").on("click",function(){
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(2)").on("click",function(){
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(3)").on("click",function(){
        $("img",this).attr({"src":"img/menu_ico/gnb_on_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(4)").on("click",function(){
        $("img",this).attr({"src":"img/menu_ico/gnb_on_03.png"});
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(5)").on("click",function(){
        $("img",this).attr({"src":"img/menu_ico/gnb_on_04.png"});
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
    });
    $("nav ul li:nth-child(6)").on("click",function(){
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(7)").on("click",function(){
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
    $("nav ul li:nth-child(8)").on("click",function(){
        $("nav ul li:nth-child(3) img").attr({"src":"img/menu_ico/gnb_02.png"});
        $("nav ul li:nth-child(4) img").attr({"src":"img/menu_ico/gnb_03.png"});
        $("nav ul li:nth-child(5) img").attr({"src":"img/menu_ico/gnb_04.png"});
    });
});

//================================================================ section 1

$(function(){
    //메인 왼쪽 background 배열 넣기
    for(i=1; i<=5; i++){
        $("#sec1_left_"+i).css("background","url(img/sec1/"+mainleftA[i]+") no-repeat");
    }
    //메인 오른쪽 background 배열 넣기
    for(i=1; i<=5; i++){
        $("#sec1_right_"+i).css("background","url(img/sec1/"+mainrightA[i]+") no-repeat top center");
    }
    $("#sec1_right_wrap div").css("backgroundSize","89%");
    
    //메인 왼쪽 서브 background 배열 넣기
    for(i=0; i<=6; i++){
        $("#sec1_left_sub li:eq("+i+")").css("background","url(img/sec1/"+mainsubA[i]+") no-repeat");
    }
    
    var no;
    $("#sec1_left_num li a:first").text("").addClass("num_on");
    $("#sec1_left_num li").on("click",function(){    
        no=$(this).index()+1;
        
        clearInterval(timer);
        for(i=0;i<=5; i++){
            $("#sec1_left_num li a").removeClass("num_on");
            $("#sec1_left_num li a").addClass("num_off");
            $("#sec1_left_num li:eq("+i+") a").text(i+1);
        }
        if(this){
            $("a",this).text("").addClass("num_on");
        }
        leftnum = $(this).index()+1;
        $("#sec1_left_wrap div").hide();
        $("#sec1_right_wrap div").hide();
        $("#sec1_left_"+leftnum).show();
        $("#sec1_right_"+leftnum).show();
        
        firid = $("#sec1_left_wrap div:nth-child("+no+")").attr("id");
        firid=firid.substr(10, 1);
        //alert(firid);
        
        $("#sec1_left_"+firid).prependTo("#sec1_left_wrap");
        
        
        if(firid == 1){
           $("#sec1_left_2").appendTo("#sec1_left_wrap");
           $("#sec1_left_3").appendTo("#sec1_left_wrap");
           $("#sec1_left_4").appendTo("#sec1_left_wrap");
           $("#sec1_left_5").appendTo("#sec1_left_wrap");
        }
        else if(firid == 2){
           $("#sec1_left_3").appendTo("#sec1_left_wrap");
           $("#sec1_left_4").appendTo("#sec1_left_wrap");
           $("#sec1_left_5").appendTo("#sec1_left_wrap");
           $("#sec1_left_1").appendTo("#sec1_left_wrap");
        }
        else if(firid == 3){
           $("#sec1_left_4").appendTo("#sec1_left_wrap");
           $("#sec1_left_5").appendTo("#sec1_left_wrap");
           $("#sec1_left_1").appendTo("#sec1_left_wrap");
           $("#sec1_left_2").appendTo("#sec1_left_wrap");
        }
        else if(firid == 4){
           $("#sec1_left_5").appendTo("#sec1_left_wrap");
           $("#sec1_left_1").appendTo("#sec1_left_wrap");
           $("#sec1_left_2").appendTo("#sec1_left_wrap");
           $("#sec1_left_3").appendTo("#sec1_left_wrap");
        }
        else if(firid == 5){
           $("#sec1_left_1").appendTo("#sec1_left_wrap");
           $("#sec1_left_2").appendTo("#sec1_left_wrap");
           $("#sec1_left_3").appendTo("#sec1_left_wrap");
           $("#sec1_left_4").appendTo("#sec1_left_wrap");
        }
        
    });
    timer = setInterval("mainleft_timer()", 3000);
});

//메인 롤링
function mainleft_timer(){
    
    $("#sec1_left_wrap div").show();
    $("#sec1_right_wrap div").show();
    
    //left
    $("#sec1_left_wrap").stop().animate({"marginLeft": "-768px" },1000,function(){
        $("#sec1_left_wrap div:first").appendTo("#sec1_left_wrap");
        $("#sec1_left_wrap").css("marginLeft","0%");
    }); 
    
    //right
    $("#sec1_right_wrap").stop().animate({"marginLeft": "-1200px" },1000,function(){
        $("#sec1_right_wrap div:first").appendTo("#sec1_right_wrap");
        $("#sec1_right_wrap").css("marginLeft","0%");
    }); 
    
    for(i=1; i<=5; i++){
        if($("#sec1_left_wrap div:nth-child(2)").attr("id") == "sec1_left_"+i){
           $("#sec1_left_num li a").removeClass("num_on");
            $("#sec1_left_num li:nth-child("+i+") a").text("").addClass("num_on");
        }
        else{
            $("#sec1_left_num li:nth-child("+i+") a").text(i);
        }
    }   
}

//left_sub 팝업
$(function(){
    $(".sec1_left_sub_pop").hide();
    $("#sec1_left_sub li:nth-child(2)").on("click",function(){
        $("#sec1_left_sub2_pop").show();
    });
    $("#sec1_left_sub li:nth-child(3)").on("click",function(){
        $("#sec1_left_sub3_pop").show();
    });
    $(".sec1_left_sub_pop p").on("click",function(){
        $(".sec1_left_sub_pop").hide();
    });
});




//================================================================ section 2
$(function(){
    var sec2_leftcl;
    //왼쪽 메인 hover시 그림 바뀌기
    for(i=1; i<=13; i++){
        $("#sec2_left_"+i).css("background","url(img/sec2/left/"+sec2_leftA[i]+") no-repeat center bottom");
        
        $("#sec2_left div").hover(function(){
            $(this).css("backgroundPosition", "center top");
        },function(){
            $(this).css("backgroundPosition", "center bottom");
            $("#sec2_left_"+sec2_leftcl).css("backgroundPosition", "center top");
        });
    }
    //왼쪽 메인 클릭시 그림 바뀌기
    $("#sec2_left div").click(function(){
        sec2_leftcl = $(this).index()+1;
        $("#sec2_left div").css("backgroundPosition", "center bottom");
        $(this).css("backgroundPosition", "center top");
    });
    
    //왼쪽 메인 고정
    $("#sec2_left_1").css("backgroundPosition", "center top");
    
    //왼쪽 메인 서브메뉴 클릭시 주메뉴와 함께 바뀌기
    $("#sec2_left div").click(function(){
        sec2_leftcl = $(this).index()+1;
        if(sec2_leftcl == 1 || sec2_leftcl == 2 ||
           sec2_leftcl == 3 || sec2_leftcl == 4){
            $("#sec2_left div").css("backgroundPosition", "center bottom");
            $(this).css("backgroundPosition", "center top");
            $(".sec2_left_m:eq(0)").css("backgroundPosition", "center top");
        }
        else if(sec2_leftcl == 5 || sec2_leftcl == 6 || sec2_leftcl == 7){
            $("#sec2_left div").css("backgroundPosition", "center bottom");
            $(this).css("backgroundPosition", "center top");
            $(".sec2_left_m:eq(1)").css("backgroundPosition", "center top");
        }
        else if(sec2_leftcl == 8 || sec2_leftcl == 9 || sec2_leftcl == 10){
            $("#sec2_left div").css("backgroundPosition", "center bottom");
            $(this).css("backgroundPosition", "center top");
            $(".sec2_left_m:eq(2)").css("backgroundPosition", "center top");
        }
    });
    
    //왼쪽 메인 영양/알레르기 클릭시 팝업 노출
    $("#sec2_left_14_pop").hide();
    $("#sec2_left_14").click(function(){
        $("#sec2_left_14_pop").fadeIn();
    });
    $("#sec2_left_14_pop p:last-child").click(function(){
        $("#sec2_left_14_pop").fadeOut();
    });
    
    //디폴트로 첫번째 메뉴 넣어놓기
    $("#sec2_right>div").hide();
    $("#sec2_right_soffer").show();
        
    //왼쪽 메뉴에 따라 오른쪽 메뉴 변경
    $("#sec2_left div").on("click",function(){
        sec2li = $(this).index()+1;
        $("#sec2_right>div").hide();
        $("#sec2_right>div:nth-child("+sec2li+")").show();
    });
    
    //영양정보 + - 
    $(".sec2_right_wrap_sub table").hide();
    $(".sec2_pro_nutrition").click(function(){
        $(".sec2_right_wrap_sub table").toggle();
        $(".sec2_nutri_left").hide();
    });
    
    
    //서브메뉴 오른쪽 하단 롤링
    $(".sec2_special_roll_r").click(function(){
        $(".sec2_sub_thumb_wrap").stop().animate({"marginLeft":"-530px"},500);
    });
    $(".sec2_special_roll_l").click(function(){
        $(".sec2_sub_thumb_wrap").stop().animate({"marginLeft":"10px"},500);
    });
    
    //메뉴 클릭된 것만 썸네일 불투명하게, 썸넬 위 큰 이미지 변경
    $(".sec2_sub_thumb_wrap div").css("opacity","0.5");
    $(".sec2_sub_thumb_wrap div:eq(0)").css("opacity","1");
    
    $(".sec2_sub_thumb_wrap div").click(function(){
        var sec2_thumb = $(this).index()+1;
        $(".sec2_pro_img img").attr({"src":"img/sec2/right/1-1specialoffer/pic_"+sec2_thumb+".png"});
        
        $(".sec2_sub_thumb_wrap div").css("opacity","0.5");
        $(this).css("opacity","1");
    });
    
    //메뉴 클릭된 것 정보 노출
    $(".sec2_right_sub").hide();
    $("#sec2_right_soffer_1").show();
    $(".sec2_sub_thumb_wrap div").click(function(){
        var sec2_thumb = $(this).index()+1;
        $(".sec2_right_sub").hide();
        $("#sec2_right_soffer_"+sec2_thumb).fadeIn(1000);
    });
    
});


//================================================================ section 3
$(function(){
    
});
































