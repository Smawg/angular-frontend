angular.module('SmawgApp.services').factory('VoucherService', ['Restangular', '$q', 'AuthService', function VoucherService(Restangular, $q, AuthService) {
  "use strict";
  var org = AuthService.getUserInfo().organisation,
    vouchers = Restangular.all('vouchers'),
    voucher = Restangular.all('vouchers');
  Restangular.setBaseUrl('http://localhost:3000/api/v1/org/' + org + '/years/2015');
  return {
    getVouchers : function () {
      var vouchersDeferred = $q.defer(),
        response = vouchers.getList().then(function (response) {
          vouchersDeferred.resolve(response);
        });
      return vouchersDeferred.promise;
    },
    saveVoucher : function (voucher) {
      var vouchersDeferred = $q.defer(),
        response = vouchers.post(voucher).then(function (response) {
          vouchersDeferred.resolve(response);
        });
      return vouchersDeferred.promise;
    },
    updateVoucher : function (voucher) {
      var vouchersDeferred = $q.defer(),
        response = Restangular.all('vouchers/:id').patch("vouchers",voucher).then(function (response) {
          vouchersDeferred.resolve(response);
        });
      return vouchersDeferred.promise;
    },
    getFullVoucher : function (voucherNbr) {
      var voucherDeferred = $q.defer(),
        response = voucher.get(":" + voucherNbr).then(function (response) {
          voucherDeferred.resolve(response);
        });
      return voucherDeferred.promise;
    }
  };
}]);
angular.module('SmawgApp.controllers',['ngMessages']).controller('VoucherCtrl', function ($scope, VoucherService) {
  "use strict";
  VoucherService.getVouchers().then(function (data) {
    console.log(data);
    $scope.vouchers = data;
  });
  $scope.getFullVoucher = function (voucherNbr) {
    VoucherService.getFullVoucher(voucherNbr).then(function (data) {
      console.log(data);
      return data;
    });
  };
  $scope.AccountRows = [];
  $scope.editVoucher = false;
  $scope.addAccountRow = function () {
    $scope.AccountRows.push({account_number: 0, debit: 0, credit: 0});
  };

  $scope.removeAccountRow = function (index) {
    $scope.AccountRows.splice(index, 1);
  };

  $scope.TotalDebit = function () {
    var sum = 0;
    angular.forEach($scope.AccountRows, function (item) {
      sum += item.debit;
    });
    return sum;
  };

  $scope.TotalCredit = function () {
    var sum = 0;
    angular.forEach($scope.AccountRows, function (item) {
      sum += item.credit;
    });
    return sum;
  };


  $scope.toggleEdit = function () {
    $scope.editVoucher = !($scope.editVoucher);
  };

  $scope.SaveVoucher = function () {
    var voucher = {"voucher": {"number": $scope.voucherNbr, "description": $scope.description, "date": $scope.date, "voucher_rows_attributes": $scope.AccountRows}};
    VoucherService.saveVoucher(voucher);

    console.log("successfully added voucher to DB");
  };

  $scope.updateVoucher = function ($http, index, voucherNbr, description, date, voucher_rows) {
    var voucher = {"voucher": {"number": voucherNbr, "description": description, "date": date, "voucher_rows_attributes": voucher_rows}};
    VoucherService.updateVoucher(voucher);
  };
});
