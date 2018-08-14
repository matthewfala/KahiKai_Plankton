angular.module('starter.controllers', ['ngSanitize'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AboutCtrl', function ($scope, $window, cardPack, moreCard) {
    
    $scope.imgX = 2480;
    $scope.imgY = 7013;

    $scope.deviceWidth = $window.innerWidth;
    $scope.deviceHeight = $window.innerHeight;
    $scope.scrollWidth = $scope.deviceWidth;
    $scope.scrollHeight = $scope.imgY * $scope.scrollWidth / $scope.imgX;
    

    $scope.bluWidth = $scope.deviceWidth * 4 / 12;
    if ( $scope.deviceWidth < 100 ) {
        $scope.bluWidth = $scope.deviceWidth;
    }

    //More information Remember Card
    $scope.moreInfo = function(cardName) {

        for (i = 0; i < cardPack.length; i++) {
            if (cardPack[i].name.toLowerCase() == cardName.toLowerCase()) {
                console.log("supposably stored");
                //store requested information in factory function moreCard
                moreCard.setMore(cardPack[i]);
                console.log(cardPack[i]);
            }
        }

    }
    
})

/*
.factory('moreCard', function() {
    var facCard = {};

    return {
        setMore: setMore,
        getMore: getMore
    }
    function setMore(newCard) {
        facCard = newCard;
        console.log('set moreCard to: ' + facCard.description);
    };
    
    function getMore() {
        return facCard;
    };

})

.controller('moreCtrl', function ($scope,  moreCard) {
    $scope.onload = function () {
        $scope.moreCard = moreCard.getMore();// moreCard;
    };

}) */

