var SmawgApp = angular.module('SmawgApp',
    [
        'ui.router',
        'ngMaterial',
        'restangular',
        'SmawgApp.controllers',
        'SmawgApp.services'
    ]
);
angular.module('SmawgApp.controllers', []);


SmawgApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('pink')
    .backgroundPalette('grey');
});
