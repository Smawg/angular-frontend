angular.module("SmawgApp.directives").directive('menuLink', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/shared/nav/menuLinkView.html'
  };
})
.directive('menuToggle', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/shared/nav/menuToggleView.html'
  };
});