.controller('MemoryCtrl', function ($scope, $window, $ionicLoading, $ionicPopover, cardPack, moreCard) {
    $scope.imgWidth = $window.innerWidth / 4;
    $scope.deviceHeight = $window.innerHeight;// clock fastest time current time

    $scope.taxonomibetize = false //default sort setting (false or alphabetical)
    $scope.revTax = function () {
        console.log('tax is reversed')
        $scope.taxonomibetize = !$scope.taxonomibetize;
    };

    //More information Remember Card
    $scope.moreInfo = function (card) {
        //store requested information in factory function moreCard
        moreCard.setMore(card);
    }


    //sorting Mechanisms
    //ALPHABETIZE
    //now we know our abc s
    alphaRec = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabetize = function (array) {
        alphaArray = []

        for (var x = 0; x < alphaRec.length; x++) {
            letter = alphaRec[x];

            for (var i = 0; i < array.length; i++) {
                l1 = array[i].name.charAt(0);
                l1 = l1.toLowerCase();

                if (letter == l1) {
                    alphaArray.push(array[i]);
                    array.splice[i];
                }

            }
        }

        return (alphaArray);

    };

    //TAXONOMIBETIZE 
    //ADD MORE WITH NEW PLANKTON  22222
    //taxonomic reference (MUST BE IN TAXONOMIC ORDER! ORDER MATERS!
    taxRec = ["Cyanobacteria puff", "Diatoms", "Dinoflagellate",
                "Foram", "Jellyfish", "Coral", "Brittle star (larva)",
                "Brittle star (juvenile)", "Sea urchin", "Sea butterfly",
                "Turrid snail", "Sea slug, Nudibranch", "Clam", "Squid",
                "Bristle worm (Sabellariidae)", "Bristle worm (Syllidae)",
                "Copepod (Pontellidae)", "Copepod (Cyclopoida)", "Amphipod",
                "Mantis shrimp", "Crab", "Porcelain crab", "Peanut worm",
                "Horseshoe worm", "Arrow worm"
    ];

    //the dirty work of tax sort
    taxSort = function (array) {
        taxArray = [];

        for (var x = 0; x < taxRec.length; x++) {
            t1 = taxRec[x];

            for (var i = 0; i < array.length; i++) {
                n1 = array[i].name;

                if (t1 == n1) {
                    taxArray.push(array[i]);
                    array.splice[i];
                }

            }
        }
        return (taxArray);

    };


    //create new displayArray. Deep Copy.
    $scope.displayArray = cardPack;
    $scope.displayArray = alphabetize($scope.displayArray);


    var unshownArray = [];


    //popOver
    $scope.sortBy = 'alphabet';

    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    };

    $scope.closePopover = function () {
        $scope.popover.hide();

    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function () {
        console.log('Popover closed: Initiating refresh:');
        refreshArray();
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function () {
        // Execute action
    });

    //filter references.
    //Add more Plankton 33333 (DOES NOT HAVE TO BE IN ANY SPECIFIC ORDER)
    //taxonomy
    Unicellular = ["Cyanobacteria puff", "Diatoms", "Dinoflagellate", "Foram"];
    Cnidaria = ["Jellyfish", "Coral"];
    Echinodermata = ["Brittle star (larva)", "Brittle star (juvenile)", "Sea urchin"];
    Mollusca = ["Sea butterfly", "Turrid snail", "Sea slug, Nudibranch", "Clam", "Squid"];
    Annelida = ["Bristle worm (Sabellariidae)", "Bristle worm (Syllidae)"];
    Arthropoda = ["Copepod (Pontellidae)", "Copepod (Cyclopoida)", "Amphipod", "Mantis shrimp", "Crab", "Porcelain crab"];
    Sipuncula = ["Peanut worm"];
    Phoronida = ["Horseshoe worm"];
    Chaetognatha = ["Arrow worm"];


    //foodWeb
    Producer = ["Cyanobacteria puff", "Diatoms", "Dinoflagellate"];
    Mixotrophic = ["Foram"];
    CH = ["Sea urchin", "Sea butterfly"];
    CP = ["Copepod (Pontellidae)", "Copepod (Cyclopoida)", "Jellyfish", "Coral", "Turrid snail", "Sea slug, Nudibranch", "Squid", "Bristle worm (Syllidae)", "Copepod", "Amphipod", "Mantis shrimp", "Crab", "Arrow worm"];
    CSF = ["Foram", "Clam", "Bristle worm (Sabellariidae)", "Porcelain crab", "Horseshoe worm"];
    CSD = ["Brittle star (larva)", "Brittle star (juvenile)", "Peanut worm", "Crab"];

    //lifeStage
    Larvae = ["Bristle worm (Sabellariidae)", "Coral", "Brittle star (larva)", "Sea urchin", "Turrid snail", "Sea slug, Nudibranch", "Clam", "Squid", "Peanut worm", "Mantis shrimp", "Crab", "Porcelain crab", "Horseshoe worm"];
    Adult = ["Bristle worm (Syllidae)", "Copepod (Pontellidae)", "Copepod (Cyclopoida)", "Cyanobacteria puff", "Diatoms", "Dinoflagellate", "Foram", "Jellyfish", "Sea butterfly", "Amphipod", "Arrow worm"];

    //Habitat
    Holoplankton = ["Cyanobacteria puff", "Diatoms", "Dinoflagellate", "Foram", "Sea butterfly", "Copepod (Pontellidae)", "Copepod (Cyclopoida)", "Amphipod", "Arrow worm"];
    Meroplankton = ["Jellyfish", "Coral", "Brittle star (larva)", "Brittle star (juvenile)", "Sea urchin", "Turrid snail", "Sea slug, Nudibranch", "Clam", "Squid", "Bristle worm (Sabellariidae)", "Bristle worm (Syllidae)", "Peanut worm", "Mantis shrimp", "Crab", "Porcelain crab", "Horseshoe worm"];



    //set Popover Filter Checkbox 
    $scope.taxonomicFilters = [
        //taxonomy
        { text: 'Unicellular', select: Unicellular, checked: true },
        { text: 'Cnidaria', select: Cnidaria, checked: true },
        { text: 'Echinodermata', select: Echinodermata, checked: true },
        { text: 'Mollusca', select: Mollusca, checked: true },
        { text: 'Annelida', select: Annelida, checked: true },
        { text: 'Arthropoda', select: Arthropoda, checked: true },
        { text: 'Sipuncula', select: Sipuncula, checked: true },
        { text: 'Phoronida', select: Phoronida, checked: true },
        { text: 'Chaetognatha', select: Chaetognatha, checked: true },
    ];

    $scope.foodwebFilters = [
        //foodweb
        { text: 'Producer', select: Producer, checked: true },
        { text: 'Mixotrophic', select: Mixotrophic, checked: true },
        { text: 'Consumer/Herbivore', select: CH, checked: true },
        { text: 'Consumer/Predator', select: CP, checked: true },
        { text: 'Consumer/Suspension or Filter feeder', select: CSF, checked: true },
        { text: 'Consumer/Scavenger or Detritivore', select: CSD, checked: true },
    ];

    $scope.lifestageFilters = [
       //lifestage
       { text: 'Larvae', select: Larvae, checked: true },
       { text: 'Adult', select: Adult, checked: true },
    ];

    $scope.habitatFilters = [
       //lifestage
       { text: 'Holoplankton', select: Holoplankton, checked: true },
       { text: 'Meroplankton', select: Meroplankton, checked: true },
    ];


    //Button Select All, Deselect All

    $scope.toggleAll = function (toggle) { //EDIT FOR NEW FILTERS!!!

        //Batch add Taxonomic Filters.
        for (i = 0; i < $scope.taxonomicFilters.length; i++) {
            $scope.taxonomicFilters[i].checked = toggle
        }

        //Batch add foodWeb Filters.
        for (i = 0; i < $scope.foodwebFilters.length; i++) {
            $scope.foodwebFilters[i].checked = toggle
        }

        //Batch add foodWeb Filters.
        for (i = 0; i < $scope.lifestageFilters.length; i++) {
            $scope.lifestageFilters[i].checked = toggle
        }

        //Batch add foodWeb Filters.
        for (i = 0; i < $scope.habitatFilters.length; i++) {
            $scope.habitatFilters[i].checked = toggle
        }

    }

    //cards showed
    $scope.shownCards = new Array();
    $scope.shownCards = cardPack;

    //CheckBox Click Action function
    $scope.filterClicked = function (checkbox) {
        //checkbox.checked = !checkbox.checked;
        //will refresh when popover is closed.
    };


    //this function completely sorts arrays based on filter status.
    function refreshArray() { //EDIT FOR NEW FILTERS!!!!!!!!!!

        //Wipe display array.
        $scope.displayArray = [];
        unshownArray = []
        angular.copy(cardPack, unshownArray); //these can be deleted

        //Batch add Taxonomic Filters.
        for (i = 0; i < $scope.taxonomicFilters.length; i++) {
            if ($scope.taxonomicFilters[i].checked == true) {
                console.log('batch filter activation for : ' + $scope.taxonomicFilters[i].text);
                filterAdd($scope.taxonomicFilters[i].select)
            }
        }

        //Batch add foodWeb Filters.
        for (i = 0; i < $scope.foodwebFilters.length; i++) {
            if ($scope.foodwebFilters[i].checked == true) {
                console.log('batch filter activation for : ' + $scope.foodwebFilters[i].text);
                filterAdd($scope.foodwebFilters[i].select)
            }
        }

        //Batch add lifestage Filters.
        for (i = 0; i < $scope.lifestageFilters.length; i++) {
            if ($scope.lifestageFilters[i].checked == true) {
                console.log('batch filter activation for : ' + $scope.lifestageFilters[i].text);
                filterAdd($scope.lifestageFilters[i].select)
            }
        }

        //Batch add habitat Filters.
        for (i = 0; i < $scope.habitatFilters.length; i++) {
            if ($scope.habitatFilters[i].checked == true) {
                console.log('batch filter activation for : ' + $scope.habitatFilters[i].text);
                filterAdd($scope.habitatFilters[i].select)
            }
        }


        //Sort
        console.log('taxSort is : ' + $scope.taxonomibetize);
        if ($scope.taxonomibetize == false) {
            console.log('ordered alphabetically')
            $scope.displayArray = alphabetize($scope.displayArray);
        } else if ($scope.taxonomibetize == true) {
            console.log('ordered taxinomically')
            $scope.displayArray = taxSort($scope.displayArray);
        };



    };


    //Used per each filter
    function filterAdd(targetFilter) {

        //search for every name in filter
        for (n = 0; n < targetFilter.length; n++) {

            //find target name
            nameInFilter = targetFilter[n]
            //add cards that match correct name
            for (c = 0; c < unshownArray.length; c++) {
                //console.log('expand unshown array:' + unshownArray[c]);
                //console.log("target filter text: " + nameInFilter);
                if (nameInFilter == unshownArray[c].name) {
                    //transfer card
                    $scope.displayArray.push(unshownArray[c]);
                    //console.log('pushing: ' + unshownArray[c]);
                    unshownArray.splice(c, 1);

                }

            }
        }

    };


    //Outdated sort function; Legacy
    $scope.addSort = function (existingArray, newArray, targetField, filter) {
        //check all objects in existingArray
        for (var i = 0; i < existingArray.length; i++) {
            if (targetField == "name" && existingArray[i].name === filter) {
                newArray.push(existingArray[i])
            } else if (targetField == "domain" && existingArray[i].Tdomain === filter) {
                newArray.push(existingArray[i])
            } else if (targetField == "kingdom" && existingArray[i].Tkingdom === filter) {
                newArray.push(existingArray[i])
            } else if (targetField == "phylum" && existingArray[i].Tphylum === filter) {
                newArray.push(existingArray[i])
            } else if (targetField == "genus" && existingArray[i].Tgenus === filter) {
                newArray.push(existingArray[i])
            }

        }
        return newArray;
    };

})

