
angular.module('SmawgApp.services')
  .factory('AuthService', function($http, $q, $window) {
    var userInfo;

    function login(userName, password) {
      userInfo = {
        accessToken: "useruser",
        userName: userName,
        organisation: "ACME"
      };
      $window.sessionStorage.userInfo = JSON.stringify(userInfo);
      /* Future login functionality */
      /*
      loginDeferred = $q.defer();

      $http.post('/api/login', {
        userName: userName,
        password: password
      }).then(function(result) {
        userInfo = {
          accessToken: result.data.access_token,
          userName: result.data.userName
        };
        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
        loginDeferred.resolve(userInfo);
      }, function(error){
        loginDeferred.resolve(error);
      });
      return loginDeferred.promise;
      */
    }
    function getUserInfo() {
      return userInfo;
    }
    function init() {
      if ($window.sessionStorage.userInfo) {
        userInfo = JSON.parse($window.sessionStorage.userInfo);
      }
    }
 
init();

    return {
      login : login,
      getUserInfo : getUserInfo
    };
  });
