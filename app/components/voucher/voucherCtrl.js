angular.module('SmawgApp.controllers').controller('VoucherCtrl', function ($scope, $http) {
  $http.get('http://localhost:3000/api/v1/org/ACME/years/2015/vouchers').success(function(data, status, headers, config) {
    $scope.vouchers = data;
    $scope.vouchersStatus = status;
  });
  $scope.voucherNbr = 0;
  $scope.description = "";
  $scope.date = "";
  $scope.AccountRows=[{account_number: 0, debit: 0, credit: 0}];
  $scope.addAccountRow = function(){
    $scope.AccountRows.push({account_number: 0, debit: 0, credit: 0});
  };
  
  $scope.removeAccountRow = function(index) {
    $scope.AccountRows.splice(index, 1);
  };

  $scope.TotalDebit = function(){
    var sum = 0;
    angular.forEach($scope.AccountRows, function(item) {
      sum += item.debit;
    });
    return sum;
  };

 $scope.TotalCredit = function(){
    var sum = 0;
    angular.forEach($scope.AccountRows, function(item) {
      sum += item.credit;
    });
    return sum;
  };

  $scope.SaveVoucher = function() {
    var command = ['http://localhost:3000/api/v1/org/ACME/years/2015/vouchers', {"voucher": {"number": $scope.voucherNbr, "description": $scope.description, "date": $scope.date, "voucher_rows_attributes": $scope.AccountRows}}];
    console.log(command);
    $http.post('http://localhost:3000/api/v1/org/ACME/years/2015/vouchers', {"voucher": {"number": $scope.voucherNbr, "description": $scope.description, "date": $scope.date, "voucher_rows_attributes": $scope.AccountRows}}).success(function(data, status, headers, config) {
      console.log("successfully added voucher to DB");
    });
  };

});
