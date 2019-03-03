$(function(){
    $('.contact').each(function() {
        if($(this).height() < 550) {
           (".contact, .contact-box").css("position","absolute");
        }    
    });
});

$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(2)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(4)").delay(800).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(5)").delay(800).animate({ "left":"0%"}, 700 ); 
$(".animation span:nth-child(7)").delay(1600).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(8)").delay(1600).animate({ "left":"0%"}, 700 ); 

$("#a-nav").on("click", function()
{           
 $('html,body').animate({
     scrollTop: $(".about").offset().top},
     'slow');
});

$("#p-nav").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
		});

$("#c-nav").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
		});

$("#s-nav").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        'slow');
		});

$("#h-nav, #btn-c").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        'slow');
		});

$("#btn-go").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
		});

$("#btn-p").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
		});

$("#btn-a").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".skills").offset().top},
        'slow');
		});

$("#btn-s").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
		});

$(document).ready(function() {
    $('#btn-home').click(function(event) {
        $(".about").animate({'opacity': 0}, 50);
        event.preventDefault();
        var url = $(this).attr("index.html .section");
        $(".about").load("index.html .section", function() {
            $(this).animate({'opacity': 1}, 1000);
        });
    });
});

$(document).ready(function(){
                  $('.toggle-menu').click(function(){
                    $('nav').toggleClass('active')
                  })
        })

$(document).ready(function(){
                  $('nav ul li a').click(function(){
                    $('nav').removeClass('active')
                  })
        })

$(document).ready(function(){
	$('.toggle-menu').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
	$('nav').click(function(){
		$('.toggle-menu').removeClass('open');
	});
});

	
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if (scroll > 50) {
        $("header").css({"display":"none"});
          $(".scroll-up").css({"display":"block"});
      }
      else
     {
          $("header").css({"display":"block"});  
          $(".scroll-up").css({"display":"none"}); 
          $(".scroll-down").css({"display":"none"});  
      }  
  })
})


$(".scroll-up").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        500);
		});

$('.theme-picker').hide();
$('.toggle-theme, .theme-closepicker, #theme-red, #theme-lime, #theme-white, #theme-default').on('click', function()
 {
    $('.toggle-theme, .theme-picker').toggle('1000')
  }
);

  var swapStyleSheet = function (sheet) {
        document.getElementById('theme_css').setAttribute('href', sheet);
        storebackground(sheet);
    }
    var storebackground = function (swapstylesheet) {
        localStorage.setItem("href", swapstylesheet);
    }
    var loadbackground = function () {
        document.getElementById('theme_css').setAttribute('href', localStorage.getItem('href'));
    }
    window.onload = loadbackground();
