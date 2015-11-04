(function (window, angular) {
    
    var appModuleName = window.APP.ModuleNames.main || 'App',
        appConfig = window.APP.ModuleNames.config,
        appControllers = window.APP.ModuleNames.controllers;
    
    app = angular.module(appControllers, [appConfig]);
    
    app.controller('HomePageCtrl', ['$scope', function ($scope) {
            
            console.log($scope);
        }]);



})(window, angular);