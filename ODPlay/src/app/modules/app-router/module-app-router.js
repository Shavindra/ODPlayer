(function (window, angular) {
    
    var moduleName = window.APP.ModuleNames.router || 'App',
        appConfig = window.APP.ModuleNames.config;
    
    var appRouter = angular.module(moduleName, ['ngRoute', 'ui.router', appConfig])
    
    appRouter.config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES', function ($stateProvider, $urlRouterProvider, USER_ROLES) {
            var root = {
                url: '/',
                templateUrl: 'views/pages/page-home-view.html',
                controller: 'HomePageCtrl',
                data: {
                    protected: false,
                    authorisedRoles: '*'
                }
            }
   
            var register = {
                url: '/register',
                templateUrl: './views/pages/page-register-view.html',
                controller: 'RegisterCtrl',
                data: {
                    protected: false,
                    authorisedRoles: [USER_ROLES.admin, USER_ROLES.all, USER_ROLES.guest, USER_ROLES.all]
                }

            }
            
            var dashboard = {
                url: '/dashboard',
                templateUrl: 'views/pages/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    protected: true,
                    authorisedRoles: ['admin']
                }
            }
            
            var dashboardUserList = {
                url: '/users',
                templateUrl: 'views/pages/dashboard.html',
                controller: 'DashboardCtrl',
                data: {
                    protected: true,
                    authorisedRoles: ['admin']
                }
            }
            
            $stateProvider
                .state('root', root)
                .state('register', register)
                .state('dashboard', dashboard)
                .state('dashboard.userlist', dashboardUserList);
            
            
            $urlRouterProvider.otherwise("//");
    }]);



})(window, angular);