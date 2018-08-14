angular.module('starter.controllers')
.controller('endgamectrl', function ($scope, $state, $ionicHistory, $location, $window, $timeout, cardPack, moreCard) {

    //reg device height and width
    $scope.deviceWidth = $window.innerWidth;
    $scope.deviceHeight = $window.innerHeight;


    //make sure reload does not infinitely loop
    reload = true;

    //reload page
    $scope.reloadPage = function () {
        $window.location.reload();
    };

    $scope.getHighscore = function() {
        var highscore = window.localStorage.getItem('highscore') || 0;

        if (highscore == 0) {
            return "";
        }

        else {
            return "Fastest Time: " + Math.floor(highscore/(1000*60)) + " Minutes and " + Math.floor(highscore%(1000*60) / 1000) + " Seconds"
        }
        
    }

    $scope.endGame = function() {
        console.log("Running endgame() function")

        // remove game page -- back goes to game start
        $ionicHistory.removeBackView();

        //evaluate time
        var myDate = new Date;
        var startTime = window.localStorage.getItem( 'gameStartTime' ); 

        var endTime = myDate.getTime();
        var millisPassed = endTime - startTime;
        $scope.gameMinutes = Math.floor(millisPassed/(1000*60)); 
        $scope.gameSeconds = Math.floor(millisPassed%(1000*60) / 1000);
        console.log('Millis passed = ' + millisPassed);

        //open match archives
        $scope.highscores = JSON.parse(window.localStorage.getItem('highscoreArchive')) || [];

        //check highscore
        $scope.highscore = window.localStorage.getItem('highscore') || (millisPassed + 1);
        console.log('highscore =' + $scope.highscore)

        if (millisPassed < $scope.highscore) {
            //set new highscore
            $scope.newHighscore = true;
            $scope.highscore = millisPassed;
            window.localStorage.setItem('highscore', millisPassed);
            
            var dateText = myDate.getMonth() + 1 + "/" + myDate.getDate() + "/" + myDate.getFullYear();

            //manage match archives
            $scope.highscores.unshift({date: dateText, min: $scope.gameMinutes, sec: $scope.gameSeconds});
            window.localStorage.setItem('highscoreArchive', JSON.stringify($scope.highscores));

        }

        else {
            $scope.newHighscore = false;
        }

        //

        /*
        $scope.highscores = [
            {date: "3/15/2017" , min: 1, sec: 24}, 
            {date: "3/12/2017" , min: 2, sec: 12},
            {date: "3/11/2017" , min: 3, sec: 22},
            {date: "3/10/2017" , min: 6, sec: 23}
        ];*/
        

        $scope.hsMinutes = Math.floor($scope.highscore/(1000*60)); 
        $scope.hsSeconds = Math.floor($scope.highscore%(1000*60) / 1000);     

    }


    ///////GAME FUNCTIONS and UTILITYS

    //new Root To hopfully disable back button on final game.
    $scope.newRoot = function () {
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
    }

})
