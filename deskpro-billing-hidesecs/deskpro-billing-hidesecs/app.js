define([], function () {
  return {
    init: function () {
      var style = '<style type="text/css">.billing-seconds-input, .timelen-sep-minutes, .timelen-display-seconds { display: none !important; }</style>';
      $('body').append(style);
    }
  }
});