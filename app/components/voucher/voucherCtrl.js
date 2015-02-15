angular.module('SmawgApp.controllers').controller('VoucherCtrl', function ($scope, $http) {
  $http.get('http://localhost:3000/api/v1/org/ACME/years/2015/vouchers').success(function(data, status, headers, config) {
    $scope.vouchers = data;
    $scope.vouchersStatus = status;
  });
  $scope.AccountRows=[{account_number: "", debet: "", kredit:""}];
  $scope.addAccountRow = function(){
    $scope.AccountRows.push({account_number: "", debet: "", kredit: ""});
  };
});
