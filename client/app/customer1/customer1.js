'use strict';

angular.module('libraryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('customer1', {
        url: '/customer1',
        template: '<customer-1></customer-1>'
      });
  });
