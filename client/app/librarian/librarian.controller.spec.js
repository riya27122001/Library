'use strict';

describe('Component: LibrarianComponent', function () {

  // load the controller's module
  beforeEach(module('libraryApp'));

  var LibrarianComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LibrarianComponent = $componentController('LibrarianComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
