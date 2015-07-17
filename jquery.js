$(function(){

$(".header").click(function(){
  $(this).text("Isn't this better?");
});

$(".ugly-title").click(function(){
		$(this).removeClass("ugly-title");
    $(this).removeClass("animated");
    $(this).removeClass("infinite");
    $(this).removeClass("flash");
    $(this).addClass("pretty-title");
	});
$(".ugly-text").click(function(){
		$(this).removeClass("ugly-text");
    $(this).addClass("pretty-text");
    $(this).addClass("col-xs-8 col-xs-offset-2 text-justify");
	});
  
$(".ugly-greeter").click(function(){
  $(this).removeClass("ugly-greeter");
    $(this).removeClass("animate");
    $(this).removeClass("slideInRight");
    $(this).removeClass("slideOutLeft");
    $(this).addClass("pretty-greeter");
    $(this).addClass("col-xs-8 col-xs-offset-2");
    $(this).text("Isn't this better?");
});
  
$(".ugly-image").click(function(){
  $(this).removeClass("ugly-image");
    $(this).addClass("pretty-image");
    $(this).addClass("col-xs-8 col-xs-offset-2");
    $(".congrats").attr("Congrats! You've Fixed It!")
});



$("#b1").click(function(){
  $("body").removeClass("ugly-body");
    $("body").addClass("pretty-body");
    $(this).hide(1);
});
  
  $(".ugly-image").click(function(){
  $(this).removeClass("ugly-image");
    $(this).addClass("pretty-image");
    $(this).attr("src","http://www.pitt.edu/~btb25/happycat.jpg");
});





});