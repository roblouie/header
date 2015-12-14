'use strict';

describe('Service: headerService', function () {

  // load the service's module
  beforeEach(module('header'));

  // instantiate service
  var headerService;
  beforeEach(inject(function (_headerService_) {
    headerService = _headerService_;
  }));

  it('should return name on getName()', function () {
    expect(headerService.getName()).toBe('User');
  });

});
