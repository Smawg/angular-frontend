/**
 * This is an example controller.
 * It triggers the UserdataService and puts the returned value on the scope
 *
 * @see services
 */
angular.module('SmawgApp.controllers').controller('HomeCtrl', function ($scope) {
  console.log("HOME");
});

angular.module('SmawgApp.controllers').controller('VoucherCtrl', function ($scope, $http) {
    $http.get('http://localhost:3000/api/v1/org/ACME/years/2015/vouchers').success(function(data, status, headers, config) {
        $scope.vouchers = data;
        $scope.vouchersStatus = status;
    });
});
