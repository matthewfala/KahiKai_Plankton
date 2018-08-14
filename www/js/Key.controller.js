angular.module('starter.controllers')
.controller('dichotomousCtrl', function ($scope, $sce, $ionicScrollDelegate, moreCard, cardPack, qSeed) {


    // Keep track of Screens
    $scope.screen = 0;
    // Current question
    $scope.currentQ = qSeed;

    // Question history
    var history = [qSeed];


    // Input $index
    $scope.updateQ = function (i) {

        // top of screen
        $ionicScrollDelegate.scrollTop(false);

        // Update 
        $scope.currentQ = $scope.currentQ.direct[i];
        history[history.length] = $scope.currentQ

        if (typeof $scope.currentQ.target != 'undefined') {
            console.log("switching screens to target found");

            if (typeof $scope.currentQ.targetImg == 'undefined') {
                $scope.currentQ.targetImg = searchCardPack($scope.currentQ.target);
            }

            // Change ng-Show to Show Target Found Screen
            $scope.screen = 1;
        }
                
    }

    $scope.showScreenBool = function (thisScreen) {
        if (thisScreen === $scope.screen) {
            return true;
        }
        else {
            return false;
        }
    }

    $scope.getImg = function (i) {
        return $scope.currentQ.img[i];
    }

    // Restart Dichotomous Key
    $scope.restart = function () {
        // top of screen
        $ionicScrollDelegate.scrollTop(false);
        
        // restart
        $scope.currentQ = qSeed;
        history = [qSeed];
        $scope.screen = 0;
    };

    $scope.back = function () {

        // top of screen
        $ionicScrollDelegate.scrollTop(false);

        // Go back if question, not target
        if (typeof $scope.currentQ.target == 'undefined') {
            if (!(history.length === 1)) {
                $scope.currentQ = history[history.length - 2];
                history.pop();
                console.log(history);
            }
        }
        // if question is target, change view
        else {
            console.log("switching screens to questions");

            // Change ng-Show to Show Target Found Screen
            $scope.screen = 0;

            // go back
            $scope.currentQ = history[history.length - 2];
            history.pop();
            console.log(history);

        }
    };
   
    function searchCardPack(name) {
        for( i = 0; i < cardPack.length; i++) {
            if (cardPack[i].name.toLowerCase() == name.toLowerCase()) {
                return "../img/card_icon/large/" + cardPack[i].pic;
            }
        }

        return "#";
    }
})
