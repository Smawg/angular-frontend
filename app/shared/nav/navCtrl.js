angular.module('SmawgApp.controllers').controller('SmawgNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  $scope.toggleSideNav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);


