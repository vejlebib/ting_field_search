(function($) {
  'use strict';

  Drupal.behaviors.ting_field_search = {
    attach: function (context, settings) {
      // Update select.
      $('.form-type-select.form-item-ting-field-search select', context).select2();

      // Change select.
      $('.page-search-ting .form-item-ting-field-search', context).insertAfter('.form-wrapper.collapse-processed');

      if (!($('.ding-user-header').length)) {
        $('.search-field-wrapper .form-actions.form-wrapper', context).insertAfter('.search-field-wrapper .form-item-search-block-form');
      }

      if ($('#search-radios').length) {
        $('.header-inner').attr('id', 'header-inner-field');
      }
    }
  };
})(jQuery);
