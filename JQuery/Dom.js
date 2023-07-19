$(document).on("ready",function(){
    $("#mybutton").on("click",function(){
    $("h1").text("clicked!");
    console.log(this);
    var $this=$(this);
    });
});