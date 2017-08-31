// script.js
var myApp = angular.module('webapp', ['ngRoute']);
var map;


//map key
//AIzaSyC3AFp66yHrTS5OzC1KogV88iklAAcYF5Q
myApp.config(function ($routeProvider, $sceDelegateProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/godview.html',
            controller: 'cntrl'
        })
        .when('/detail', {
            templateUrl: 'html/detailview.html',
            controller: 'cntrl'
        });


});






myApp.controller('cntrl', function ($scope, $http, $interval, $timeout, $compile) {







});
