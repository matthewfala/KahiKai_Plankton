angular.module('starter.controllers')

//Edit to add more cards! 11111
.factory('cardPack', function () {
    cardPack = [
        {
            name: "Cyanobacteria puff",
            pic: "cyanobacteria.jpg",

            taxonomic: "Bacteria - Eubacteria - Cyanobacteria - Trichodesmium",
            Tdomain: "Bacteria",
            Tkingdom: "Eubacteria",
            Tphylum: "Cyanobacteria",
            Tgenus: "Trichodesmium",

            description: "This little puff is a colony of cyanobacteria, probably in the genus Trichodesmium, commonly found in tropical and subtropical shallow waters low in nutrients. Cyanobacteria are bacteria that obtain their energy through photosynthesis. These puffs are little floating oases providing habitat for many marine organisms including other bacteria, diatoms, protozoans, and copepods. Copepods are its primary predator.",
            habitat: "Tropical and subtropical shallow waters; holoplankton",
            web: "Producers/autotrophs (photosynthesis)"
        },

        {
            name: "Diatoms",
            pic: "diatom.jpg",

            taxonomic: "Chromalveolata - Stramenopiles - Diatoms",
            Tdomain: "Chromalveolata",
            Tkingdom: "Stramenopiles",
            Tphylum: "Diatoms",
            Tgenus: "NONE",

            description: "Diatoms are a major group of algae, and are among the most common types of phytoplankton. Most diatoms are unicellular, although they can exist as colonies in the shape of filaments, chains, ribbons, zigzags, or stars. A unique feature of diatom cells is that they are enclosed within a cell wall made of silica. Diatom communities are a useful tool for monitoring environmental conditions, past and present, and are commonly used in studies of water quality.",
            habitat: "Surface layer of open ocean; holoplankton",
            web: "Producers/autotrophs (photosynthesis)"

        },
        {
            name: "Dinoflagellate",
            pic: "dinoflagellate.jpg",

            taxonomic: "Chromalveolata - Alveolata - Dinoflagellata - Ceratium",
            Tdomain: "Chromalveolata",
            Tkingdom: "Alveolata",
            Tphylum: "Dinoflagellata",
            Tgenus: "Ceratium",

            description: "Dinoflagellates are protists (single-celled organisms), and most are part of the marine plankton but they are common in fresh water habitats as well. Their populations are distributed depending on temperature, salinity, or depth. Many dinoflagellates are known to be photosynthetic, but a large fraction of these are in fact mixotrophic, combining photosynthesis with ingestion of prey (phagotrophy).",
            habitat: "Surface layer of open ocean; holoplankton",
            web: "Producers/autotrophs (photosynthesis)",
            web2: "mixotrophs (autotroph and consumer at the same time)"
        },
        {
            name: "Foram",
            pic: "foram.jpg",

            taxonomic: "Chromalveolata - Rhizaria - Foraminifera - Globigerina",
            Tdomain: "Chromalveolata",
            Tkingdom: "Rhizaria",
            Tphylum: "Foraminifera",
            Tgenus: "Globigerina",

            description: "Forams are single-celled organisms common in all benthic and planktonic marine environments. Their shells are divided into chambers added during growth. Forams such as this Globigerina have spherical chambers made out of calcium carbonate with long thin spines that help them to stay buoyant in the plankton. ",
            habitat: "Surface layer of open ocean; holoplankton",
            web: "Mostly consumers, some have unicellular algae as endosymbionts, some are mixotrophic as they retain chloroplasts from ingested algae to conduct photosynthesis"
        },
        {
            name: "Jellyfish",
            pic: "hydrozoan.jpg",

            taxonomic: "Metazoa - Cnidaria - Hydrozoa - Anthoathecata - Zanclea",
            Tkingdom: "Animalia",
            Tphylum: "Cnidaria",
            Tclass: "Hydrozoa",
            Torder: "Anthoathecata",
            Tgenus: "Zanclea",

            description: "Hydrozoa is a taxonomic class of individually very small, predatory animals, some solitary and some colonial, most living in salt water. Most hydrozoan species include both a polyp and a medusa stage in their life cycle. Zanclea medusae bud off the polyp stalk and are the sexual reproducing stage, releasing gametes into the water. The gametes unite and develop into planula larvae (similar to coral planula larvae) that metamorphose into benthic polyps.",
            habitat: "Open ocean as medusae, benthic as polyps, Zanclea polyps often live in symbiosis with corals; meroplankton",
            web: "Consumers/predators, medusae and polyps catch other zooplankton with stinging cells (nematocysts) on tentacles"
        },
        {
            name: "Coral",
            pic: "coral_planula.jpg",

            taxonomic: "Metazoa - Cnidaria - Anthozoa - Scleractinia",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is the short-lived coral larva of a stony coral (scleractinian coral). Most stony corals build colonies in clear (oligotrophic = nutrient-poor), tropical shallow oceans and are world's primary reef-builders. Many scleractinian corals have symbiotic dinoflagellate algae in their cells. This larva already has photosynthetically active algae in its body (the little brown dots), which are transmitted from its parent.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Coral larvae do not feed, adults are reef builders/architects and eat zooplankton, catching them with their tentacles"
        },

        {
            name: "Brittle star (larva)",
            pic: "ophiopluteus.jpg",

            taxonomic: "Metazoa - Echinodermata - Ophiuroidea",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a planktonic larval stage of a brittle star, also called ophiopluteus. Not all species of brittle stars develop via a planktonic larva; many brood their larvae in pouches within their bodies and release juvenile brittle stars. As adults, brittle stars crawl across the sea floor using their five long, slender, flexible arms for locomotion.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Most adult brittle stars are scavengers and detritus feeders, but they also prey on live animals such as small crustaceans and worms."
        },

        {
            name: "Brittle star (juvenile)",
            pic: "brittle_star.jpg",

            taxonomic: "Metazoa - Echinodermata - Ophiuroidea",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This delicate brittle star is a freshly metamorphosed juvenile transitioning from a planktonic larval life to a benthic adult life. Several species of brittle stars live at shallow depths among sponges, corals, and rocks, but many species live at depths greater than 200m (600feet).",
            habitat: "ocean as larvae, benthic as adults; meroplankton",
            web: "Most adult brittle stars are scavengers and detritus feeders, but they also prey on live animals such as small crustaceans and worms."
        },

        {
            name: "Sea urchin",
            pic: "juvenile_urchin.jpg",

            taxonomic: "Metazoa - Echinodermata - Echinoidea",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a sea urchin transitioning from a larva (also called echinopluteus), after several months in the plankton, to a juvenile urchin. The two long thin spines are vestiges from its larval form, whereas the few tube feet are characteristic of its adult stage. Adult urchins have a rigid round body, also called a test, and many spines and tube feet on which they move slowly.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Sea urchins mostly eat algae from rocky bottoms. Sea otters, starfish, wolf eels, triggerfish, and other predators feed on sea urchins."
        },

        {
            name: "Sea butterfly",
            pic: "pteropod.jpg",

            taxonomic: "Metazoa - Mollusca - Gastropoda - Thecosomata - Cavolinia",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "Sea butterflies (also known as pteropods, from the Greek meaning 'wing-footed') are free-swimming pelagic sea snails that spend their whole life in the plankton(holoplanktonic). Instead of a foot used for crawling, the foot is modified into two wing-like lobes used for swimming. The shell is composed of calcium carbonate, and is very thin and translucent, which makes them among the first marine organisms to likely be negatively affected by ocean acidification.",
            habitat: "Top 25m of open ocean; holoplankton",
            web: "Consumers of phytoplankton, eaten by many fish"
        },

        {
            name: "Turrid snail",
            pic: "turrid_veliger.jpg",

            taxonomic: "Metazoa - Mollusca - Gastropoda - Conoidea - Turridae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This little beautiful snail is a planktonic veliger larva just prior to metamorphosing into a benthic adult snail. Larval shells (also called protoconchs) usually look very different than adult shells and are therefore often hard to identify further. However this one might be in the group of turrids or tower shells. Turrids are closely related to cone snails. Both snail groups are effective predators, using a venomous harpoon mechanism to paralyze their prey. Most adult turrid snails live in shallow waters, some even in tide pools.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Consumers/predators"
        },

        {
            name: "Sea slug, Nudibranch",
            pic: "nudibranch_veliger.jpg",

            taxonomic: "Metazoa - Mollusca - Gastropoda - Nudibranchia - Phestilla sibogae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is the veliger larva of a sea slug commonly found in the plankton, drifting with the current until it finds a good spot to settle and start a benthic life. The two black spots are its eyes, which are surrounded by a ciliated velum used for swimming. Once it has found a suitable habitat to settle it will metamorphose into an adult sea slug that feeds on coral polyps of the genus Porites.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Consumers of plankton as larvae, predators on coral polyps as adults",
        },

        {
            name: "Clam",
            pic: "bivalve.jpg",

            taxonomic: "Metazoa - Mollusca - Bivalvia",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a clam larva ready to metamorphose and change from a life in the plankton and open ocean to one in soft sediments or rocky shores. Veliger larvae of bivalves usually have a velum with cilia to swim. They develop the organs and systems used for metamorphosis and an adult life during their late larval stages. This larva has retracted its velum in the shell, but clearly shows a complex structure of organs under its transparent shell.",
            habitat: "Open ocean as larva, benthic as adult; meroplankton",
            web: "Consumers of plankton as larvae, filter feeders as adults",
        },

        {
            name: "Squid",
            pic: "cephalopod.jpg",

            taxonomic: "Metazoa - Mollusca - Cephalopoda - Sepiolida",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This juvenile sepiolid squid is temporarily part of the plankton before settling to sandy bottoms, where it lives its adult life. The black spots spread throughout its body are chromatophore cells, which contain pigments responsible for the color patterns of the squid. The size of the chromatophore cells is under neuromuscular control, allowing the squid to quickly match its coloration to the environment.",
            habitat: "Open ocean as larvae, benthic soft sediments as adults; meroplankton",
            web: "Visual predator",
        },

        {
            name: "Bristle worm (Sabellariidae)",
            pic: "bristle_worm.jpg",

            taxonomic: "Metazoa - Annelida - Polychaeta - Sabellariidae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a larva of a tube-building adult bristle worm, or polychaete. It is easily recognized by its pair of tentacle buds, and two bundles of long, barbed, provisional bristles (chaetae). Adult Sabelariid bristle worms may form very dense aggregations in sandy and rocky habitats. Some species are not only important biologically but also geologically because they can form sandy reefs where appropriate hydrodynamic and sedimentological characteristics are present, and have done so in the past and present.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Consumers/predators as larvae, suspension feeders as adults",
        },
        {
            name: "Bristle worm (Syllidae)",
            pic: "bristle_worm_2.jpg",

            taxonomic: "Metazoa - Annelida - Polychaeta - Syllidae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "Syllid polychaetes can reproduce both sexually and asexually in many different ways. In some species, sexually mature individuals develop single or multiple stolons (reproductive adults). The photo shows one of these stolons with large eyes and long capillary chaetae adapted for swimming in the water column. They bud off from the benthic adult for swarming and spawning in the plankton and then die.",
            habitat: "Open ocean as larvae and reproductive adults (swarming stolons), benthic as adults; meroplankton",
            web: "Predators",
        },
        {
            name: "Peanut worm",
            pic: "sipunculid.jpg",

            taxonomic: "Metazoa - Sipuncula",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This colorful larva is the planktonic larval stage of a peanut worm. The green digestive tract can be seen through its transparent body. Peanut worms are unsegmented marine worms, and adults are common in shallow waters where they live in burrows or empty mollusk shells.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Consumers/predators as larvae, detritovores as adults",
        },
        {
            name: "Copepod (Pontellidae)",
            pic: "pontellid_copepod.jpg",

            taxonomic: "Metazoa - Arthropoda - Copepoda - Calanoida - Pontellidae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a beautiful and relatively large pontellid copepod. Copepods within this family are relatively common and contain fluorescent proteins similar to those found in corals. Adult calanoid copepods eat other smaller zooplankton and are eaten by many fish and baleen whales.",
            habitat: "Open ocean; holoplankton",
            web: "Predators",
        },
        {
            name: "Copepod (Cyclopoida)",
            pic: "cyclopoid_copepod.jpg",

            taxonomic: "Metazoa - Arthropoda - Copepoda - Cyclopoida",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "Cyclopoid copepods are often smaller in body size than calanoid copepods. Due to their small size they are understudied in the world oceans because plankton nets of 200um mesh size and larger are commonly used that let them slip through. Female cyclopoids wear their eggs on the outside in egg-sacs.",
            habitat: "Open ocean; holoplankton",
            web: "Predators (often on other copepods) or omnivores",
        },
       {
           name: "Amphipod",
           pic: "amphipod.jpg",

           taxonomic: "Metazoa - Arthropoda - Amphipoda - Hyperiidae",
           Tkingdom: "",
           Tphylum: "",
           Tclass: "",
           Torder: "",
           Tgenus: "",

           description: "Hyperiid amphipods live exclusively in marine planktonic habitats. They are easily distinguished by their very large eyes. Most hyperiid amphipods are parasites or prey on salps and jellyfish. A few species prey on copepods and other small plankton. Many are symbionts of gelatinous planktonic animals such as salps, jellyfish and ctenophores and most are associated with gelatinous plankton during some part of their life cycle.",
           habitat: "Open ocean; holoplankton",
           web: "Parasites or predators",
       },
        {
            name: "Mantis shrimp",
            pic: "mantis_shrimp.jpg",

            taxonomic: "Metazoa - Arthropoda - Stomatopoda - Squillidae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is one of the last planktonic stages of a mantis shrimp before developing into an adult and settling in a benthic habitat. The stalked large eyes and the large raptorial claws are distinct characteristics of mantis shrimp. Adults are known as aggressive predators with excellent vision and powerful claws used to attack and kill their prey.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Predators as larvae and adults",
        },
        {
            name: "Crab",
            pic: "megalopa_larva.jpg",

            taxonomic: "Metazoa - Arthropoda - Decapoda - Brachyura",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This crab larva is at the megalopa stage, the last larval stage before it settles on the reef. Megalopa larvae use their big eyes to find their prey and their abdomen as a paddle to swim. Crab megalopa larvae are voracious predators, mostly eating other zooplankton, whereas most adult crabs are scavengers.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Predators as larvae, predators or scavengers as adults",
        },
        {
            name: "Porcelain crab",
            pic: "zoea.jpg",

            taxonomic: "Metazoa - Arthropoda - Decapoda - Anomura - Porcellanidae",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a larval zoea stage of a porcelain crab. Porcelain crab zoea larvae are well defended from potential predators by their long inflexible spines that often are much longer than the body of the larva. Zoea larvae are among the more agile planktonic animals using two pairs of appendages to swim. Zoea larvae develop into a megalopa form, and then into a functional adult. Adult porcelain crabs are very delicate small crabs with flattened bodies, often living in rock crevices, filter feeding with feathery hair-like structures on their mouthparts.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Predator as larvae, filter feeders as adults",
        },
        {
            name: "Horseshoe worm",
            pic: "phoronid.jpg",

            taxonomic: "Metazoa - Phoronida",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This beautiful larva is the planktonic stage of a phoronid, or horseshoe worm. Adult phoronids live in pergament-like tubes on the sea floor from the intertidal to 400m depths. The larva is free-swimming and feeds on plankton with help of feeding tentacles surrounding the mouth. After swimming for about 20 days as part of the plankton, the larva settles on the seabed and quickly metamorphoses into its adult form within 30 minutes.",
            habitat: "Open ocean as larvae, benthic as adults; meroplankton",
            web: "Predators as larvae, suspension feeders as adults",
        },
        {
            name: "Arrow worm",
            pic: "chaetognath.jpg",

            taxonomic: "Metazoa - Cheatognatha",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "Chaetognaths are mostly transparent and torpedo shaped, ranging in size from 2 to 120 mm. Chaetognaths are important predators in many marine food webs. Their high abundance makes up for low species diversity, sometimes dominating the biomass of mid-water plankton. They locate prey by detecting their vibrations, then use hooked, grasping spines on the side of their heads (see picture) to grab their prey and immobilize it with neurotoxins.",
            habitat: "Open ocean; holoplankton",
            web: "Predators",
        },
      /*  {
            name: "template" ,
            pic: "template.jpg" ,

            taxonomic: "",
            Tkingdom: "",
            Tphylum: "",
            Tclass: "",
            Torder: "",
            Tgenus: "",

            description: "This is a description",
            habitat: "I live in grassy hills",
            web: "I am eaten by narwals",
        },  */


    ];
    return cardPack

})