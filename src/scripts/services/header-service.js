'use strict';

angular.module('header')
    .factory('headerService', function HeaderService() {
        return {
            getName: getName
        };

        function getName() {
        	return "User";
        }
});