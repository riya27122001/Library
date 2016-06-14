'use strict';
(function(){

class Customer1Component {
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

    addBook() {
      if (this.newBook.title) {
        this.$http.post('/api/books', {
          title: this.newBook.title,
		  publisher: this.newBook.pub,
		  author: this.newBook.author,
		  date_added: this.newBook.date,
		  count: this.newBook.count
        });
        this.newBook.title = '';
        this.newBook.pub = '';
        this.newBook.author = '';
        this.newBook.date = '';
        this.newBook.count = '';
      }
    }

    editBook(book) {
      if (this.upBook.title) {
        this.$http.put('/api/books/' + book._id, {
          title: this.upBook.title,
		  publisher: this.upBook.pub,
		  author: this.upBook.author,
		  date_added: this.upBook.date,
		  count: this.upBook.count
        });
        this.upBook.title = '';
        this.upBook.pub = '';
        this.upBook.author = '';
        this.upBook.date = '';
        this.upBook.count = '';
      }
    }

    deleteBook(book) {
      this.$http.delete('/api/books/' + book._id);
    }
}

angular.module('libraryApp')
  .component('customer1', {
    templateUrl: 'app/customer1/customer1.html',
    controller: Customer1Component
  });

})();
