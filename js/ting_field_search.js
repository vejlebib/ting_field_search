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
  });
})(jQuery);
