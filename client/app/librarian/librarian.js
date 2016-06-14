'use strict';

angular.module('libraryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('librarian', {
        url: '/librarian',
        template: '<librarian></librarian>'
      });
  });
