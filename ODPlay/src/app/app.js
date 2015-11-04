(function (window, angular) {
    
    var moduleName = window.APP.ModuleNames.main || 'App',
        routerModuleName = window.APP.ModuleNames.router || 'App.Router';

    
   
    var app = angular.module(moduleName, [routerModuleName]);




})(window, angular)