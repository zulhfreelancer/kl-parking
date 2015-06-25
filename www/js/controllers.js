angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $timeout) {})

.controller('AboutCtrl', function($scope, $stateParams) {})

.controller('ParkingCtrl', function($scope, $http, $timeout) {

    var parkingData = [{
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

    // Populate initial data with "loading" values from parkingData variable
    $scope.parking = parkingData;

    // Get data from API server
    $http.get('http://kl-parking-spots.herokuapp.com/')
    .success(function(data, status, headers, config) {
        $scope.parking = data;
    })
    .error(function(data, status, headers, config) {
        $scope.parking = [{
                            "name": "Unable to get the parking data",
                            "lot": "",
                            "datetime": ""
                          }];
    });

    // Pull to refresh
    $scope.doRefresh = function() {

        // Populate data with "loading" values again
        $scope.parking = parkingData;

        // Put data from API server back after 1 seconds
        $timeout( function() {

            $http.get('http://kl-parking-spots.herokuapp.com/').
            success(function(data, status, headers, config) {
                $scope.parking = data;
            }).
            error(function(data, status, headers, config) {
                $scope.parking = [{
                                    "name": "Unable to get the parking data",
                                    "lot": "",
                                    "datetime": ""
                                  }];
            });

            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        
        }, 1000);
    };
});