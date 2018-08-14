angular.module('starter.controllers')
.controller('GameStartCtrl', function ($scope, $state, $ionicHistory, $window, cardPack, moreCard) {

    //reg device height and width
    $scope.deviceWidth = $window.innerWidth;
    $scope.deviceHeight = $window.innerHeight;

    //positioning
    var totalCards = cardPack.length * 2; //only used once to toggle button to a link
    $scope.globalTotalCards = totalCards;

    $scope.$on('$ionicView.beforeEnter', function() {
           //do stuff before enter
           console.log("Code for on enter working")
    });

    $scope.$on('$ionicView.beforeLeave', function() {
           //do your stuff after leaving
           console.log("The Start Game page has been left.")
    });

    $scope.getHighscore = function() {
        var highscore = window.localStorage.getItem('highscore') || 0;

        if (highscore == 0) {
            return "";
        }

        else {
            return "Fastest Time: " + Math.floor(highscore/(1000*60)) + " Minutes and " + Math.floor(highscore%(1000*60) / 1000) + " Seconds"
        }
        
    }

    // log start time of Game
    $scope.logGameStartTime = function() {
        var myDate = new Date();
        window.localStorage.setItem('gameStartTime', myDate.getTime());
    }



})
