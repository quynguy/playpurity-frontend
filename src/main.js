console.log("main.js loaded");

$(document).ready(function() {
    for (var i = 0; i < 4; i++) {
      var card = $('<div class="card">Card ' + (i + 1) + '</div>');
      $('#card-container').append(card);
    }
  });