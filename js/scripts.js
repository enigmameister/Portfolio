$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(2)").animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(4)").delay(800).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(5)").delay(800).animate({ "left":"0%"}, 700 ); 
$(".animation span:nth-child(7)").delay(1600).animate({ "left":"0%"}, 700 );
$(".animation span:nth-child(8)").delay(1600).animate({ "left":"0%"}, 700 ); 

$("#a_nav").on("click", function()
{           
 $('html,body').animate({
     scrollTop: $(".about").offset().top},
     'slow');
});

$("#p_nav").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".portfolio").offset().top},
        'slow');
		});

$("#c_nav").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
		});

$("#h_nav, #btn-c").on("click", function() 
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

/* toggle theme/lang */
$('.theme-picker').hide();

$('.toggle-theme, .theme-closepicker, #theme-red, #theme-lime, #theme-white, #theme-default').on('click', function()
 {
    $('.toggle-theme, .theme-picker').toggle('1000')
  });


 $('.lang-picker').hide();

$('.toggle-lang, .lang-closepicker, #lang-en, #lang-pl, #lang-ua, #lang-de').on('click', function()
 {
    $('.toggle-lang, .lang-picker').toggle('1000')
  });

/* theme change session */
  var swapStyleSheet = function (sheet) 
    {
        document.getElementById('theme_css').setAttribute('href', sheet);
        storebackground(sheet);
    }

    var storebackground = function (swapstylesheet) 
    {
        localStorage.setItem("href", swapstylesheet);
    }

    var loadbackground = function () 
    {
        document.getElementById('theme_css').setAttribute('href', localStorage.getItem('href'));
    }
    window.onload = loadbackground();

/* lang change 
https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

*/
function changeLanguage(lang)
{
    location.hash = lang;
    location.reload();
}
    var language = 
    {
        en:
        {
            hnav: "Home",
            anav: "About me",
            pnav: "Portfolio",
            cnav: "Contact",

            h1: "Welcome",
            h1about:"About Me",
            h2portfolio:"Projects",
            h1contact:"Contant",

            welcome1: "Acuracy."+"Always a clean code",
            welcome2:"Passion."+"Idea and unique projects",
            welcome3:"Talk is cheap.Show me the code"
        },

        pl:
        {
            hnav: "Glowna",
            anav: "O mnie",
            pnav: "Projekty",
            cnav: "Kontakt",

            h1about: "O mnie",
            h2portfolio: "Projekty",
            h1contact: "Kontakt",
            h1: "Witaj",
         
            welcome1:"Dokładnośc.Zawsze przejrzysty kod",
            welcome2:"Pasja.Pomysły i unikalne projekty",
            welcome3:"Rozmowa jest tania.Pokaż mi kod"
        },

        ua:
        {
            hnav: "додому",
            anav: "про мене",
            pnav: "портфоліо",
            cnav: "контакт",

            h1: "Привіт",
            h1about:"про мене",
            h1aboutText: 
            "Привіт, мене звуть Лукаш, мені 29 років."+
            "У вільний час я люблю програмувати, це моя пристрасть, і я вважаю, що це дуже весело."+
            "Я не жахливо ставлюся до речей, пов’язаних з комп’ютером, і швидко це розумію."+
            "Крім роботи у вільний час люблю займатися спортом і слухати «хорошу» музику."+
            "Насправді нікуди не найму (в ІТ), лише вдосконалюю свої навички та відкриваю нові технології, також люблю програмувати.",

            h2portfolio:"портфолі",
            h1contact:"онтакт",

            welcome: "Точність.Завжди чистий код"+
                    "пристрасть.Ідея та унікальні проекти"+
                    "Розмова дешева.Покажіть мені код"
        },

        de:
        {
            hnav: "Heim",
            anav: "Über mich",
            pnav: "Portfolio",
            cnav: "Kontakt",

            h1: "Hallo",
            h1about:"Über mich",
            h1aboutText:
            "Hallo, mein Name ist Łukasz und ich bin 29 Jahre alt."+
            "In meiner Freizeit programmiere ich gerne, es ist meine Leidenschaft und ich denke, es macht viel Spaß."+
            "Ich bin nicht schrecklich in computerbezogenen Dingen und neige dazu, es schnell aufzuheben."+
            "Neben der Arbeit treibe ich in meiner Freizeit gerne Sport und höre „gute“ Musik."+
            "Ich stelle eigentlich nirgendwo ein (in der IT), sondern verbessere nur meine Fähigkeiten und entdecke neue Technologien. Programmiere auch gerne.",
            h2portfolio:"Portfolio",
            h1contact:"Kontakt",

            welcome: "Genauigkeit.Immer ein sauberer Code"+
                     "Leidenschaft.Idee und einzigartige Projekte"+
                      "Reden ist billig.Zeig mir den Code"
        }
    };

    if(window.location.hash)
    {
        if(window.location.hash=="#pl")
        {
        
            welcomeText.textContent = language.pl.h1;

            h_nav.textContent = language.pl.hnav;
            a_nav.textContent = language.pl.anav;
            p_nav.textContent = language.pl.pnav;
            c_nav.textContent = language.pl.cnav;

            aboutText.textContent = language.pl.h1about;
            portfolioText.textContent = language.pl.h2portfolio;
            contactText.textContent = language.pl.h1contact;
        }

        else if(window.location.hash == "#ua")
        {
            welcomeText.textContent = language.ua.h1;

            h_nav.textContent = language.ua.hnav;
            a_nav.textContent = language.ua.anav;
            p_nav.textContent = language.ua.pnav;
            c_nav.textContent = language.ua.cnav;

            aboutText.textContent = language.ua.h1about;
            aboutText2.textContent = language.ua.h1aboutText;
            portfolioText.textContent = language.ua.h2portfolio;
            contactText.textContent = language.ua.h1contact;

        }

        else if(window.location.hash == "#de")
        {
            
            welcomeText.textContent = language.de.h1;

            h_nav.textContent = language.de.hnav;
            a_nav.textContent = language.de.anav;
            p_nav.textContent = language.de.pnav;
            c_nav.textContent = language.de.cnav;

            aboutText.textContent = language.de.h1about;
            aboutText2.textContent = language.de.h1aboutText;
            portfolioText.textContent = language.de.h2portfolio;
            contactText.textContent = language.de.h1contact;
        }
    }
