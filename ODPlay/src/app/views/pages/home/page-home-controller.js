(function (window, angular) {
    
    var moduleNames = window.APP.ModuleNames,
        appName = moduleNames.main || 'App',
        appConfigName = moduleNames.config,
        controllerModuleName = window.APP.ModuleNames.controllers || 'App.Controllers';
    
    
    var controllers = angular.module(controllerModuleName)
    
    controllers.controller('HomePageCtrl', ['$scope', function ($scope) {
            console.log($scope);
        }]);
    
    
    if (window.DEBUG.status) {
        
        console.log('HomePageCtrl');

    }

})(window, angular);

