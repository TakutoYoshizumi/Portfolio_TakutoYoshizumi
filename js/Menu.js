/* global $*/
$(function () {
         $("#open").on("click", ()=>{
            $("#overlay").css("display","block");
            $("#close").css("display","block");
            $("#open").css("display","none")
         });
         $("#close").on("click", ()=>{
            $("#overlay").css("display","none");
            $("#close").css("display","none");
            $("#open").css("display","block")
         });        
});