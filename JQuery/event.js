 $('#mybutton').on("click",function(e){
        console.log("clicked on",$(this));
        console.log(e);
 });

 $('#mylink').on("click",function(e){
    e.preventDefault();//doesn't direct to the link
    console.log("clicked the link");
    return false; //same as default 
});

    var newbutton=$("<button class='mybutton'>jquerybutton</button>");
    $('#mybutton').on("click",function(){
        console.log(" You clicked a button!!");
    });
    $('body').append(newbutton);






