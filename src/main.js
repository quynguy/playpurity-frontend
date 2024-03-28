console.log("main.js loaded");

$(document).ready(function(){
  $('.nav-link').click(function(e){
      e.preventDefault();
      var targetId = $(this).data('target');
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
      $('.card-body').hide();
      $('#' + targetId).show();
  });
});
