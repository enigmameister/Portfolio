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

$(document).ready(function() 
{
    $('#btn-home').click(function(event)
     {
        $(".about").animate({'opacity': 0}, 50);
        event.preventDefault();
        var url = $(this).attr("index.html .section");
        $(".about").load("index.html .section", function() 
        {
            $(this).animate({'opacity': 1}, 1000);
        });
    });
});


$(document).ready(function()
{
                  $('.toggle-menu').click(function()
                  {
                    $('nav').toggleClass('active')
                  })
        })

$(document).ready(function()
{
                  $('nav ul li a').click(function()
                  {
                    $('nav').removeClass('active')
                  })
        })

$(document).ready(function()
{
	$('.toggle-menu').click(function()
    {
		$(this).toggleClass('open');
	});
});

$(document).ready(function()
{
	$('nav').click(function()
    {
		$('.toggle-menu').removeClass('open');
	});
});

$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );

let wel1 = document.getElementsByClassName('animation');
console.log(wel1);
	
$(document).ready(function()
{
  $(window).scroll(function()
  {
    let scroll = $(window).scrollTop();
      if (scroll > 50) 
      {
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
  let swapStyleSheet = function (sheet) 
    {
        document.getElementById('theme_css').setAttribute('href', sheet);
        storebackground(sheet);
    }

    let storebackground = function (swapstylesheet) 
    {
        localStorage.setItem("href", swapstylesheet);
    }

    let loadbackground = function () 
    {
        document.getElementById('theme_css').setAttribute('href', localStorage.getItem('href'));
    }
    window.onload = loadbackground();

/* lang change */

function changeLanguage(lang)
{
    location.hash = lang;
    location.reload();
}
    let language = 
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

            welcome1: "Acuracy."+"Clean code",
            welcome2:"Passion."+"Idea and unique projects",
            welcome3:"Talk is cheap.Show me the code",
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
         
            welcome1:"Dokładnośc."+"Przejrzysty kod",
            welcome2:"Pasja."+"Pomysły i unikalne projekty",
            welcome3:"Rozmowa jest tania.Pokaż mi kod",


            h1aboutText:
            "Cześć, nazywam sie Łukasz i mam 29lat. "+
            "W wolnej chwili lubie programować, co jest moją pasją i sprawia mi dużo frajdy."+
            "Tematy związane z komputerami nie są mi obce i mam tendecję do ich szybkiego przyswajania."+
            "Pozatym lubie uprawiać sport i słuchać wartościowej muzyki"+
            "Aktualnie nie jestem zatrudniony w IT, skupiając się na rozwoju swoich umiejętności i odkrywaniu nowych technologii",

            name: "Imie",
            mail: "Adres e-mail",
            subject: "Temat wiadomosci",
            msg: "Tresc wiadomosci",
            submit: "Wyslij",
        },

        ua:
        {
            hnav: "додому",
            anav: "про мене",
            pnav: "портфоліо",
            cnav: "контакт",

            h1: "Привіт",

            start: " старт",
            h1about:"про мене",
            h1aboutText: 
            "Привіт, мене звуть Лукаш, мені 29 років."+
            "У вільний час я люблю програмувати, це моя пристрасть, і я вважаю, що це дуже весело."+
            "Я не жахливо ставлюся до речей, пов’язаних з комп’ютером, і швидко це розумію."+
            "Крім роботи у вільний час люблю займатися спортом і слухати хорошу музику."+
            "Насправді нікуди не найму (в ІТ), лише вдосконалюю свої навички та відкриваю нові технології.",

            h2portfolio:"портфолі",
            h1contact:"контакт",

            welcome: "Точність.Завжди чистий код"+
                    "пристрасть.Ідея та унікальні проекти"+
                    "Розмова дешева.Покажіть мені код",

            name: "твоє ім'я",
            mail: "ваша пошта",
            subject: "тема",
            msg: "повідомлення",
            submit: "відправити",
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
            "Neben der Arbeit treibe ich in meiner Freizeit gerne Sport und höre gute Musik."+
            "Ich stelle eigentlich nirgendwo ein (in der IT), sondern verbessere nur meine Fähigkeiten und entdecke neue Technologien.",
            h2portfolio:"Portfolio",
            h1contact:"Kontakt",

            welcome: "Genauigkeit.Immer ein sauberer Code"+
                     "Leidenschaft.Idee und einzigartige Projekte"+
                      "Reden ist billig.Zeig mir den Code",

            name: "Ihren Namen",
            mail: "E-mail Adresse",
            subject: "Betreff der Nachricht",
            msg: "Nachrichteninhalt",
            submit: "Schicken",
        }
    };

    if(window.location.hash)
    {
        if(window.location.hash=="#pl")
        {
        
            welcomeText.innerHTML = language.pl.h1;

            h_nav.innerHTML = language.pl.hnav;
            a_nav.innerHTML = language.pl.anav;
            p_nav.innerHTML = language.pl.pnav;
            c_nav.innerHTML = language.pl.cnav;


            aboutText.innerHTML = language.pl.h1about;
            aboutText2.innerHTML = language.pl.h1aboutText;
            portfolioText.innerHTML = language.pl.h2portfolio;
            contactText.innerHTML = language.pl.h1contact;

            contactName.placeholder = language.pl.name;
            contactMail.placeholder = language.pl.mail;
            contactSubject.placeholder = language.pl.subject;
            contactMsg.placeholder = language.pl.msg;
            contactSubmit.value = language.pl.submit;
        }

        else if(window.location.hash == "#ua")
        {
            welcomeText.innerHTML = language.ua.h1;

            h_nav.innerHTML = language.ua.hnav;
            a_nav.innerHTML = language.ua.anav;
            p_nav.innerHTML = language.ua.pnav;
            c_nav.innerHTML = language.ua.cnav;

            goText.innerHTML = language.ua.start;

            aboutText.innerHTML = language.ua.h1about;
            aboutText2.innerHTML = language.ua.h1aboutText;
            portfolioText.innerHTML = language.ua.h2portfolio;
            contactText.innerHTML = language.ua.h1contact;

            contactName.placeholder = language.ua.name;
            contactMail.placeholder = language.ua.mail;
            contactSubject.placeholder = language.ua.subject;
            contactMsg.placeholder = language.ua.msg;
            contactSubmit.value = language.ua.submit;
        }

        else if(window.location.hash == "#de")
        {
            welcomeText.innerHTML = language.de.h1;

            h_nav.innerHTML = language.de.hnav;
            a_nav.innerHTML = language.de.anav;
            p_nav.innerHTML = language.de.pnav;
            c_nav.innerHTML = language.de.cnav;

            aboutText.innerHTML = language.de.h1about;
            aboutText2.innerHTML = language.de.h1aboutText;
            portfolioText.innerHTML = language.de.h2portfolio;
            contactText.innerHTML = language.de.h1contact;

            contactName.placeholder = language.de.name;
            contactMail.placeholder = language.de.mail;
            contactSubject.placeholder = language.de.subject;
            contactMsg.placeholder = language.de.msg;
            contactSubmit.value = language.de.submit;
        }
    }