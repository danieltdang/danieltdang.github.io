// Scrolling effect for navbar: https://jquery.com/download/
$(document).ready(function () {
  $(".button").click(function() {
    targetName = $(this).attr("href");
    targetLocation = $(targetName).offset().top;
    $("html, body").animate({scrollTop:targetLocation}, "slow");
    return false;
  });
});

// Change style for active section for navbar and add transparent class when in splash
const sections = $("section").toArray();
const navButton = $("nav a").toArray();
const navFirst = $("nav #menu li:first-child a");
const navHamburger = $("nav #menu .icon");
const navBar = $("nav");

window.onscroll = function() {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - ($("nav #menu").height() + parseInt($("section").css("padding-top")))) {
      current = section.getAttribute("id");
    }
  });

  navButton.forEach((a) => {
    a.classList.remove("active");
    if ($(a).attr("href") == "#" + current) {
      a.classList.add("active");
      
      navBar.removeClass("transparent");
      if (navFirst.hasClass("active")) {
        navBar.addClass("transparent"); 
      }
    }
  });
};

// Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon
const navMenu = $("nav #dropdown");

function myNavMenu() {

  if (!$(navMenu).attr("class").includes("responsive")) {
    $(navMenu).addClass("responsive");
  } 
  else {
    $(navMenu).removeClass("responsive");
  }
}

// Typewriter for message under title: https://github.com/tameemsafi/typewriterjs
var message = document.getElementById('message');

var typewriter = new Typewriter(message, {
  loop: true,
  delay: 50,
  deleteSpeed: 5
});

var myTitleMessages = [
  "hey there!",
  "glad to see you here.",
  "my name is daniel.",
  "i am a sophomore at FSU.",
  "i am studying computer science.",
  "i am interested in software engineering.",
  "i am a big fan of pho.",
  "i am looking to expand my horizons in SWE.",
  "thank you for visiting!"
]

for (var i = 0; i < myTitleMessages.length; i++) {
  typewriter
    .typeString(myTitleMessages[i])
    .pauseFor(500)
    .deleteAll()
    .pauseFor(500)
}
typewriter.start();