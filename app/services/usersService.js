var myModule = angular.module('myApp.services', []).factory('userService', function ($http) {
    var translateArr = {};
    var Webtest = {
        fetch: function (callback) {
           
                return $http.get('data/textResource.json').then(function (response) {
                    translateArr = response.data;
                });
          
        }, translate: function () {
            return translateArr;
            if ($.isEmptyObject(translateArr)) {
                 $http.get('data/textResource.json').then(function (response) {
                    translateArr = response.data;
                    return translateArr;
                });
            }else
          {
                return translateArr;
            }
        }
    };

    return Webtest;
});