.controller('GameCtrl', function ($scope, $state, $ionicHistory, $location, $window, $timeout, cardPack, moreCard) {

    $scope.hand = []

    //reg device height and width
    $scope.deviceWidth = $window.innerWidth;
    $scope.deviceHeight = $window.innerHeight;
    defaultRows = 3;
    defaultCol = 4


    /// GAME HOME ////////////////////////

    //CURENTLY WORKING ON, See NewCards() to find the last page card array edits.
    $scope.gameRound = 0;


    //NEW GAME SETUP VARS (repeated for reset)
    var cardPouch = [];
    var clickCnt = 0;

    //positioning
    var totalCards = cardPack.length * 2; //only used once to toggle button to a link
    var rows = defaultRows;
    var columns = defaultCol;
    var cardCount = rows * columns; //12cards
    var usualCount = cardCount;
    $scope.globalTotalCards = totalCards;

    var margin = $scope.deviceHeight / 128;
    var marSide = $scope.deviceWidth / 32;

    //type marFoot and calc margin of head
    var marFoot = 0;
    var marHead = 0;


    //makesure  reload doesnot infinitely loop
    reload = true;
    //reload page
    $scope.reloadPage = function () {
        $window.location.reload();
    };

    $scope.newGame = function () {
        
        //set variables
        $scope.gameRound = 0; // will even out score for card
        $scope.imobalize = false; //imobalizes card on tap;
        $scope.bfinalAct = false;
        clickCnt = 0;

        //positioning
        totalCards = cardPack.length * 2; //only used once to toggle button to a link
        rows = defaultRows;
        columns = defaultCol;
        cardCount = rows * columns; //12cards
        usualCount = cardCount;
        $scope.globalTotalCards = totalCards;



        margin = $scope.deviceHeight / 128;
        marSide = $scope.deviceWidth / 32;


        //type marFoot and calc margin of head
        marFoot = 0;
        marHead = 0;
        function calcCardSize() {
            $scope.cardWH = ($scope.deviceWidth - 2 * marSide - (columns - 1) * margin) / columns;
            marFoot = $scope.deviceHeight / 6;
            marHead = Math.abs($scope.deviceHeight - rows * $scope.cardWH - (columns - 1 * margin) - marFoot);
        }
        calcCardSize(); //dynamically set the card size anywhere.



        //<<>> SETUP CODE <<>>
        //CARDS
        //disposible cardPack copy!:)


        cardPouch = [];
        angular.copy(cardPack, cardPouch); //global value cardPack

        chosenCards = [];
        //Randomize CardPouch; move and delete cards from cardPouch to Chosen Cards// global value chosenCards
        chosenCards = cardPouchintoChosenCards(chosenCards);

        //make and label card matches( .match = which )
        $scope.hand = cardHandMatch(chosenCards);
        chosenCards = [];

        //position cards
        $scope.hand = cardPosition($scope.hand, $scope.cardWH, rows, columns, marHead, margin, marSide);

        // Card Hand Maintainance (add card.bShown
        for (var i = 0; i < $scope.hand.length; i++) {
            $scope.hand[i].bShown = true;
            $scope.hand[i].done = false;
        }

        //card click manage
        $scope.cardClicked = function (card) {

            if ($scope.imobalize == false && card.done == false) {
                card.bShown = !card.bShown;
                $scope.updateScore(card.name, card.match)
            }
        }


        //Contains Last step eqn
        chosenCards = [] //Global holder until replace

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


    // log start time of Game
    $scope.logGameStartTime = function() {
        var myDate = new Date();
        window.localStorage.setItem('gameStartTime', myDate.getTime());
    }

    //make a new game right off the bat.
    $scope.newGame();
    $scope.newGameFail = function () {
        console.log('newGame!!!')
        $scope.score = 0;
        $scope.gameRound = 0;

        //new cardPouch
        angular.copy(cardPack, cardPouch);

        //Randomize CardPouch; move and delete cards from cardPouch to Chosen Cards// global value chosenCards
        cardPouchintoChosenCards();

        //make and label card matches( .match = which )
        $scope.hand = cardHandMatch(chosenCards);

        chosenCards = [];

        //position cards
        $scope.hand = cardPosition($scope.hand, $scope.cardWH, rows, columns, marHead, margin, marSide);


        // Card Hand Maintainance (add card.bShown
        for (var i = 0; i < $scope.hand.length; i++) {
            $scope.hand[i].bShown = true;
            $scope.hand[i].done = false;
        }


        //Contains Last step eqn
        var chosenCards = [] //Global holder until replace

        /*
        console.log('new game: total cards :' + totalCards)
        $scope.globalTotalCards = totalCards;
        columns = 3//defaultCol;
        rows = 4//defaultRows;

        $scope.newCards();  //get 12 new cards and delete from pouch
        calcCardSize();     //algorithmically resize to fit page

        cardPosition();
        */

        $scope.button.enable = false;
    }
    $scope.highscore = 0;

    ///////GAME FUNCTIONS and UTILITYS

    //new Root To hopfully disable back button on final game.
    $scope.newRoot = function () {
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
    }

    //Randomizer function Credit: Matt Fala
    function RandomizeArray(array) {
        var newArray = [];
        var chosen = 0;
        //create empty position logger(log available slots)
        var pLog = [];
        for (i = 0; i < array.length; i++) {
            pLog.push(i)
        }

        //randomize
        for (i = 0; i < array.length; i++) {
            //chosen = Math.round((Math.random()*100)%array.Length);
            random = Math.random() * 100;
            //consise random into pLog
            mod = Math.round(random % (pLog.length)) - 1;
            if (mod < 0) { mod = 0 };

            newArray[pLog[mod]] = array[i];
            pLog.splice(mod, 1);
        }

        return newArray
    };

    //Randomize CardPouch; move and delete cards from cardPouch to Chosen Cards
    function cardPouchintoChosenCards(chosenCards) {
        if (cardPouch.length < cardCount / 2) {
            console.log('NOT ENOUGH CARDS into chosenCards!')
        }
        cardPouch = RandomizeArray(cardPouch);

        //Shorten Chosen cards to correct length
        chosenCards = cardPouch.splice(0, cardCount / 2); //use inverse version of splice, keep first cards without matches.
        return chosenCards;
        //NEW EDIT-DELETE FROM cardPouch
        //cardPouch.splice(0, cardCount/2);

    };

    //Create Hand of Card matches 
    function cardHandMatch(hand) {

        for (var i = 0; i < hand.length; i++) {
            hand[i].match = "card 1";
        };

        //duplicate chosen cards for matches! [match property for double click detection]
        var duplicates = [];
        angular.copy(hand, duplicates);

        //assign unique card id in match property
        for (var i = 0; i < duplicates.length; i++) {
            duplicates[i].match = "card 2";
        };

        hand = hand.concat(duplicates);
        duplicates = null;

        //randomize again for duplicates
        hand = RandomizeArray(hand);

        //log and return
        console.log('successfully created card hand');
        return hand;
    };

    function calcCardSize() {
        $scope.cardWH = ($scope.deviceWidth - 2 * marSide - (columns - 1) * margin) / columns;
        marFoot = $scope.deviceHeight / 6;
        marHead = Math.abs($scope.deviceHeight - rows * $scope.cardWH - (columns - 1 * margin) - marFoot);
    }

    function cardPosition(cards, cardWH, rows, columns, marHead, margin, marSide) {
        //give each card a position and size 
        //keep place in hand
        var i = 0;

        //check row column 
        if (rows * columns == cardCount) {

            //step rows and cols
            xCur = marSide;
            yCur = marHead + marSide;
            for (r = 0; r < rows; r++) {
                for (c = 0; c < columns; c++) {

                    cards[i].x = xCur;
                    cards[i].y = yCur - cardWH / 2;

                    //Good card debug console
                    //console.log('card: ' + i + " has coordinates: " + xCur + ", " + yCur);

                    i++;//increase index

                    // adjust x stepper
                    xCur = xCur + cardWH + margin;

                }
                //adjust stepper for next column
                xCur = marSide;
                yCur = yCur + cardWH + margin;
            }
        } else { console.log('row-column / cardCount mismatch. Rows= ' + rows + '. Column= ' + columns + '. cardCount=' + cardCount) }

        return cards;
    };

    //card click manage
    $scope.cardClicked = function (card) {
        if ($scope.button.content == 'DONE' || $scope.button.content == 'NEXT') {
            //store requested information in factory function moreCard
           // moreCard.setMore(card);
            
            // Redirect to more info page
            //$location.path("#/app/memory/moreAlgae");
        }
        if ($scope.imobalize == false && card.done == false) {
            //card.bShown = !card.bShown;
            $scope.updateScore(card.name, card.match)
        }
    }


    //<<<>>>START OF GAME CODE<<<>>>\\

    //<<>>SETUP VARS<<>>

    $scope.score = 0;
    $scope.gameRound = 0; // will even out score for card

    //to get new cards on button push
    $scope.newCards = function () {

        //que  less cards if needed
        //This is tricky good luck. Adjust columns and Rows to get desired amount of cards on last page
        //44444
        if (cardPouch.length < usualCount / 2) { //usual count is old cardCount
            cardCount = cardPouch.length * 2;
            columns = 2; ///EDIT THIS with more plankton
            rows = 1;    //EDIT THIS with more plankton
            calcCardSize();
        }

        //console.log('cardPouch= ' + cardPouch);
        chosenCards = [];
        chosenCards = cardPouchintoChosenCards(chosenCards); //error here
        //console.log("chosenCards  = " + chosenCards);

        //make and lable card matches( .match = which )
        $scope.chosenCards = cardHandMatch(chosenCards);


        //position cards
        $scope.hand = cardPosition($scope.chosenCards, $scope.cardWH, rows, columns, marHead, margin, marSide);
        $scope.chosenCards = null;

        //card hand edit
        for (i = 0; i < $scope.hand.length; i++) {
            $scope.hand[i].bShown = true; //flipped down
            $scope.hand[i].done = false;

        }
    }



    //THIS BUTTON STARTS A NEW ROUND
    //SET UP BUTTON
    $scope.button = {};
    $scope.button.style = "button button-full button-assertive";
    $scope.button.content = "MATCH ALL CARDS";
    $scope.button.enable = false;


    $scope.button.clicked = function (enabled) { //enabled passed in is the enabled above


        //enabled = true //for debugging
        if ($scope.score == totalCards) {
            $window.location.href = '#/app/gFinal';
            $scope.button.style = "button button-full button-calm";
            $scope.button.content = 'DONE'
        } else if (enabled == true) {

            //disable button.
            $scope.button.enable = false; //debug comment

            //turn around the cards
            for (i = 0; i < $scope.hand.length; i++) {
                $scope.hand[i].bShown = true;
            }

            $timeout(function () {
                $scope.gameRound++;
               // console.log('scope.gameRound is: ' + $scope.gameRound);
                $scope.bfinalAct = true;

                $scope.newCards()

                //que action halfway into final act (1s into 2s)
                $timeout(function () {

                    $scope.button.style = "button button-full button-assertive";
                    $scope.button.content = "MATCH ALL CARDS";
                   // console.log('button enable: ' + $scope.button.enable);

                }, 1000);

                //end finalact after done
                $timeout(function () { $scope.bfinalAct = false }, 2500);
            }, 1000);

        }
    }


    //SCORE
    $scope.scoreCircWH = $scope.deviceWidth / 5; //scorebord dementions

    //score update(once per click on a card)
    cardClick = 0;
    var memName = "none";
    var memMatch = "none";
    var prevCardId = 1;

    // Current Cards
    var card1C = null;
    var card2C = null;

    // Old Cards
    var card1O = null;
    var card2O = null;

    $scope.updateScore = function (cardName, cardMatch) {

        //get card identifier
        cardId = null;
        for (i = 0; i < $scope.hand.length; i++) {
            //check for correct name and match
            if ($scope.hand[i].name == cardName && $scope.hand[i].match == cardMatch) {
                cardId = i;
                break; //exit for loop
            }
        };

        if ($scope.hand[cardId].done == false) {
            //first card pressed DOES NOT UNFLIP PREVIOUS CARDS
            if (cardClick == 0) {

                // Set card 1 old and current
                card1O = card1C;
                card1C = cardId;

                $scope.hand[card1C].bShown = false;
                
                cardClick = 2;
                memName = $scope.hand[cardId].name;
                memMatch = $scope.hand[cardId].match;
            }
            

            // CardClick  = 0 removes CardId restrictions
            if (cardClick == 1 && card2C != cardId && card1C != cardId) {

                // update id
                card1O = card1C;
                card1C = cardId;

                card2O = card2C;
                card2C = null;

                if ($scope.hand[card1O].done == false) {
                    // FLIP PREVIOUS DOWN
                    $scope.hand[card1O].bShown = true; //works
                    //go back and flip the first card must be (2) from last rotation
                    $scope.hand[card2O].bShown = true; //works
                }
                

                // Flip current UP ///////////////////////////////////////////WORKING HERE
                cardClick = 2;
                $scope.hand[card1C].bShown = false;

                memName = $scope.hand[cardId].name;
                memMatch = $scope.hand[cardId].match;


            } else if (cardClick == 2) { //if the first card is already pressed 
                
                if (card1C != cardId) {
                    // update id
                    card2C = cardId;

                    $scope.hand[card2C].bShown = false;
                    // $scope.imobalize = true;//imobalize until flipped back
                    cardClick = 1;
                    prevCardId = cardId; // remember old id
                    if (memName == $scope.hand[cardId].name) {
                        if (memMatch != $scope.hand[cardId].match) {
                            //the cards are matched correctly, Reward.
                            $scope.score = $scope.score + 2;
                            $scope.hand[cardId].done = true;
                            for (i = 0; i < $scope.hand.length; i++) {
                                if ($scope.hand[i].name == memName && $scope.hand[i].match == memMatch) {
                                    $scope.hand[i].done = true; //first choice card finish
                                }
                            };


                            //edit Button content if all are flipped
                            if ($scope.score == totalCards) {
                                $scope.button.style = "button button-full button-calm";
                                $scope.button.content = 'DONE'

                            } else if ($scope.score - usualCount * $scope.gameRound == cardCount) {
                                
                                cardClick = 0;
                                $scope.button.style = "button button-full button-balanced";
                                $scope.button.content = "NEXT";
                                $scope.button.enable = true;
                                //round score reset when button pressed

                            }

                        }
                    }
                }
              } // end of card click 2
            } //end of finished (done) if


    }

    $scope.nameLength = 7; //can change
    $scope.addDot = function (name) {
        if (name.length > $scope.nameLength) {
            return '.';
        }
    }

    //end of flipback


    /* //register click// If odd click (1,3,5 eg) store value // If even click (2,4,6, eg)  check and delete stored
     $scope.clickRegister = function(card){
         clickCnt++;
         //odd
         if (clickCnt % 2 == 1) {
             store = card.name;
             card.selected = true;
 
         } else if (clickCnt % 2 == 0) { //even
             //check if ng-repeat card name matches last selected
             if (store == card.name) {
                 $scope.score++;
 
             }
         }
     }; */

    //demo Card

    $scope.demoShow = true;
    $scope.demoFlip = function () {
        $scope.demoShow = !$scope.demoShow
        //setTimeout($scope.demoFlip(), 3000);
        console.log('flipped Demo');
    }



    //ANIMATION OF CARDS
    //controler

    //$scope.bFront = true;

    //bool oposite for page
    $scope.opposite = function (bool) {
        console.log("tapped")
        if (bool == true) {
            console.log("bool now: false");
            return false
        }
        if (bool == false) {
            console.log("bool now: true");
            return true
        }
    };


})

.controller('KahiKaiCtrl', function ($scope, $window) {
    $scope.imgX = 2480;
    $scope.imgY = 7013;

    $scope.team = [

        {
            color: 'aqua',
            name: 'Eric Rottinger',
            add: 'President',
            pic: 'img/team/Eric_Roettinger.png',
            content: 'Biologist, Photographer and co-founder (Hawaii and France)'
        },
        {
            color: 'aqua',
            name: 'Anuschka Faucci',
            add: 'Vice-President',
            pic: 'img/team/Anuschka_Faucci.jpg',
            content: 'Biologist, Educator and co-founder (Hawaii)'
        },
        {
            color: 'aqua',
            name: 'Aldine Amiel',
            pic: 'img/team/Aldine_Amiel.jpg',
            content: 'Biologist, Photographer and co-founder (Hawaii and France)'
        },
        {
            color: 'aqua',
            name: 'Patricia Murata',
            pic: 'img/team/Patricia-Murata.jpg',
            content: 'Biologist and co-founder (Hawaii)'
        },
        {
            color: 'aqua',
            name: 'Christophe Mocquet',
            pic: 'img/team/Christophe.jpg',
            content: 'Biologist, Marine Science Lecturer, SKEMA Business school (France)'
        },

        {
            color: 'aqua',
            name: 'Matthew JW Fala',
            pic: 'img/team/Matt-Fala.jpg',
            content: 'CS specialist at Iolani, and Chief App Designer for Kahi Kai (Hawaii)'
        },

        {
            color: 'aqua',
            name: 'Emmanuel Reynaud',
            pic: 'img/team/Emmanuel_Reynaud.jpg',
            content: 'Specialized in optics at University of Dublin (Ireland)'
        },
        {
            color: 'aqua',
            name: 'Eva Schmid',
            pic: 'img/team/Eva_Schmidt.jpg',
            content: 'Biologist specialized in optics at University of California at Berkeley (USA)'
        },

        {
            color: 'aqua',
            name: 'Noan Le Bescot',
            pic: 'img/team/Noan-Le-Bescot.jpg',
            content: 'Biologist at the Station Zoologique de Roscoff (France)'
        },

        {
            color: 'aqua',
            name: 'Franziska Glueck',
            pic: 'img/team/turrid.jpg',
            content: 'Biologist at the IOW (Germany)'
        },


        /*{
            name: 'Aldine_Amiel',
            pic: 'img/team/Aldine_Amiel.jpg',
            content: 'Biologist, Photographer and co-founder (Hawaii and France)'
        },*/

    ];

    $scope.deviceWidth = $window.innerWidth;
    $scope.deviceHeight = $window.innerHeight;
    $scope.scrollWidth = $scope.deviceWidth;
    $scope.scrollHeight = $scope.imgY * $scope.scrollWidth / $scope.imgX;
})
