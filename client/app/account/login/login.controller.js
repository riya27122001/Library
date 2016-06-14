'use strict';
var user_role;

class LoginController {
  constructor(Auth, $state) {
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          
          
          if ((this.Auth.getCurrentUser().role == 'user')) {
            this.$state.go('customer');
          }
          else if (this.Auth.getCurrentUser().role == 'admin') {
            this.$state.go('librarian');
          }
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('libraryApp')
  .controller('LoginController', LoginController);
