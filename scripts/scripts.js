// Scrolling effect for navbar: https://jquery.com/download/
jQuery(document).ready(function () {
  jQuery('.button').click(function() {
    targetName = jQuery(this).attr('href');
    targetLocation = jQuery(targetName).offset().top;
    jQuery('html, body').animate({scrollTop:targetLocation}, 'slow');
    return false;
  });
});

// Adds container class to all li in Skills section
jQuery('#skills .bulletless > li').addClass('container column center');

// Typewriter for sub-title: https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('message');

var typewriter = new Typewriter(app, {
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