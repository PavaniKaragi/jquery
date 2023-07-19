// $("#my-list").append("<li>Append with jquery");
// $("#my-list").prepend("<li>prepend with jquery");
// $("#my-list").before('<h2>Before the list</h2>');
// $("#my-list").after('<h2>After the list</h2>');

// var myclone = $("#my-list").clone();
// $("#my-list").after(myclone);

// $("h1").remove();
// $("#my-list").empty();

var newElement=$ ("<li>From jquery</li>");
newElement.css("color","violet");
$("#my-list").append(newElement);

