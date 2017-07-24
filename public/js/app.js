$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this).addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  $(window).scroll(function () {
      var pos = $(window).scrollTop();
    if(pos > 300) {
      $('#nav_env').addClass('navbar-fixed');
    }
    if (pos < 301) {
      $('#nav_env').removeClass('navbar-fixed');
    }
  });
  var mainHypeHeight = $('#pub-banner .main-hyoe>.card-panel').height();
  var subHype = $('#pub-banner .sub-hyoe .card-panel').height(mainHypeHeight/2 - 33);
});