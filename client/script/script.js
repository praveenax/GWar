// script.js
var myApp = angular.module('webapp', ['ngRoute']);
var map;


//map key
//AIzaSyC3AFp66yHrTS5OzC1KogV88iklAAcYF5Q
myApp.config(function ($routeProvider, $sceDelegateProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/country.html',
            controller: 'countryCntrl'
        })
        .when('/detail', {
            templateUrl: 'html/resources.html',
            controller: 'resourcesCntrl'
        });


});


myApp.controller('countryCntrl', function ($scope, $http, $interval, $timeout, $compile) {

});

myApp.controller('resourcesCntrl', function ($scope, $http, $interval, $timeout, $compile) {

});
