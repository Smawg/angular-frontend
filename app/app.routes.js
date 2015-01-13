SmawgApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dash', {
        templateUrl: 'app/components/dash/dashView.html',
        controller: 'DashController'
      }).
      when('/voucher/:voucherId', {
        templateUrl: 'app/voucher/voucherView.html',
        controller: 'VoucherController'
      }).
      when('/home', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
