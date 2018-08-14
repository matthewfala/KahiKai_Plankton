// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngAnimate', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $stateProvider
  
    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    .state('app.memory', {
        url: '/memory',
        views: {
            'menuContent': {
                templateUrl: 'templates/memory.html',
                controller: 'MemoryCtrl'
            }
        }
    })

    .state('app.moreAlgae', {
        url: '/memory/moreAlgae',
        views: {
            'menuContent': {
                templateUrl: 'templates/moreAlgae.html',
                controller: 'moreCtrl'
            }

        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'galleryCtrl'
            }

        }
    })

    .state('app.KahiKai', {
        url: '/KahiKai',
        views: {
            'menuContent': {
                templateUrl: 'templates/KahiKai.html',
                controller: 'KahiKaiCtrl'
            }

        }
    })

    .state('app.game', {
        url: '/game',
        views: {
            'menuContent': {
                cache: false,
                templateUrl: 'templates/game.html',
                controller: 'GamePlayCtrl'
            }

        }
    })

    .state('app.gHome', {
        url: '/gHome',
        views: {
            'menuContent': {
                templateUrl: 'templates/gHome.html',
                controller: 'GameStartCtrl'
            }

        }
    })

    .state('app.gFinal', {
        url: '/gFinal',
        views: {
            'menuContent': {
                cache: false,
                templateUrl: 'templates/gFinal.html',
                controller: 'GameEndCtrl'
            }

        }
    })

    .state('app.dichotomous', {
        url: '/dichotomous',
        views: {
            'menuContent': {
                templateUrl: 'templates/dichotomous.html',
                controller: 'dichotomousCtrl'
            }

        }
    })

        /*
    .state('app.myPlankton', {
        url: '/myPlankton',
        views: {
            'menuContent': {
                
                templateUrl: 'templates/myPlankton/myPlankton.html',
                controller: 'myPlanktonCtrl'
            }

        }
    })
    
    .state('app.myData', {
        url: '/myPlankton/myData',
        views: {
            'menuContent': {

                templateUrl: 'templates/myPlankton/myData.html',
                controller: 'myPlanktonCtrl'
            }

        }
    })
    */

    //popover is for the browse plankton sort feature
    .state('app.popover', {
        url: '/popover',
        templateUrl: 'templates/popover.html',

    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/about')

})