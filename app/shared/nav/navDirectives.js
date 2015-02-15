angular.module("SmawgApp.directives").directive('menuLink', function(){
  return {
    restrict:'E',
    template:'<a class="md-button md-default-theme" ng-click="closeMenu()" ng-class="{\'active\':isSelected()}" ui-sref="{{section.sref}}">{{section.name}}</a>'
  };
});
