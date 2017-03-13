'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/maverix', {templateUrl: 'app/partials/maverix.html', controller: 'MaverixCtrl'});
        $routeProvider.when('/users', { templateUrl: 'app/partials/tablesSort.html', controller: 'CustomersCtrl' });
        $routeProvider.when('/modals', {templateUrl: 'app/partials/modals.html', controller: 'ModalsCtrl'});
        $routeProvider.when('/controls', {templateUrl: 'app/partials/controls.html', controller: 'ControlsCtrl'});
        $routeProvider.when('/icons', {templateUrl: 'app/partials/icons.html', controller: 'IconsCtrl'});
        $routeProvider.when('/type', {templateUrl: 'app/partials/type.html', controller: 'TypeCtrl'});
        $routeProvider.when('/charts', {templateUrl: 'app/partials/charts.html', controller: 'ChartCtrl'});
        $routeProvider.when('/loanForm', { templateUrl: 'app/partials/forms.html', controller: 'FormsCtrl' });
        $routeProvider.when('/returnForm', { templateUrl: 'app/partials/returnForm.html', controller: 'ReturnFormCtrl' });
        $routeProvider.when('/view2', {templateUrl: 'app/partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.when('/Products', { templateUrl: 'app/partials/Products.html', controller: 'ProductsCtrl' });
        
        $routeProvider.otherwise({ redirectTo: '/view1' });
    }]);
