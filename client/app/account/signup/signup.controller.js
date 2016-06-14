'use strict';
var user_role = 'admin';

class SignupController {
  //end-non-standard

  constructor(Auth, $state) {
      this.Auth = Auth;
      this.$state = $state;
    }
    //start-non-standard


  register(form) {
    this.submitted = true;

    if (form.$valid) {
      if (this.user.role=='Customer') {
        user_role = 'user';
      }

      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          role: user_role,
          password: this.user.password
        })
        .then(() => {
          // Account created, redirect to home
          if (this.user.role=='Customer') {
            this.$state.go('customer');
          }
          else if (this.user.role=='Librarian') {
            this.$state.go('librarian');
          }
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}

angular.module('libraryApp')
  .controller('SignupController', SignupController);
