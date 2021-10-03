$(function () {
    //ハンバーガーメニュー
    function btn() {
        $("#open").toggleClass("active");
        $(".nav").toggleClass("active");
    }
    $("#open").on("click", function () {
        btn();
    });
    $('.nav a').on('click', function () {
        btn();
    });
    //画像スライド
    const img = ["img/mainvisual1.jpg", "img/mainvisual2.jpg", "img/mainvisual3.jpg"];
    let count = 1;
    const change_image = () => {
        $(".background img").animate({
            opacity: 0
        }, 1000, function () {
            $(".background img").attr("src", img[count]);
            $(".background img").animate({
                opacity: 1
            }, 1000);
            count++;
            if (count === img.length) {
                count = 0;
            }
        })
    }
    setInterval(change_image, 5000);
    //画像アニメーション
    //(要素が表示されたたらslide-left)
    $(".item-left").on("inview", function (event, isInView) {
        if (isInView) {
            $(".item-left").addClass("slider-left");
        }
    })
    $(".item-right").on("inview", function (event, isInView) {
        if (isInView) {
            $(".item-right").addClass("slider-right");
        }
    })
    $(".item-right").on("inview", function (event, isInView) {
        if (isInView) {
            $(".item-right").addClass("slider-right");
        }
    })
    let key = (number) => {
        $(".key" + number).on("inview", function (event, isInView) {
            if (isInView) {
                $(".key" + number).addClass("key");
            }
        })
    }
    key(1);
    key(2);
    key(3);
})
