angular.module("SmawgApp.controllers")
  .controller("LoginController", ['$scope', 'AuthService', function($scope, AuthService){
    $scope.login = function(credentials) {
      console.log("LOGIN");
      AuthService.login(credentials.username, credentials.password);
    };
    
  }]);
