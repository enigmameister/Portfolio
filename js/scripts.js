$('.scrollBtn, .a_nav, .p_nav, .c_nav').on('click', function(event) {
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


// white theme toggle switch color
$(document).ready(function()
{
                  $('.toggleMenu').click(function()
                  {
                    $('nav, .toggleTheme, .toggleLang, .containerLogo, .toggleMenu').toggleClass('active')
                  })
        })

$(document).ready(function()
{
                  $('nav ul li a').click(function()
                  {
                    $('nav, .toggleTheme, .toggleLang, .containerLogo, .toggleMenu').removeClass('active')
                  })
 })

 $(document).ready(function()
  {
  // Toggle nav menu
  function toggleMenu() {
    $('.toggleMenu').toggleClass('open');
    $('.h_nav').toggleClass('menu');
    $('body').toggleClass('menu-open');
  }
  
  // Close menu function
  function closeMenu()
  {
    $('.toggleMenu').removeClass('open');
    $('.h_nav').removeClass('menu');
    $('body').removeClass('menu-open');
  }
  
  // Click outside menu 
  $(document).click(function(e) {
    if (!$(e.target).is('.toggleMenu') && !$(e.target).parents().is('.toggleMenu')) 
    {
      $('nav').removeClass('active');
      closeMenu();
    }
  });
  
  // Click menu icon 
  $('.toggleMenu').click(function()
   {
    toggleMenu();
  });
  
  // Click in any a
  $('nav ul li a').click(function() 
  {
    closeMenu();
  });
});

        $(document).ready(function()
         {
          $(window).scroll(function()
           {
            let scroll = $(window).scrollTop();
            
              if (scroll > 25 && screen.width > 776) // Desktop
              { 
                $("header").toggleClass("scroll");
                $("header").css({"display": "block"});
                $(".scrollUp").css({"display": "none"}); 
              } 
              else
              { 
                $("header").removeClass("scroll");
                $("header").css({"background": "rgba(0, 0, 0, 0)", "display": "block"});
                $(".scrollUp").css({"display": "none"});
              }
          
            if(scroll > 25 && screen.width < 776) // Mobile
            {
              $("header").removeClass("scroll");
              $("header").css({"display": "none"}); 
              $(".scrollUp").css({"display": "block"}); 
            }
            else
            {
              $("header").css({"display": "block"});
              $(".scrollUp").css({"display": "none"});  
            }
          });
        });
        



$(".scrollUp").on("click", function() 
	{
    $('html,body').animate({
        scrollTop: $('html').offset().top},
        500);
	});


/* toggle theme/lang */
$('.themePicker').hide();
$('.toggleTheme, .themeClosepicker, .themeRed, .themeLime, .themeWhite, .themeDefault').click(function()
 {
    $('.toggleTheme, .themePicker').toggle('1000')
  });


  $('.langPicker').hide();
  $('.toggleLang, .langClosepicker, .langEn, .langPl, .langUa, .langDe').click(function() 
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


// animating text
function writtingText(text,index,time) 
{
  if (index < text.length) 
  {
    document.getElementsByClassName("animText")[0].innerHTML = ""; // clear text from id for no duplicate
    document.getElementsByClassName("animText")[0].innerHTML += text.substring(0,index+1); 
    index++;
    setTimeout(function() 
    { 
      writtingText(text, index, time); 
    }, time);
  }
}

let text = document.getElementsByClassName('animText')[0].textContent;
let time = 20;
let index = 0;

writtingText(text, index, time);

/* language change */
function changeLanguage(lang)
{
    let translations = language[lang];
    Object.keys(translations).forEach((key) => {
        $(`.${key}`).text(translations[key]);

        if(key.startsWith("contact"))
          {
            const fieldName = key.replace("contact", "").toLowerCase();
            $(`input[name="${fieldName}"]`).attr("placeholder", translations[key]);
          }

        if(key === "contactSubmit")
            $(".contactSubmit").val(translations[key]);
    });
}

    let language = 
    {
        en: // english translation
        {
          animText: "This is my own portfolio website."+
                  "If you want contact with me please move to About or Contact section.",
 
            h_nav: "Home",
            a_nav: "About me",
            p_nav: "Portfolio",
            c_nav: "Contact",

            scrollBtn: "START",

            welcomeText: "Welcome",
            aboutHeader1:"About Me",
            portfolioHeader:"Projects",
            contactText: "Contact",

            aboutText: "Hello, my name is Łukasz and for several years I have been interested in web programming of websites as well as computer games."+
                        "Currently, I am a third-year student of Computer Science and Econometrics with a specialization in game and VR application programming at the Frycz Modrzewski Academy in Krakow."+
                        "In free time, I actively practice martial arts and engage in various physical activities, as well as expand my knowledge of algorithms and technologies.",
                        
            aboutHeader2: "My skills",

            skillsText1: "Technologies",
            skillsText2: "Frameworks",

            aboutHeader3: "Socials",

            contactHeader: "Contact",
            contactName: "Your name",
            contactMail: "Your e-mail",
            contactSubject: "Subject",
            contactMessange: "Your messange",
            contactSubmit: "Submit",
        },

        pl: // polish translation
        {
          animText: "To moja strona portfolio."+
                    "Jeśli chcecie się skontaktować możecie przejśc do sekcji O mnie lub Kontakt.",
      
            h_nav: "Glowna",
            a_nav: "O mnie",
            p_nav: "Projekty",
            c_nav: "Kontakt",

            scrollBtn: "DALEJ",

            aboutHeader1: "O mnie",
            portfolioHeader: "Projekty",
            contactText: "Kontakt",
            welcomeText: "Witaj",

            aboutText: "Cześć, mam na imię Łukasz i od paru lat interesuje się programowaniem webowym stron internetowych, a także gier komputerowych."+ 
                         "Obecnie jestem studentem III roku Informatyki i Ekonometrii ze specjalizacją projektowanie gier i aplikacji VR, na Krakowskiej Akademii Im.Frycza Modrzewskiego w Krakowie."+
                         "W wolnym czasie czynnie trenuje sztuki walki i wszelkiego rodzaju aktywność fizyczną, a także poszerzam swoją wiedzę z algorytmiki i technologii.",
                        
            aboutHeader2: "Co potrafie",

            skillsText1: "Technologie",
            skillsText2: "Frameworki",
            aboutHeader3: "Sociale",

            contactHeader: "Kontakt",
            contactName: "Twoje Imie",
            contactMail: "Adres e-mail",
            contactSubject: "Temat wiadomości",
            contactMessange: "Treść wiadomosci",
            contactSubject: "Wyślij",
        },

        ua: // ukrainian translation
        {
          animText: "це мій веб-сайт із портфоліо."+ 
                 "Якщо ви хочете зв’язатися зі мною, будь ласка, перейдіть до розділу «Про нас» або «Контакти».",
                
            h_nav: "додому",
            a_nav: "про мене",
            p_nav: "портфоліо",
            c_nav: "контакт",

            scrollBtn: "Початок",
            welcomeText: "Привіт",

            goText: " старт",
            aboutHeader1:"про мене",
            aboutText: "Привіт!, мене звати Лукаш і я вже декілька років захоплююся веб-програмуванням сторінок та комп'ютерних ігор."+ 
                         "Наразі я є студентом третього курсу комп'ютерних наук та економіки зі спеціалізацією на розробці ігор та VR-додатків в Краківській Академії імені Анджей Фрич Моджевський в Кракові."+
                         "У вільний час я активно займаюся бойовими мистецтвами та різними фізичними активностями, а також поглиблюю свої знання з алгоритміки та технологій.",
                        
            aboutHeader2: "що я знаю:",

            skillsText1: "Технології",
            skillsText2: "Каркаси",
            aboutHeader3: "Cоціальні",
            portfolioHeader:"портфолі",

            contactHeader:"контакт",

            contactName: "твоє ім'я",
            contactMail: "ваша пошта",
            contactSubject: "тема",
            contactMessange: "Ваше повідомлення",
            contactSubmit: "Надіслати",
        },

        de: // deutchland translation
        {

          animText: "Dies ist meine eigene Portfolio-Website."+ 
                  "Wenn Sie Kontakt mit mir wünschen, wechseln Sie bitte zum Bereich „Über mich“ oder „Kontakt“.",
            h_nav: "Heim",
            a_nav: "Über mich",
            p_nav: "Portfolio",
            c_nav: "Kontakt",

            scrollBtn: "Start",

            welcomeText: "Hallo",
            aboutHeader1:"Über mich",
            aboutText: "Hallo, mein Name ist Lukasz und seit einigen Jahren interessiere ich mich für das Web-Programmieren von Websites sowie Computerspielen."+ 
                         "Derzeit bin ich ein Student im dritten Jahr Informatik und Econometrics mit einer Spezialisierung auf die Gestaltung von Spielen und VR-Anwendungen an der Andrzej Frycz Modrzewski Akademie in Krakau."+
                         "In meiner Freizeit trainiere ich aktiv Kampfkünste und betreibe verschiedene körperliche Aktivitäten, sowie erweitere mein Wissen über Algorithmen und Technologie.",
                         
            aboutHeader2: "Fähigkeiten",

            skillsText1: "Technologien",
            skillsText2: "Framework",
            aboutHeader3: "Soziale",

            portfolioHeader:"Portfolio",
            contactHeader:"Kontakt",

            contactName: "Ihren Namen",
            contactMail: "E-mail Adresse",
            contactSubject: "Betreff der Nachricht",
            contactMessange: "Ihre Nachricht",
            contactSubmit: "Schicken",
        }
    };

        $(document).ready(function()
        {
            changeLanguage("en");
        });

        $(".en").click(() => changeLanguage("en"));
        $(".pl").click(() => changeLanguage("pl"));
        $(".ua").click(() => changeLanguage("ua"));
        $(".de").click(() => changeLanguage("de"));