'use strict';

angular.module('mean.cah').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('cah example page', {
            url: '/cah/example',
            templateUrl: 'cah/views/index.html'
        });
        $stateProvider.state('cah rooms list', {
            url: '/cah/rooms',
            templateUrl: 'cah/views/index.html'
        });
    }
]);
