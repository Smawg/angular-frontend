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
      .state('voucher', {
        url: '/voucher',
        templateUrl: 'app/components/voucher/addVoucher.html',
        controller: 'VoucherCtrl'
      })
      .state('voucheroverview', {
        url: '/voucheroverview',
        templateUrl: 'app/components/voucher/overviewView.html'
      })
      .state('voucher/:voucherId', {
        url: '/voucher',
        templateUrl: 'app/components/voucher/voucherView.html',
        controller: 'VoucherCtrl'
      });
  });
