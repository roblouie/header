'use strict';

angular.module('header')
  .directive('header', function (headerService) {
    return {
      template: '<div>Hi, {{name}}, this is a test header</div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
      	scope.name = headerService.getName(); 
      }
    };
  });