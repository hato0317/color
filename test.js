jQuery(function(){
    jQuery('a[href^="#"]').click(function(){
      var speed = 400;
      var href = jQuery(this).attr("href");
      var target = jQuery(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -50;
      jQuery('body,html').animate({scrollTop:position},speed,'swing');
      return false;
    });
  });
  jQuery(function(){
    jQuery('#labo-button').click(function(){
      var colorGroup = jQuery('#children,#female,#adult');
      var colorButton = jQuery('#children-button,#female-button,#adult-button');
      jQuery(colorGroup).fadeOut();
      jQuery('#labo').hide().fadeIn();
      jQuery(colorButton).fadeOut();
      jQuery('.colorTitle').fadeOut();
    });
  });
  jQuery(function(){
    var colorGroup = $('#children,#female,#adult');
    jQuery('#colors').click(function(){
      jQuery('#children').hide().fadeIn();
      jQuery('#labo').fadeOut();
      jQuery(colorButton).fadeIn();
    });
  });
  jQuery(function(){
    jQuery('#labo').hide();
  });
  
