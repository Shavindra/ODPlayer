(function (window, angular) {
    
    var moduleName = 'app',
        routesModuleName = window.APP.ModuleNames.routes || 'App.Routes',
        appControllerName = window.APP.ModuleNames.controllers || 'App.Controllers';
    

    angular.module(appControllerName, []);
    
    var app = angular.module(moduleName, [appControllerName, routesModuleName]);
    



})(window, angular, APP);

