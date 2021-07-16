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
    //スクロールアニメーション
    $(".skills_1").on("inview", function (event, isInView) {
        if (isInView) {
            $(".skills_1").addClass("sliderLeft");
        }
    })
    $(".skills_2").on("inview", function (event, isInView) {
        if (isInView) {
            $(".skills_2").addClass("sliderRight");
        }
    }) 
    //ボタン　スクロールアニメーション
    $("#scroll_btn").on({
        "mouseover": () => {
            $("#scroll_btn").css("color", "#2c4377");
        },
        "mouseout": () => {
            $("#scroll_btn").css("color", "#7ba3ff");
        },
        "click": () => {
            let target = $("header").offset().top;
            $("html,body").animate({
                scrollTop: target
            }, 800);
        },
    });
})