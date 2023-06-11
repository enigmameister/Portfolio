/* visits */

$(document).ready(function() {
  $.get("visits.php")
    .done(function(response) {
      var currentCount = parseInt(response);
      var startCount = 999; // Początkowa wartość licznika
      var duration = 1500; // Czas trwania animacji w milisekundach

      $('.visitCount').text(startCount).animateNumber({
        number: currentCount,
        easing: 'swing',
        numberStep: function(now, tween) {
          var formattedValue = Math.floor(now);
          $(tween.elem).text(formattedValue);
        }
      }, duration);
    })
    .fail(function(error) {
      console.log('Błąd zapytania AJAX odnośnie odwiedzin:', error);
    });
});


$('.scrollBtn, .h_nav, .a_nav, .p_nav, .c_nav, #btn-home').on('click', function(event) {
  event.preventDefault();

  const scrollTo = $(this).data('scroll-to');
  
  if (scrollTo === undefined)
    $('html, body').animate({ scrollTop: 0 }, 0);

   else 
   {
    $('html, body').animate({
      scrollTop: $(scrollTo).offset().top
    }, 'slow');
  }
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
    $('nav, .toggleTheme, .toggleLang, .containerLogo, .toggleMenu').removeClass('active');
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

$(document).ready(function() {
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let isDesktop = screen.width > 776;
    let isScrolled = scroll > 40;

    if (isScrolled && isDesktop) {
      setDesktopStyles();
    } else if (!isScrolled && isDesktop) {
      setPositionZeroDesktopStyles();
    } else if (scroll > 25 && !isDesktop) {
      setMobileStyles();
    } else if (scroll < 25 && !isDesktop) {
      setPositionZeroMobileStyles();
    }
  });
});

function setDesktopStyles()
 {

  $("header").css({
    "background": "var(--navDesktop)",
    "display": "block"
  });

  $(".toggleLang, .toggleTheme").css({
    "opacity": "0%",
    "transition": "all 0.5s ease 0s"
  });

  $("header nav").css({
    "float":"none",
    "top":"0",
    "right":"0",
    "position": "fixed",
    "transition": "all 1s ease 0s",
    "scale": "0.7"
  });

  $(".containerLogo").css({
    "scale": "0.7",
    "transition": "all 1s ease 0s"
  });

  $(".scrollUp").css({
    "display": "none"
  });
}

function setPositionZeroDesktopStyles() 
{
  $("header").css({
    "background": "transparent",
    "display": "block"
  });
  $(".toggleLang, .toggleTheme").css({
    "opacity": "100%",
    "transition": "all 0.5s ease 0s"
  });

  $("header nav").css({
    "float":"right",
    "transform": "translate(0vw)",
    "transition": "all 1s ease 0s",
    "scale": "1"
  });
  $(".containerLogo").css({
    "scale": "1",
    "transition": "all 1s ease 0s"
  });
  $(".scrollUp").css({
    "display": "none"
  });
}

function setMobileStyles() 
{
  $("header").css({
    "display": "none"
  });
  $(".scrollUp").css({
    "display": "block"
  });
}

function setPositionZeroMobileStyles() {
  $("header").css({
    "display": "block"
  });
  $(".scrollUp").css({
    "display": "none"
  });
}

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

    let loadbackground = function () {
      const storedHref = localStorage.getItem('href');
      if (storedHref) {
        document.getElementById('theme_css').setAttribute('href', storedHref);
      }
    }
    
    window.onload = loadbackground;

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
          animText: "This is my portfolio website."+
          "If you want contact with me please move to About or Contact section."+
          "For change theme click paint icon, for other language click alphabet icon."+
          "Enjoy.",

          visitText:"Visits:",

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
                    "Jeśli chcesz się skontaktować przejdź do sekcji O mnie lub Kontakt."+
                    "Aby zmienić motyw strony, kliknij na ikonkę wypełnienia, dla zmiany języka wybierz ikone alfabetu."+
                    "Dzięki!",

          visitText:"Odwiedzin:",
          
            h_nav: "Główna",
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
          

            contactHeader: "Kontakt",
            contactName: "Twoje Imie",
            contactMail: "Adres e-mail",
            contactSubject: "Temat wiadomości",
            contactMessange: "Treść wiadomosci",
            contactSubmit: "Wyślij",
        },

        ua: // ukrainian translation
        {
          animText: "це мій веб-сайт із портфоліо."+ 
                 "Якщо ви хочете зв’язатися зі мною, будь ласка, перейдіть до розділу «Про нас» або «Контакти»."+
                 "Щоб змінити тему, клацніть значок малювання, для іншої мови клацніть значок алфавіту.",

            visitText:"відвідування: ",
      
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
                  "Wenn Sie Kontakt mit mir wünschen, wechseln Sie bitte zum Bereich „Über mich“ oder „Kontakt“."+
                  "Um das Thema zu ändern, klicken Sie auf das Farbsymbol, für eine andere Sprache klicken Sie auf das Alphabet-Symbol.",
    
           visitText:"Besuche: ",

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


        function disableScroll()
        {
          $('body').addClass('no-scroll');
        }

        function enableScroll()
        {
          $('body').removeClass('no-scroll');
        }
        
        /* Mail form received & display sendBox */
        $(document).ready(function() {
          console.log("Skrypt działa[1]");
          $(".mailForm").on("submit", function(event) {
            event.preventDefault();
            disableScroll();
            console.log("Submit działa[2]");
        
            var $form = $(this);
        
            var url = $form.attr("action");
            var term = $form.serialize();
            console.log($form, " działa[3]");
        
            // Wyślij dane za pomocą metody POST
            var posting = $.post(url, term);
        
            posting.done(function(response) 
            {
              var jsonString = response.substring(response.indexOf("{")); // Usuń dodatkowe dane przed obiektem JSON
              var obj = JSON.parse(jsonString); // Sparsuj oczyszczoną odpowiedź jako obiekt JSON

              console.log("Obsługa .done działa[4a]- status: ", obj);
              $('.mailSend').addClass('active');

              if (obj.status === 'success') 
              {
                console.log("Status OK[6]");
                $('.msb_confirmed').css('display', 'block');
              } 

              else 
              {
                console.log("Status failed[6]");
                $('.msb_refused').css('display', 'block');
              }
              disableScroll();
            });
        
            posting.fail(function()
             {
              console.log("Błąd zapytania AJAX[4b]");
              $('.mailSend').addClass('active');
              $('.msb_refused').css('display', 'block');
              disableScroll();
            });
        
            posting.always(function() {
              console.log(posting, ": metoda POST działa");
            });
        
          });
        });
        
        
          $('.msb_button').click(function()
          {
            $('.mailSend').removeClass('active');
            $('#msbConfirmed').hide();
            $('#msbRefused').hide();
            enableScroll();
          });

          $('.mailSend').on('wheel',function(e)
          {
            e.preventDefault();
          });
        
const swiper = new Swiper('.swiper', {
  speed: 400,
  observer: true,
  observeParents: true,
  parallax: true,
  slidesPerView: 1,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,

  effect: 'fade',
  
  fadeEffect: 
  {
    crossFade: true
  },

  navigation: 
  {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: 
  {
    el: '.swiper-pagination',
    type: 'fraction',
  }

});
