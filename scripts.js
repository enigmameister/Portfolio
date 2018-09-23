
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


$("#h-nav, #btn-c").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        'slow');
		});


$("#btn-go").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
		});

$("#btn-p").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
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


$(document).ready(function() {
    $('#btn-about').click(function(event) {
        $("main").animate({'opacity': 0}, 50);
        event.preventDefault();
        var url = $(this).attr("about.html");
        $("main").load("about.html", function() {
            $(this).animate({'opacity': 1}, 1000);
        });
    });
});

$(document).ready(function(){
    $("#btn-hire").click(function(event){
        $("main").animate({'opacity':0}, 50);
        event.preventDefault();
        var url = $(this).attr("hire.html");
        $("main").load("hire.html", function(){
            $(this).animate({'opacity':1},1000);
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
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if ($(window).width() < 720 && scroll > 600) {
        $("header").css({"display":"none"});
      }
      else{
          $("header").css({"display":"block"});   
      }
  })
})


$('.theme-picker').hide();
$('.toggle-theme, .theme-picker').on('click', function()
 {
    $('.toggle-theme, .theme-picker').toggle('1000')
  }
);

  var swapStyleSheet = function (sheet) {
        document.getElementById('theme_css').setAttribute('href', sheet);
        storebackground(sheet);
    }

    var storebackground = function (swapstylesheet) {
        localStorage.setItem("href", swapstylesheet); //you need to give a key and value
    }

    var loadbackground = function () {
        document.getElementById('theme_css').setAttribute('href', localStorage.getItem('href'));
    }

    window.onload = loadbackground();