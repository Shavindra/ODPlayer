(function (window, angular) {
    
    var moduleName = 'app',
        routesModuleName = window.APP.ModuleNames.routes || 'App.Routes',
        appControllerName = window.APP.ModuleNames.controllers || 'App.Controllers';
    appDirectivesName = window.APP.ModuleNames.directives || 'App.Directives',
        appServicesName = window.APP.ModuleNames.services || 'App.Services';
    
    
    //App controllers module
    var controllers = angular.module(appControllerName, []);
    
    //App Directives module
    var directives = angular.module(appDirectivesName, []);
    
    //APP Services module
    var directives = angular.module(appServicesName, []);
    
    //Main Controller
    controllers.controller('MainCtrl', ['$route', '$routeParams', '$location', '$scope', '$filter',

        function ($route, $routeParams, $location, $scope, $filter) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
            
            console.log('MAIN CONTROLLER', $scope);
            $scope.components = {
                header: {
                    src: 'views/components/header/cmpt-Header-view.html',
                    ctrl: 'cmptHeaderCtrl'
                },
                footer: {
                    src: 'views/components/footer/cmpFooter.html',
                    ctrl: 'cmptFooterCtrl'
                },
                carouselHome: {
                    src: 'App/components/Carousel-Home/cmpt-carousel-Home-view.html',
                    ctrl: 'cmptCarouselHomeCtrl'
                },
                playlist: {
                    src: 'App/components/Playlist/cmpt-Playlist-view.html',
                    ctrl: 'cmptPlaylistCtrl'
                },
                playlistItem: {
                    src: 'App/components/Playlist-Item/cmp-Playlist-Item-view.html',
                    ctrl: 'cmptPlaylistItemCtrl'
                }
            }
            

        }

    ]);
    
    var app = angular.module(moduleName, [appControllerName, routesModuleName]);
    



})(window, angular, APP);

