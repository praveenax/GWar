// script.js
var myApp = angular.module('webapp', ['ngRoute']);
var map;


//map key
//AIzaSyC3AFp66yHrTS5OzC1KogV88iklAAcYF5Q
myApp.config(function ($routeProvider, $sceDelegateProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'html/tileDesign.html',
            controller: 'tileDesignCntrl'
        })
        .when('/detail', {
            templateUrl: 'html/resources.html',
            controller: 'resourcesCntrl'
        });


});


myApp.controller('tileDesignCntrl', function ($scope, $http, $interval, $timeout, $compile) {

    var backgrounds = ['b1','b2','b3','b4'];
    
    var wall_combinations =['wall-left','wall-top','wall-bottom','wall-right'];
    
    
    
    $scope.tilesArr = [{
        image:"css/"+backgrounds[0]+".jpg",
        wall:wall_combinations[0]+" "+wall_combinations[1],
        reward:"gear",
        color:"red"
    },{
        image:"css/"+backgrounds[1]+".jpg",
        wall:"wall-left",
        reward:"gear",
        color:"red"
    },{
        image:"css/"+backgrounds[2]+".jpg",
        wall:"wall-left",
        reward:"gear",
        color:"red"
    },{
        image:"css/"+backgrounds[3]+".jpg",
        wall:"wall-left",
        reward:"gear",
        color:"red"
    }];
    
});

myApp.controller('resourcesCntrl', function ($scope, $http, $interval, $timeout, $compile) {

    $scope.coins = [{
        name:"Copper",
        image: "css/copper.jpg"
    },{
        name:"Silver",
        image: "css/silver.jpg"
    },{
        name:"Gold",
        image: "css/gold.jpg"
    }];
});
