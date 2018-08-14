angular.module('starter.controllers')
.controller('GamePlayCtrl', function ($scope, $state, $ionicHistory, $location, $window, $timeout, cardPack, moreCard) {

    // Navigation, Set next view to root
    $ionicHistory.nextViewOptions({
        historyRoot: true
    });

    // On Page Enter
    $scope.$on('$ionicView.beforeEnter', function() {
           $scope.newGame();
    });

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
