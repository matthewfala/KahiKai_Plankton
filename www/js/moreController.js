angular.module('starter.controllers')

.factory('moreCard', function() {
    var facCard = {};

    return {
        setMore: setMore,
        getMore: getMore
    }
    function setMore(newCard) {
        facCard = newCard;
    };
    
    function getMore() {
        return facCard;
    };

})


.controller('moreCtrl', function ($scope, $sce, moreCard) {

    // Run with ng-init, before view is setup
    $scope.linkCard = function() {
        $scope.moreCard = moreCard.getMore(); // moreCard;
    }

    // Before Entering Page
    $scope.$on('$ionicView.beforeEnter', function() {
        $scope.morePane = $sce.trustAsHtml(buildMoreHtmlPane($scope.moreCard));
        $scope.moreContent = $sce.trustAsHtml(buildMoreHtmlContent($scope.moreCard));
    });

    // Relocate to a service/factory function if list gets longer
    var definitions = [
        { key: "unicellular", value: "Single-celled organisms including bacteria, archaea, protozoa, and unicellular algae" },
        { key: "metazoa", value: "Multicellular, eukaryotic organisms of the kingdom animalia; multicellular animals" },
        { key: "cnidaria", value: "Phylum of aquatic, mostly marine species, all with cnidocytes (stinging cells) used for capturing prey, many produce colonies; they include jellyfish and corals" },
        { key: "echinodermata", value: "Phylum of marine species where the adults usually are radially symmetrical; they include sea urchins, starfish, brittle stars, sea cucumbers and sea lilies" },
        { key: "mollusca", value: "Phylum of aquatic and terrestrial animals with a soft unsegmented body usually enclosed in a calcareous shell; they include snails, clams, and squids" },
        { key: "annelida", value: "Phylum of segmented worms, many with movable bristles called setae; they include earthworms, leeches and polychaetes" },
        { key: "arthropoda", value: "Phylum of invertebrates, having a segmented body, jointed limbs, and usually a chitinous shell that undergoes moltings; they include insects, spiders and crustaceans" },
        { key: "sipuncula", value: "Phylum of bilaterally symmetrical, unsegmented marine worms, also called peanut worms" },
        { key: "phoronida", value: "Phylum of marine invertebrates that filter-feed and build upright tubes of chitin to support and protect their soft bodies, also called horseshoe worms" },
        { key: "chaetognatha", value: "Phylum of small marine invertebrates with a transparent arrow-shaped body and a head with small hooks for grasping prey, also called arrow worms" },
        { key: "hydrozoa", value: "Taxonomic class of cnidaria with mostly marine species characterized by a complex life cycle that includes a sessile, often colonial polyp stage and a free-swimming medusa stage; they include hydroids and siphonophores" },
        { key: "anthozoa", value: "Taxonomic class of cnidaria comprising colonial and solitary polyps; they include corals, sea anemones, and sea pens" },
        { key: "ophiuroidea", value: "Taxonomic class of echinodermata characterized by slender flexible arms radiating from a central disk; they include brittle stars and basket stars" },
        { key: "echinoidea", value: "Taxonomic class of echinodermata characterized by a spiny shell called test; they include sea urchins, heart urchins and sand dollars" },
        { key: "gastropoda", value: "Taxonomic class of mollusca characterized by a single usually coiled shell or no shell, a muscular foot and a head with sensory organs such as eyes; they include snails, slugs, and nudibranchs" },
        { key: "bivalvia", value: "Taxonomic class of mollusca characterized by a 2-valved hinged shell and lack of head; they include clams, oysters, scallops, and mussels" },
        { key: "cephalopoda", value: "Taxonomic class of mollusca characterized by a well developed head with eyes surrounded by a group of muscular sucker-bearing arms, a sac containing ink and the most highly developed nervous system of all invertebrates; they include octopuses, squids, cuttlefishes, and nautiluses" },
        { key: "polychaeta", value: "Taxonomic class of annelida characterized by body segments with a pair of fleshy appendages called parapodia tipped with many bristles (setae) used for swimming or burrowing" },
        { key: "copepoda", value: "Taxonomic subclass of microscopic crustaceans within the phylum arthropoda characterized by a pear-shaped body, a large median eye, and long antennae used for swimming" },
        { key: "amphipoda", value: "Taxonomic order of small crustaceans within the phylum arthropoda characterized by laterally compressed bodies lacking a carapace" },
        { key: "decapoda", value: "Taxonomic order of crustaceans within the phylum arthropoda characterized by 5 pairs of legs one or more of which are modified into pincers, stalked eyes, and the head and thorax fused into a cephalothorax and covered by a carapace; they include shrimps, lobsters and crabs" },

    ]

    function findDef(key) {
        for (i = 0; i < definitions.length; i++) {
            if (key == definitions[i].key) {
                return definitions[i].value;
            }
        }
    }

    function titleCase(str) {
        str = str.toLowerCase().split(' ');

        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].split('');
            str[i][0] = str[i][0].toUpperCase();
            str[i] = str[i].join('');
        }
        return str.join(' ');
    }

    var buildMoreHtmlPane = function(card) {

        var html = "";

        //  Pane 
        html = html + '<div class="domDiv" style= " background-image: url(' + "'img/card_icon/large/" + card.pic + "'" + ')"> <div id="blackBox"> <div class="domTitle" style="visibility:hidden;"> <h1>' + card.name.toUpperCase() + '</h1> </div> </div> </div>  ';

       // html = html + ' <div class="domTitle"> <h1>' + card.name.toUpperCase() + '</h1> </div>';
        
        return html;

    }

    var buildMoreHtmlContent = function(card){
        html = "";

        // Open Container
        html = html + '<div class="container"> ';

        // Black Bar
        html = html + '<div class="domTitle"> <h1>' + card.name.toUpperCase() + '</h1> </div>'
        // Title
        //html = html + '<div id="general"> <h2><b>Food Web Position:</b></h2> <p>' + card.web +'</p> <h2><b>Habitat:</b></h2> <p>' + card.habitat + '</p> <h2><b>Description:</b></h2> <p>' + card.description + '</p>  </div> ';
        html = html + '<div class="generalDescription"> <div class="topBox"> <h3>Information</h3> <div class="wBar"></div> </div> <div class= "bottomBox"> <p>' + card.description + '</p> </div> </div> ';

        html = html + '<div class="info general"> <div class="leftBox"> <h3>Web</h3> <h2>Food Web</h2> </div> <div class= "rightBox"> <p>' + card.web + '</p> </div> </div> ';

        html = html + '<div class="info general"> <div class="leftBox"> <h3>Habitat</h3> <h2> Description </h2> </div> <div class= "rightBox"> <p>' + card.habitat + '</p> </div> </div> ';

        if (card.uni == true) {
            html = html + '<div class="info" id="category"> <div class="leftBox"> <h3>Unicellular</h3> <h2>Category</h2> </div> <div class= "rightBox"> <p>' + findDef("unicellular") + '</p> </div> </div> ';
        } else if (card.uni == false) {
            html = html + '<div class="info" id="category"> <div class="leftBox"> <h3>Metazoa</h3> <h2>Category</h2> </div> <div class= "rightBox"> <p>' + findDef("metazoa") + '</p> </div> </div> ';
        }

        if (card.phylum != 'none' && typeof card.phylum != 'undefined') {
            html = html + '<div class="info" id="phylum"> <div class="leftBox"> <h3>' + titleCase(card.phylum) + '</h3>  <h2>Phylum</h2> </div> <div class="rightBox"> <p>' + findDef(card.phylum) + '</p> </div> </div> ';
        }

        if (card.class != 'none' && typeof card.class != 'undefined') {
            html = html + '<div class="info" id="class"> <div class="leftBox"> <h3>' + titleCase(card.class) + '</h3>  <h2>Class</h2> </div> <div class= "rightBox"> <p>' + findDef(card.class) + '</p> </div> </div> ';
        }

        // Close Container and content
        html = html + "<div class='spacer'> </div> </div>";

        return html;

    }

   
})


