(function (window, angular) {
    
    var moduleName = 'app',
        routesModule = window.APP.ModuleNames.routes || 'App.Routes',
        appControllers = window.APP.ModuleNames.controllers || 'App.Router';
    
    
    
    var app = angular.module(moduleName, [appControllers, routesModule]);
    
    app.controller('MainCtrl', function ($scope) { 
    
    })


})(window, angular);