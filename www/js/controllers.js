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
