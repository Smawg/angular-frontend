controllers.controller('SmawgNav', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  $scope.toggleSideNav = function (menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);
