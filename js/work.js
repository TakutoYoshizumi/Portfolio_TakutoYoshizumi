/* global $*/
$(function () {
    //headerスクロールイベント
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
    //バーガーメニュー
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
    //ポップアップ
    $(".popup").hide();
    $('img').on('click', function () {
        const work = $(this).data('work');
        $('#' + work).fadeIn();
        $("#content-wrapper").css("background", "#9e9e9e82");
    })
    $(".btn").on("click", () => {
        //ポップアップが閉じる処理
        $(".popup").fadeOut();
        $("#content-wrapper").css("background", "url(images/top-back.png)");
    })
});