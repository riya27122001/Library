'use strict';
(function(){

class CustomerComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
	this.socket = socket;
	this.awesomeBooks = [];

	$scope.$on('$destroy', function() {
	   socket.unsyncUpdates('book');
	});
  }

  $onInit() {
      this.$http.get('/api/books')
        .then(response => {
          this.awesomeBooks = response.data;
          this.socket.syncUpdates('book', this.awesomeBooks);
        });
   }

   borrowBook(book) {
      if (book.title) {
        this.$http.put('/api/books/' + book._id, {
          title: book.title,
		  publisher: book.pub,
		  author: book.author,
		  date_added: book.date,
		  count: (book.count - 1)
        });
        this.upBook.title = '';
        this.upBook.pub = '';
        this.upBook.author = '';
        this.upBook.date = '';
        this.upBook.count = '';
      }
    }

}

angular.module('libraryApp')
  .component('customer', {
    templateUrl: 'app/customer/customer.html',
    controller: CustomerComponent
  });

})();
