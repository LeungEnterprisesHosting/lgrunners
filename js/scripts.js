'use strict';

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      if (!$('.navbar-custom').hasClass('scrolled')) {
        $('.navbar-custom').addClass('scrolled');
      }
    } else {
      if ($('.navbar-custom').hasClass('scrolled')) {
        $('.navbar-custom').removeClass('scrolled');
      }
    }
  });
});