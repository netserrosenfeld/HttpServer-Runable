'use strict';

/* Controllers */
var text = {};
angular.module('myApp.controllers', [])
    .controller('MaverixCtrl', ['$scope', 'language', function ($scope, language) {
        language.fetch().then(function (data) {
            text = data;
            $scope.text = data;
            //   $scope.$parent.title = text[2];

        })
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_rulers_glossy.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ChartCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Charts";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/chart.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TypeCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Typography";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/cutting_pad.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('IconsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Icons";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/box_address.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('TablesCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Tables";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/document-plaid-pen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ModalsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Modals";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/fullscreen.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('ControlsCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Controls";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/button_blue_add.png";
        $scope.$parent.showTopToggle = false;
    }]).controller('CustomersCtrl', ['$scope', 'language', function ($scope, language) {
        //$scope.title = $scope.text[0];
        $scope.text = language.translate();
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchFish = '';     // set the default search/filter term

        // create the list of sushi rolls 
        $scope.sushi = [
          { id: "1234",active:true, name: 'Cali Roll', tz: '034723435', checkNumber: 2, date: "12.01.2017", address: "givat shmuel", type: "Baby stroller" },
          { name: 'Philly', active: true, fish: 'Tuna', tastiness: 4 },
          { name: 'Tiger', active: true, fish: 'Eel', tastiness: 7 },
          { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
          //עלפי ת.ז שם משפחה מספר השאלה מספר שיק תאריך השאלה , כתובת . פריט 
        ];
    }])
    .controller('ProductsCtrl', ['$scope', 'language', function ($scope, language) {
        //$scope.title = $scope.text[0];
        $scope.text = language.translate();
        $scope.sortType = 'name'; // set the default sort type
        $scope.sortReverse = false;  // set the default sort order
        $scope.searchFish = '';     // set the default search/filter term

        // create the list of sushi rolls 
        $scope.items = [
          { id: "1", active:true,name: 'Cali Roll', type: '3', quantity: 2, address: "givat shmuel", price: 123 },
            { id: "2",active:false, name: 'city cat', type: '3', quantity: 5, address: "givat shmuel", price: 1233 },
            { id: "3",active:true, name: 'wheeling chair', type: '3', quantity: 5, address: "givat shmuel", price: 1 }
        ];
        $scope.increaseItemCount = function (item) {
            item.quantity++;
        };
        $scope.decreaseItemCount = function (item) {
            if (item.quantity > 0) {
                item.quantity--;
            }

        };
        $scope.submitNewProduct = function () {
            var a = $scope.price;
        };
    }])
    .controller('FormsCtrl', ['$scope', 'language', function ($scope, language) {
        $scope.text = language.translate();

        $scope.title = $scope.text[0];
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('ReturnFormCtrl', ['$scope', 'language', function ($scope, language) {
        $scope.text = language.translate();

        $scope.title = $scope.text[21];
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/tablet.png";
        $scope.$parent.showTopToggle = false;

    }])
    .controller('MyCtrl1', ['$scope', function ($scope) {
        //  $scope.$parent.title = "עמותת לבבי - דף ניהול";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.$parent.showTopToggle = true;

    }])
    .controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.$parent.title = "Warnings";
        $scope.$parent.img = "img/iconset-addictive-flavour-set/png/moleskine_black.png";
        $scope.$parent.showTopToggle = false;
    }])
    .controller('AppCtrl', ['$scope', '$location', 'language', function ($scope, $location, language) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        language.fetch().then(function (data) {
            text = data;
            $scope.text = data;
            //   $scope.$parent.title = text[2];

        })
        $scope.text = language.translate();

        // $scope.title = "עמותת לבבי - דף ניהול";
        $scope.subNav1 = 0;
        $scope.img = "img/iconset-addictive-flavour-set/png/screen_aqua_glossy.png";
        $scope.showTopToggle = false;
        $scope.showNavigation = true;
        $scope.toggleSideBar = function () {
            $scope.showNavigation = !$scope.showNavigation;
        };
    }]);
