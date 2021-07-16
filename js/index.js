/* global $*/
$(function () {
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
    //タイトルアニメーション
    let width = $(window).width();
    if (width >= 800) {
        $.when($("#main-title").animate({
            "opacity": 1,
            "fontSize": "320%"
        }, 1500).animate({
            "opacity": 0
        }, 2500)).done(function () {
            $("#main-title").text("Takuto Yoshizumi.");
            $("#main-title").animate({
                "opacity": 1,
            }, 1000)
        });
    } else {
        $.when($("#main-title").animate({
            "opacity": 1,
            "fontSize": "270%"
        }, 1500).animate({
            "opacity": 0
        }, 2500)).done(function () {
            $("#main-title").text("Takuto Yoshizumi.");
            $("#main-title").animate({
                "opacity": 1,
            }, 1000)
        });
    }
});