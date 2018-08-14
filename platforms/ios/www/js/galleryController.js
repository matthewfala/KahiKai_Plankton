angular.module('starter.controllers')

.controller('galleryCtrl', function ($scope, galleryItems) {
    $scope.onload = function () {
    	

    }


    $scope.galleryItems = galleryItems;
    $scope.galleryItems.forEach(function(element) {
    	console.log(element);
    });

    $scope.subject = "Copepod";

    /*function $scope.photo(name) {
    	console.log('html contains:' + name);
    }*/

});
