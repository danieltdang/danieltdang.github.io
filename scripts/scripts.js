// Scrolling effect for navbar
jQuery(document).ready(function () {
    jQuery('.button').click(function() {
      targetName = jQuery(this).attr('href');
      targetLocation = jQuery(targetName).offset().top;
      jQuery('html, body').animate({scrollTop:targetLocation}, 'slow');
      return false;
    });
  });