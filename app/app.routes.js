SmawgApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/components/dash/dashView.html',
        controller: 'DashController'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'DashController'
      })
      .state('about', {
        templateUrl: 'app/components/about/aboutView.html',
        controller: 'HomeController'
      })
      .state('voucher/:voucherId', {
        templateUrl: 'app/voucher/voucherView.html',
        controller: 'VoucherController'
      });
  });
