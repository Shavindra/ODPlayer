(function (window, angular) {
    var moduleName = 'app',
        appServicesName = window.APP.ModuleNames.services || 'App.Services';
    
    var services = angular.module(appServicesName)

    
    services.factory('ChannelsService', ['$route', '$http', '$q', function ($route, $http, $q) {
        var deferred = $q.defer();
        
        function fnGetChannels() {
            var req = {
                method: 'JSONP',
                url: 'http://beta.json-generator.com/api/json/get/MIjoYYU?callback=JSON_CALLBACK',
                cache: true
            }
            
            $http(req).success(function (data, status, headers, config) {
                deferred.resolve({
                    requestUrl: req.url,
                    status: status,
                    data: data

                });
                console.log(data);

            }).
                error(function (data, status, headers, config) {
                deferred.reject({
                    requestUrl: req.url,
                    status: status
                });

            });
            return deferred.promise;

        };
        
        return getChannels = {
            getChannels: fnGetChannels
        }
                //  return episodeList;
    }]);
})(window, angular);