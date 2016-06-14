'use strict';

describe('Component: Customer1Component', function () {

  // load the controller's module
  beforeEach(module('libraryApp'));

  var Customer1Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Customer1Component = $componentController('Customer1Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
