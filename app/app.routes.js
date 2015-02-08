SmawgApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/components/dash/dashView.html',
        controller: 'DashCtrl'
      })
      .state('dash.overview', {
        url: '/overview',
        templateUrl: 'app/components/dash/overviewView.html'
      })
      .state('dash.graphs', {
        url: '/graphs',
        templateUrl: 'app/components/dash/graphsView.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/components/about/aboutView.html'
      })
      .state('voucher/:voucherId', {
        templateUrl: 'app/components/voucher/voucherView.html',
        controller: 'VoucherCtrl'
      });
  });
