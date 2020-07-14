$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -50;
      $('body,html').animate({scrollTop:position},speed,'swing');
      return false;
    });
  });
  $(function(){
    $('#labo-button').click(function(){
      var colorGroup = $('#children,#female,#adult');
      var colorButton = $('#children-button,#female-button,#adult-button');
      $(colorGroup).fadeOut();
      $('#labo').hide().fadeIn();
      $(colorButton).fadeOut();
      $('.colorTitle').fadeOut();
    });
  });
  $(function(){
    var colorGroup = $('#children,#female,#adult');
    $('#colors').click(function(){
      $('#children').hide().fadeIn();
      $('#labo').fadeOut();
      $(colorButton).fadeIn();
    });
  });
  $(function(){
    $('#labo').hide();
  });
  
