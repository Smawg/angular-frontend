angular.module('SmawgApp.controllers').controller('SmawgNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  $scope.openMenu = function () {
    $mdSidenav("left").open();
  };
  $scope.closeMenu = function() {
    $mdSidenav("left").close();
  };
  $scope.sections = [
    {
      name:"Home",
      sref:"home",
      type:"link"
    }, {
      name:"Dashboard",
      sref:"dash",
      type:"link"
    }, { 
      name:"Voucher",
      sref:"voucher.overview",
      type:"link"
    }, {
      name:"About",
      sref:"about",
      type:"link"
    }];
}]);


