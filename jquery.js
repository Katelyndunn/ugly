$(function(){
 
  $(".ugly-title").click(function(){
		$(this).removeClass("ugly-title");
    $(this).addClass("pretty-title");
	});
$(".ugly-text").click(function(){
		$(this).removeClass("ugly-text");
    $(this).addClass("pretty-text");
    $(this).addClass("col-xs-8 col-xs-offset-2 text-justify");
	});
  
$(".ugly-greeter").click(function(){
  $(this).removeClass("ugly-greeter");
    $(this).addClass("pretty-greeter");
    $(this).addClass("col-xs-8 col-xs-offset-2");
});
  
$(".ugly-image").click(function(){
  $(this).removeClass("ugly-image");
    $(this).addClass("pretty-image");
    $(this).addClass("col-xs-8 col-xs-offset-2");
});

$(".ugly-body").click(function(){
  $(this).removeClass("ugly-body");
    $(this).addClass("pretty-body");
});
$("#b1").click(function(){
  $("body").removeClass("ugly-body");
    $("body").addClass("pretty-body");
    $(this).hide(1);
});
  
  $(".ugly-image").click(function(){
  $(this).removeClass("ugly-image");
    $(this).addClass("pretty-body");
    $(this).attr("src","http://www.pitt.edu/~btb25/happycat.jpg");
});





});