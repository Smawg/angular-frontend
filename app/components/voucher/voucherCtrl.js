angular.module('SmawgApp.services')
  .factory('VoucherService', ['Restangular', '$q', 'AuthService', function VoucherService(Restangular, $q, AuthService) {
    var org = AuthService.getUserInfo().organisation;
    Restangular.setBaseUrl('http://localhost:3000/api/v1/org/' + org + '/years/2015');
    return {
      getVouchers : function() {
        var vouchersDeferred = $q.defer();
        var response = Restangular.all('vouchers').getList().then(function(response) {
          vouchersDeferred.resolve(response[0]);
        });
        return vouchersDeferred.promise;
      },
      saveVoucher : function(voucher) {
        var vouchersDeferred = $q.defer();
        var response = Restangular.vouchers.save.then(function(response) {
          vouchersDeferred.resolve(response[0]);
        });
        return vouchersDeferred.promise;
      }
    };
  }]);
angular.module('SmawgApp.controllers').controller('VoucherCtrl', function ($scope, VoucherService) {
  $scope.vouchers = VoucherService.getVouchers();
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
    var voucher = {"voucher": {"number": $scope.voucherNbr, "description": $scope.description, "date": $scope.date, "voucher_rows_attributes": $scope.AccountRows}};
    VoucherService.saveVoucher(voucher);
    console.log("successfully added voucher to DB");
  };
});
