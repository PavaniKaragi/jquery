$(document).on('ready',function(){
//reading the content of template
var templatesource=$("#item-template").html();
//console.log(templatesource);
var itemtemplate= handlebars.compile(templatesource);

//define a context that handlebars can use
var itemcontext1={
    name:"pavani",
    color:"violet"
};

var itemcontext2={
    name:"pavan",
    color:"Blue"
};
//run our complied template function to get html
//use itemContext to fill in values for variables
// used inside the template {{}}
var outputHtml=itemtemplate(itemcontext1);
$("body").append(outputHtml);

//run and append the second template
var outputHtml2=itemtemplate(itemcontext2);
$("body").append(outputHtml2)
});