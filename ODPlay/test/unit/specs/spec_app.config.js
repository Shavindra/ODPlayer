(function (window, angular) {
    

    var configModuleName = window.APP.ModuleNames.config || 'App.Config',
        app = angular.module(configModuleName, []);
    
    //App meta data
    app.constant('APP_META', {

        appName: 'OD Player',
        appVersion: '2.0',
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

    //App user roles
    app.constant('VIEWS', {
        //TODO Dynamically create this
        pages: {
            home: {
                controller: 'HomePageCtrl',
                template: 'views/pages/register/page-register-view.html'
            }, 
            register: {
                controller: 'RegisterPageCtrl',
                template: 'views/pages/register/page-register-view.html'
            },
            
            dashboard: {
                controller: 'DashboardPageCtrl',
                template: 'views/pages/register/page-register-view.html'
            }
            
        },

        components: {
            footer: {
                controller: 'FooterCmptCtrl',
                template: 'views/pages/register/page-register-view.html'
            }, 
            header: {
                controller: 'HeaderCmptCtrl',
                template: 'views/pages/register/page-register-view.html'
            },
        }
        

    });


})(window, angular);