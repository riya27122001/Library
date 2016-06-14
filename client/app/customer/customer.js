'use strict';

angular.module('libraryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer', {
        url: '/customer',
        template: '<customer></customer>'
      });
  });
