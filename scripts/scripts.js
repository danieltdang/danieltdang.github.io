// Scrolling effect for navbar: https://jquery.com/download/
jQuery(document).ready(function () {
    jQuery('.button').click(function() {
      targetName = jQuery(this).attr('href');
      targetLocation = jQuery(targetName).offset().top;
      jQuery('html, body').animate({scrollTop:targetLocation}, 'slow');
      return false;
    });
  });

// Typewriter for sub-title: https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();