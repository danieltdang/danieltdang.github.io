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

$(window).scroll(function() {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - ($("nav").height() + parseInt($("section").css("padding-top")))) {
      current = section.getAttribute("id");
    }
  });

  navButton.forEach((a) => {
    if ($(a).attr("href") == "#" + current && !$(a).attr("class").includes("active")) {
      a.classList.add("active");
    }
    else if ($(a).attr("href") != "#" + current && $(a).attr("class").includes("active")) {
      a.classList.remove("active");
    }

    if (navFirst.hasClass("active")) {
      navBar.addClass("transparent"); 
    }
    else {
      navBar.removeClass("transparent");
    }
  });
});

// Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon
const navMenu = $("nav #dropdown");

function myNavMenu() {

  if (!$(navMenu).attr("class").includes("responsive")) {
    $(navMenu).addClass("responsive");
  } 
  else {
    $(navMenu).removeClass("responsive");
  }

  // Handles special cases where navbar goes to section that is/isn't transparent when it isn't/is transparent
  for (let i = 0; i <= 1600; i++)
  setTimeout(() => {window.dispatchEvent(new CustomEvent("scroll"))}, 1);
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