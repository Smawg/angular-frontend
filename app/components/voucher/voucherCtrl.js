angular.module('SmawgApp.services')
  .factory('VoucherService', ['Restangular', '$q', 'AuthService', function VoucherService(Restangular, $q, AuthService) {
    var org = AuthService.getUserInfo().organisation;
    Restangular.setBaseUrl('http://localhost:3000/api/v1/org/' + org + '/years/2015');
    var vouchers = Restangular.all('vouchers');
    return {
      getVouchers : function() {
        var vouchersDeferred = $q.defer();
        var response = vouchers.getList().then(function(response) {
          vouchersDeferred.resolve(response);
        });
        return vouchersDeferred.promise;
      },
      saveVoucher : function(voucher) {
        var vouchersDeferred = $q.defer();
        var response = vouchers.post(voucher).then(function(response) {
          vouchersDeferred.resolve(response);
        });
        return vouchersDeferred.promise;
      }
    };
  }]);
angular.module('SmawgApp.controllers').controller('VoucherCtrl', function ($scope, VoucherService) {
  VoucherService.getVouchers().then(function(data){
    console.log(data);
    $scope.vouchers = data;
  });
  $scope.AccountRows=[];
  $scope.editVoucher=false;
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


  $scope.toggleEdit = function() {
    $scope.editVoucher = !($scope.editVoucher);  
  };
    
  $scope.SaveVoucher = function() {
    var voucher = {"voucher": {"number": $scope.voucherNbr, "description": $scope.description, "date": $scope.date, "voucher_rows_attributes": $scope.AccountRows}};
    VoucherService.saveVoucher(voucher);
    
    console.log("successfully added voucher to DB");
  };
  
  $scope.SaveEditedVoucher= function($http,index, voucherNbr, description, date, voucher_rows_attributes){
    var voucher = {"voucher": {"number": voucherNbr, "description": description, "date": date, "voucher_rows_attributes": voucher_rows_attributes}};
    $http.post("http://localhost:3000/api/v1/org/ACME/years/2015/vouchers/:" + index, voucher);
  };
});
