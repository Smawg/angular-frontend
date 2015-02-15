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

/*
 * Declaration of module containing the controllers.
 */
angular.module('SmawgApp.controllers', []);
/*
 * Declaration of module containing the directives..
 */
angular.module('SmawgApp.directives', []);


SmawgApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('pink')
    .backgroundPalette('grey');
});
