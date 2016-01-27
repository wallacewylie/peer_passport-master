/**
 * Created by robbynewman on 1/26/16.
 */

var app = angular.module('myApp', []);


app.controller('MainController', function($scope, $http){
    $http.get('getUser').then(function(response){
        console.log('response', response);
        $scope.user = response

    });
});

