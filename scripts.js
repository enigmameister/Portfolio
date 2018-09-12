
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
/*		
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
      if ($(window).width() > 720 && scroll > 54) {
        $("header").css({"width":"95%"});
      }

      else{
          $("header").css({"width":"85%"});   
      }
  })
})
*/

$('.theme-picker').hide();
$('.toggle-theme, .theme-picker').on('click', function()
 {
    $('.toggle-theme, .theme-picker').toggle('1000')
  }
);

document.getElementById('theme-red').onclick = function () { 
    document.getElementById('theme_css').href = 'style-red.css';
};

document.getElementById('theme-lime').onclick = function() {
    document.getElementById('theme_css').href = 'style-lime.css';
};

document.getElementById('theme-white').onclick = function() {
    document.getElementById('theme_css').href = 'style-white.css';
};

document.getElementById('theme-default').onclick = function() {
    document.getElementById('theme_css').href = 'style.css';
};