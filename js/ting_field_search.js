(function($) {
  'use strict';

  Drupal.behaviors.ting_field_search = {
    attach: function (context, settings) {
      // Update select.
      $('.form-type-select.form-item-ting-field-search select', context).select2();

      // Change select.
      $('.page-search-ting .form-item-ting-field-search', context).insertAfter('.form-wrapper.collapse-processed');

      if ($('#search-radios').length) {
        $(".header-inner").addClass("header-inner-field");
      }
    }
  };
})(jQuery);
