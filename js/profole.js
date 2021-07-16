/* global $*/
$(function () {
    let width = $(window).width();
    $(window).on("load", function () {
        if (width >= 896) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 100) {
                    $("#pc-menu").css("display", "none");
                    $("#sp-menu").css("opacity", 1);
                    $('.nav').attr("id", "nav");
                } else {
                    $('.nav').removeAttr("id");
                    $("#pc-menu").css("display", "block");
                    $("#sp-menu").css("opacity", 0);
                }
            });
        } else {
            $("#sp-menu").css("opacity", 1);
        }
    })
    $(window).on("resize", function () {
        if (width >= 896) {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 100) {
                    $("#pc-menu").css("display", "none");
                    $("#sp-menu").css("opacity", 1);
                    $('.nav').attr("id", "nav");
                } else {
                    $('.nav').removeAttr("id");
                    $("#pc-menu").css("display", "block");
                    $("#sp-menu").css("opacity", 0);
                }
            });
        } else {
            $("#sp-menu").css("opacity", 1);
        }
    })
    //ハンバーガーメニュー
    $("#open").on("click", () => {
        $("#overlay").css("display", "block");
        $("#close").css("display", "block");
        $("#open").css("display", "none")
    });
    $("#close").on("click", () => {
        $("#overlay").css("display", "none");
        $("#close").css("display", "none");
        $("#open").css("display", "block")
    });
    // // 画像slider
    let count_btn = 0;
    let length = $("#effect img").length;
    //set image postion
    //メソッド開始前の初期ポジション
    function set_images(position) {　 //posiiton(引数)
        //繰り返し
        for (let i = 1; i < length; i++) {
            $("#effect img").eq((count_btn + i) % length).css("marginLeft", position + "px");
        };
    }
    set_images(-500);
    //引数で私た-500が仮引数のpositionにセットされmarginが指定される
    //スライダ処理
    function playSlider(position) {
        set_images(position);
        $("#effect img").eq(count_btn % length).animate({
            "marginLeft": (-1 * position + "px")
        }, 800, function () {
            $("#effect img").eq(count_btn % length).css("marginLeft", position + "px");
            $('#next').prop('disabled', false);
            $('#rev').prop('disabled', false);
            count_btn++;
        });
        $("#effect img").eq((count_btn + 1) % length).animate({
            "marginLeft": "0"
        }, 800);
    }
    //タイマー処理
    let timer = setInterval(playSlider, 5000, -500);
    $("#next").on("click", () => {
        $.when(set_images(-500), clearInterval(timer), playSlider(-500), ).done(function () {
            $('#next').prop('disabled', true);
            $('#rev').prop('disabled', true);
            timer = setInterval(playSlider, 5000, -500);
        });
    });
    $("#rev").on("click", () => {
        $.when(clearInterval(timer), playSlider(500)).done(function () {
            $('#next').prop('disabled', true);
            $('#rev').prop('disabled', true);
            //set_images(-500);
            timer = setInterval(playSlider, 5000, -500);
        });
    });
})