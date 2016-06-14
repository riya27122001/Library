'use strict';

angular.module('libraryApp.auth', ['libraryApp.constants', 'libraryApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
