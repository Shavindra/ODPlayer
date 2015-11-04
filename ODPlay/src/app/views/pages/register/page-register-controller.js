(function (window, angular) {
    
    var moduleName = window.APP.ModuleNames.config || 'App',
        app = angular.module(moduleName, []);
    
    //App meta data
    app.constant('APP_META', {
        
        appName: 'OD Player',
        appVersion: 2.0,
        apiUrl: 'http://www.google.com?api'
        
    });
    
    //App module names
    app.constant('MODULE_NAMES', window.APP.ModuleNames);
    
    //App user roles
    app.constant('USER_ROLES', {
        
        all: '*',
        admin: 'admin',
        guest: 'http://www.google.com?api',
        paidUser: 'user.paid',
        user: 'user'
        
    });


})(window, angular);