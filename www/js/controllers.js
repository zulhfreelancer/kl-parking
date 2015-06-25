angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {})

.controller('ParkingCtrl', function($scope, $http) {

    $scope.parking = [{
        "name": "Sungei Wang Plaza",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "Plaza Low Yat",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "Lot 10",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "Fahrenheit88",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "Starhill Gallery",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "Pavilion",
        "lot": "Loading",
        "datetime": "Loading"
    }, {
        "name": "KLCC",
        "lot": "Loading",
        "datetime": "Loading"
    }];

    $http.get('http://kl-parking-spots.herokuapp.com/').
    success(function(data, status, headers, config) {
        //console.log(data);
        $scope.parking = data;
    }).
    error(function(data, status, headers, config) {

    });
})

.controller('AboutCtrl', function($scope, $stateParams) {});