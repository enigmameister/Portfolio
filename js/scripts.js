function writtingText(text, index, time) 
{
  if (index < text.length) 
  {
    document.getElementById("animText").innerHTML += text.charAt(index);
    index++;
    setTimeout(function() 
    { 
      writtingText(text, index, time); 
    }, time);
  }
}

let text = "Hello humans, this is my own portfolio website."+
           "If you want contact with me please move to About or Contact section."+
           "Thanks for visit :))"
let time = 20;
let index = 0;

writtingText(text, index, time);


$('.scrollBtn').on('click', function(event) {
    event.preventDefault();
  
    const scrollTo = $(this).data('scroll-to');
    
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top
    }, 'slow');
  });
  
  $(document).ready(function() {
    $('#btn-home').click(function(event) {
      event.preventDefault();
      
      $(".about").fadeTo(50, 0, function() {
        $('html, body').animate({ scrollTop: 0 }, 0);
        $(this).fadeTo(1000, 1);
      });
    });
  });

$(document).ready(function()
{
                  $('.toggleMenu').click(function()
                  {
                    $('nav').toggleClass('active')
                    $('.toggleTheme, .toggleLang').toggleClass('switch',2000);
                  })
        })
$(document).ready(function()
{
                  $('nav ul li a').click(function()
                  {
                    $('nav').removeClass('active')
                    $('.toggleTheme, .toggleLang').removeClass('switch');
                  })
        })

$(document).ready(function()
{
	$('.toggleMenu').click(function()
    {
		$(this).toggleClass('open');
	});
});

$(document).ready(function()
{
	$('nav').click(function()
    {
		$('.toggleMenu').removeClass('open');
	});
});

$(".animation span:nth-child(1)").animate({ "left":"0%"}, 700 );

let wel1 = document.getElementsByClassName('animation');
	
$(document).ready(function()
{
  $(window).scroll(function()
  {
    let scroll = $(window).scrollTop();
      if (scroll > 50) 
      {
        $("header").css({"display":"none"});
          $(".scrollUp").css({"display":"block"});
      }

      else
     {
          $("header").css({"display":"block"});  
          $(".scrollUp").css({"display":"none"}); 
          $(".scrollDown").css({"display":"none"});  
      }  
  })
})

$(".scrollUp").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        500);
	});


