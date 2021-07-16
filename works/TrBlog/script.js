$(function(){
    //header スクロールイベント
    $(window).scroll(function(){
       //スクロール量を取得
       if($(window).scrollTop()>= 170){
           $("header").addClass("small");
       }else{
           $("header").removeClass("small");
       }
       
    });
    
        let width=$(window).width();
        
    //モーダルイベント
    $("a").click(function (){
        let h = $($(this).find("img")).offset().top;
        console.log(h);
        $("body").append('<div id="bg">');
        
        if(width>=900){
            $("body").append('<div id="pc_photo">')
            
            $("#pc_photo").html("<img>");
            $("#pc_photo img").attr("src", $(this).attr("href"));
            
            $("#pc_photo img").attr("width","100%");
            $("#pc_photo img").attr("height","100%");
            $("#pc_photo img").attr("alt","photo");
            $("#pc_photo img").offset({top:h});
        }else if(width<=899 && width>=500){
            $("body").append('<div id="sp_photo">')
            
            $("#sp_photo").html("<img>");
            $("#sp_photo img").attr("src", $(this).attr("href"));
            
            $("#sp_photo img").attr("width","100%");
            $("#sp_photo img").attr("height","100%");
            $("#sp_photo img").attr("alt","photo"); 
            $("#sp_photo img").offset({top:h});
            
        }else{
            $("body").append('<div id="small_photo">')
            
            $("#small_photo").html("<img>");
            $("#small_photo img").attr("src", $(this).attr("href"));
            
            $("#small_photo img").attr("width","100%");
            $("#small_photo img").attr("height","100%");
            $("#small_photo img").attr("alt","photo");  
            $("#small_photo img").offset({top:h});
            
        }
        
        
        $("#bg").fadeIn();
        $("#pc_photo ,#sp_photo,#small_photo").fadeIn();
        
        $("#bg,#pc_photo,#sp_photo,#small_photo").click(function(){
            $("#bg,#pc_photo,#sp_photo,#small_photo").fadeOut(function(){
                $(this).remove();
            });
        });
        return false;
    });

    
    
});
