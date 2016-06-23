(function(module) {
  var bookmarkView = {};

  bookmarkView.modal = function() {
    $('#cross-button').on('click', function() {
      $('#login').removeClass('show');
      $('div.modal-backdrop').removeClass('modal-backdrop');
    });

    $('#login-button').on('click', function() {
      $('#login').addClass('show');
    });

  };
  bookmarkView.nav = function() {
    $('#logout-button').addClass('hide');
    $('#login-button').on('click', function() {
      $('#login').addClass('show');
      $('#logout-button').removeClass('hide').addClass('show');
    });

  };
  bookmarkView.modal();
  bookmarkView.nav();
  module.bookmarkView = bookmarkView;
})(window);
