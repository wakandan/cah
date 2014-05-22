'use strict';

angular.module('mean.cah').controller('CahController', ['$scope', 'Global',
    function($scope, Global, Cah) {
        $scope.global = Global;
        $scope.package = {
            name: 'cah'
        };
    }
]);
