SmawgApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/components/dash/dashView.html',
        controller: 'DashController'
      })
      .state('/voucher/:voucherId', {
        templateUrl: 'app/voucher/voucherView.html',
        controller: 'VoucherController'
      })
      .state('/home', {
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController'
      });
  });
