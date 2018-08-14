angular.module('starter.controllers')
// Gallery Items
.factory('galleryItems', function () {
	galleryItems = [

		{
			name: "Copapod",
			keywords: "small",
			img: "p1.jpg",

			// Optional
			desc: "This is a small plankton",
			location: "alawai",
			gps: {x: "", y: ""},
		},

		{
			name: "Diatom",
			keywords: "large",
			img: "diatom.jpg",

			// Optional
			desc: "This is a prehistoric plankton",
			location: "alawai",
			gps: {x: "", y: ""},
		},

		{
			name: "Copepod",
			keywords: "small",
			img: "p3.jpg",

			// Optional
			desc: "This is a small plankton",
			location: "makapu'u",
			gps: {x: "21.3111", y: "157.6601"},
		},

		{
			name: "Unknown",
			keywords: "small",
			img: "p2.jpg",

			// Optional
			desc: "This is a large plankton",
			location: "alawai",
		}

		/*
		{
			name: "Cop",
			keywords: "",
			img: "",

			// Optional
			desc: "",
			location: {x: "", y: ""},

		}
		*/
	]

	return galleryItems;

})
