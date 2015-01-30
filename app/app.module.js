/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var SmawgApp = angular.module('SmawgApp',
    [   
        'ngRoute',
        'restangular',
        'ui.bootstrap',
        'SmawgApp.controllers',
        'SmawgApp.services'
    ]   
);
