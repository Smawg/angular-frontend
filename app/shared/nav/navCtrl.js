angular.module('SmawgApp.controllers').controller('SmawgNavCtrl', ['$scope', '$mdSidenav', '$mdBottomSheet', function ($scope, $mdSidenav, $mdBottomSheet) {
  $scope.openMenu = function () {
    $mdSidenav("left").open();
  };
  $scope.closeMenu = function() {
    $mdSidenav("left").close();
  };
  $scope.login = function() {
    $mdBottomSheet.show({
      templateUrl: 'app/shared/nav/loginFormView.html'
    });
  };
  $scope.sections = [
    {
      name: "Home",
      sref: "home",
      type: "link"
    }, {
      name: "Dashboard",
      sref: "dash",
      type: "link"
    }, { 
      name: "Add Voucher",
      sref: "voucher",
      type: "link"
    }, { 
      name: "Vouchers",
      sref: "voucheroverview",
      type: "link"
    }, { 
      name: "Reports",
      sref: "reports",
      type: "toggle",
      pages:[
      {
        name: "Ledger",
        sref: "ledger",
        type: "link"
      }, {
        name: "VAT",
        sref: "vat",
        type: "link"
      }, {
        name: "Final Accounts",
        sref: "final-accounts",
        type: "link"
      }, ]
    }, {
      name: "About",
      sref: "about",
      type: "link"
    }];
}]);


