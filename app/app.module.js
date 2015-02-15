/*
 * Declaration of the "main" module. Declares dependencies.
 */
var SmawgApp = angular.module('SmawgApp',
    [
        'ui.router',
        'ngMaterial',
        'restangular',
        'SmawgApp.controllers',
        'SmawgApp.directives',
        'SmawgApp.services'
    ]
);

angular.module('SmawgApp.controllers', []);
angular.module('SmawgApp.directives', []);
angular.module('SmawgApp.services', []);


SmawgApp.config(function($mdThemingProvider, RestangularProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('pink')
    .backgroundPalette('grey');

  RestangularProvider.setBaseUrl("http://%BACKEND_ROOT%/api/v1");
});
