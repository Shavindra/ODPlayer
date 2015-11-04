(function (window, angular) {
    
    var moduleName = window.APP.ModuleNames.router || 'App',
        appConfig = window.APP.ModuleNames.config;
    
    var appRoutes = angular.module('ODPApp.Routes', ['ui.router', 'ODPApp.Config', 'ngRoute'])
    
    var USER_ROLES = {
        admin: '',
        all: '',
        guest: '',
        
    }

    appRoutes.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'USER_ROLES', function ($stateProvider, $urlRouterProvider, $locationProvider, USER_ROLES) {
            $locationProvider.html5Mode(true);

            var root = {
                url: '/',
                templateUrl: 'views/pages/home/page-home-view.html',
                controller: 'HomePageCtrl',
                data: {
                    protected: false,
                    authorisedRoles: '*'
                }
            }
   
            var register = {
                url: '/register',
                templateUrl: 'views/pages/register/page-register-view.html',
                controller: 'RegisterPageCtrl',
                data: {
                    protected: false,
                    authorisedRoles: [USER_ROLES.admin, USER_ROLES.all, USER_ROLES.guest, USER_ROLES.all]
                }

            }
            
            var dashboard = {
                url: '/dashboard',
                templateUrl: 'views/pages/dashboard/page-dashboard-view.html',
                controller: 'DashboardCtrl',
                data: {
                    protected: true,
                    authorisedRoles: ['admin']
                }
            }
            
            var dashboardUserList = {
                url: '/users',
                templateUrl: 'views/pages/users/page-users-view.html',
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