console.log("main.js loaded");

$(document).ready(function(){
  $('.tab-link').click(function(e){
      e.preventDefault();
      var targetId = $(this).data('target');
      $('.tab-link').removeClass('active');
      $(this).addClass('active');
      $('.tab-body').hide();
      $('#' + targetId).show();
  });
});

