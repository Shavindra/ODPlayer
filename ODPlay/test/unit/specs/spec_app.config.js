describe("APP CONFIG", function () {
    
    
 //   var configModuleName = window.APP.ModuleNames.config;
    
    
    
    beforeEach(module('ODPApp.Config'));
    
    var APP_META, MODULE_NAMES, USER_ROLES, VIEWS;
    
    describe("App Meta", function () {
        
        beforeEach(function () {
                 
            inject(function ($injector) {
                APP_META = $injector.get('APP_META');                
            });

        });
        
        describe("Required properties", function () { 
        
            it('should have AppName', function () {
                expect(APP_META.hasOwnProperty('appName')).toBe(true);
            });

            it('should have appVersion', function () {
                expect(APP_META.hasOwnProperty('appVersion')).toBe(true);
            });

            it('should have apiUrl', function () {
                expect(APP_META.hasOwnProperty('apiUrl')).toBe(true);
            });
        })
        
        
        describe("Expected property values", function () {
            
            it('appName should have value "OD Player"', function () {
                expect(APP_META.appName).toBe("OD Player");
            });

            it('appVersion should have value "2.0"', function () {
                expect(APP_META.appVersion).toBe("2.0");
            });

            it('should apiUrl have value "OD Player"', function () {
                expect(APP_META.apiUrl).toBe("http://www.google.com?api");
            });

        })
        

    });

})