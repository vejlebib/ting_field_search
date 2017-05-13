(function($) {
  'use strict';

  function updateSelect() {
    $('.form-type-select.form-item-ting-field-search select').select2();
  }

  function changeSelect() {
    $('.page-search-ting .form-item-ting-field-search').insertAfter('.form-wrapper.collapse-processed'); 
  }

//   $('.form-actions').each(function () {
//     $(this).insertBefore($(this).prev('.form-item-ting-field-search'));
// });
if ($('.ding-user-header-block').length) {
  $(".form-actions.form-wrapper").insertbefore($(".search-radios-inline"));
// $( "h2" ).insertAfter( $( ".container" ) );
}

  $(document).ready(function() {
    updateSelect();
    changeSelect();
  });
})(jQuery);
