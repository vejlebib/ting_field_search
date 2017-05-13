(function($) {
  'use strict';

  function updateSelect() {
    $('.form-type-select.form-item-ting-field-search select').select2();
  }

  function changeSelect() {
    $('.page-search-ting .form-item-ting-field-search').insertAfter('.form-wrapper.collapse-processed'); 
  }


  $(document).ready(function() {
    updateSelect();
    changeSelect();

    if ($('.form-item-ting-field-search').length && $('div#search-radios').length == 0) {
      $("#search-block-form .form-actions.form-wrapper").insertBefore($(".form-item-ting-field-search"));
    }
  });
})(jQuery);