/* toggle theme/lang */
$('.themePicker').hide();
$('.toggleTheme, .themeClosepicker, #themeRed, #themeLime, #themeWhite, #themeDefault').click(function()
 {
    $('.toggleTheme, .themePicker').toggle('1000')
  });


  $('.langPicker').hide();
  $('.toggleLang, .langClosepicker, #lang-en, #lang-pl, #lang-ua, #lang-de').click(function() 
  {
    $('.toggleLang, .langPicker').toggle('1000');
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


/* language change */

function changeLanguage(lang)
{
    let translations = language[lang];
    Object.keys(translations).forEach((key) => {
        $(`#${key}`).text(translations[key]);
    });
}
    let language = 
    {
        en:
        {
            
          animText: "Hello humans, this is my own portfolio website."+
                  "If you want contact with me please move to About or Contact section."+
                  "Thanks :))",

            h_nav: "Home",
            a_nav: "About me",
            p_nav: "Portfolio",
            c_nav: "Contact",

            welcomeText: "Welcome",
            aboutText:"About Me",
            portfolioText:"Projects",
            contactText: "Contact",

            aboutText2: "Hello, my name is Łukasz and for several years I have been interested in web programming of websites as well as computer games."+
                        "Currently, I am a third-year student of Computer Science and Econometrics with a specialization in game and VR application programming at the Frycz Modrzewski Academy in Krakow."+
                        "In free time, I actively practice martial arts and engage in various physical activities, as well as expand my knowledge of algorithms and technologies.",
                        
            aboutText3: "My skills",

            skillsText1: "Technologies",
            skillsText2: "Frameworks",


            contactName: "Your name",
            contactMail: "Your e-mail",
            contactSubject: "Subject",
            contactMsg: "Your Messange",
            contactSubmit: "Submit",
        },

        pl:
        {
          animText: "Witam człowieki, to moja strona portfolio."+
                "Jeśli chcecie się skontaktować możecie przejśc do sekcji O mnie lub Kontakt."+
                "Dzieki za wizyte :))",

            h_nav: "Glowna",
            a_nav: "O mnie",
            p_nav: "Projekty",
            c_nav: "Kontakt",

            aboutText: "O mnie",
            portfolioText: "Projekty",
            contactText: "Kontakt",
            welcomeText: "Witaj",

            aboutText2: "Cześć, mam na imię Łukasz i od paru lat interesuje się programowaniem webowym stron internetowych, a także gier komputerowych."+ 
                         "Obecnie jestem studentem III roku Informatyki i Ekonometrii ze specjalizacją projektowanie gier i aplikacji VR, na Krakowskiej Akademii Im.Frycza Modrzewskiego w Krakowie."+
                         "W wolnym czasie czynnie trenuje sztuki walki i wszelkiego rodzaju aktywność fizyczną, a także poszerzam swoją wiedzę z algorytmiki i technologii.",
                        
            aboutText3: "Co potrafie",

            skillsText1: "Technologie",
            skillsText2: "Frameworki",

            aboutSkillsKnowledge1: "Rozwiązywanie problemów",
            aboutSkillsKnowledge2: "Znajomośc algorytmów",

            contactName: "Imie",
            contactMail: "Adres e-mail",
            contactSubject: "Temat wiadomosci",
            contactMsg: "Tresc wiadomosci",
            contactSubmit: "Wyslij",
        },

        ua:
        {
          animText: "Привіт, люди, це мій веб-сайт із портфоліо."+ 
                 "Якщо ви хочете зв’язатися зі мною, будь ласка, перейдіть до розділу «Про нас» або «Контакти»."+
                 "Дякую за візит ))",
        
            h_nav: "додому",
            a_nav: "про мене",
            p_nav: "портфоліо",
            c_nav: "контакт",

            welcomeText: "Привіт",

            goText: " старт",
            aboutText:"про мене",
            aboutText2: "Привіт!, мене звати Лукаш і я вже декілька років захоплююся веб-програмуванням сторінок та комп'ютерних ігор."+ 
                         "Наразі я є студентом третього курсу комп'ютерних наук та економіки зі спеціалізацією на розробці ігор та VR-додатків в Краківській Академії імені Анджей Фрич Моджевський в Кракові."+
                         "У вільний час я активно займаюся бойовими мистецтвами та різними фізичними активностями, а також поглиблюю свої знання з алгоритміки та технологій.",
                        
            aboutText3: "що я знаю:",

            skillsText1: "Технології",
            skillsText2: "Каркаси",

            portfolioText:"портфолі",
            contactText:"контакт",

            contactName: "твоє ім'я",
            contactMail: "ваша пошта",
            contactSubject: "тема",
            contactMsg: "повідомлення",
            contactSubmit: "відправити",
        },

        de:
        {

          animText: "Hallo Menschen, dies ist meine eigene Portfolio-Website."+ 
                  "Wenn Sie Kontakt mit mir wünschen, wechseln Sie bitte zum Bereich „Über mich“ oder „Kontakt“."+ 
                  "Danke für Ihren Besuch :))",
            h_nav: "Heim",
            a_nav: "Über mich",
            p_nav: "Portfolio",
            c_nav: "Kontakt",

            welcomeText: "Hallo",
            aboutText:"Über mich",
            aboutText2: "Hallo, mein Name ist Lukasz und seit einigen Jahren interessiere ich mich für das Web-Programmieren von Websites sowie Computerspielen."+ 
                         "Derzeit bin ich ein Student im dritten Jahr Informatik und Econometrics mit einer Spezialisierung auf die Gestaltung von Spielen und VR-Anwendungen an der Andrzej Frycz Modrzewski Akademie in Krakau."+
                         "In meiner Freizeit trainiere ich aktiv Kampfkünste und betreibe verschiedene körperliche Aktivitäten, sowie erweitere mein Wissen über Algorithmen und Technologie.",
                         
            aboutText3: "Fähigkeiten",

            skillsText1: "Technologien",
            skillsText2: "Framework",

            portfolioText:"Portfolio",
            contactText:"Kontakt",

            contactName: "Ihren Namen",
            contactMail: "E-mail Adresse",
            contactSubject: "Betreff der Nachricht",
            contactMsg: "Nachrichteninhalt",
            contactSubmit: "Schicken",
        }
    };

        $(document).ready(function()
        {
            changeLanguage("en");
        });

        $("#en").click(() => changeLanguage("en"));
        $("#pl").click(() => changeLanguage("pl"));
        $("#ua").click(() => changeLanguage("ua"));
        $("#de").click(() => changeLanguage("de"));
