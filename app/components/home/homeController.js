/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */
var controllers = angular.module('SmawgApp.controllers', [])
    .controller('HomeController', function ($scope, UserdataService) {

        UserdataService.getFirstUsername().then(function(firstUsername) {
            $scope.firstUsername = firstUsername;
        }); 

    });

controllers.controller('DashController', function ($scope, UserdataService) {

        UserdataService.getFirstUsername().then(function(firstUsername) {
            $scope.firstUsername = firstUsername;
        }); 

    });
controllers.controller('VoucherController', function ($scope, $http) {

        $http.get('http://localhost:3000/api/v1/org/ACME/years/2015/vouchers').success(function(data, status, headers, config) {
            $scope.vouchers = data;
            $scope.vouchersStatus = status;
        });
    });
