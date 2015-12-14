describe('Directive:  header', function() {
  var $compile,
      $rootScope,
      headerServiceMock;

  beforeEach(module('header'));

  beforeEach(inject(function(_$compile_, _$rootScope_, $injector){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    var headerService = $injector.get('headerService');
    spyOn(headerService, "getName").and.returnValue('Test User');
  })); 

  it('Replaces the element with the appropriate content', function() {
    var element = $compile("<header></header>")($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain("Hi, Test User, this is a test header");
  });
});