describe("APP Setup", function () {
    
  
    
    var ModuleNames = window.APP.ModuleNames;
    
    it("should define ModuleNames constants", function () {
        
        expect(ModuleNames.main).toBe('ODPApp');
        expect(ModuleNames.router).toBe('ODPApp.Router');
        //demonstrates use of custom matcher
    });
    
    describe("Modules Loaded", function () {
        
        var appModule,
            appRouter;
        
        beforeEach(function () {
            appModule = angular.module("ODPApp");
          //  
        
        });
        
        describe('App Module', function () {
            
            it('should instantiate the modules by the name ODPApp', function () {
                expect(appModule.name).toBe('ODPApp');
            });

            
            describe('App Router', function () {
                appRouter = angular.module("ODPApp.Router");

                it('should instantiate the modules by the name ODPApp.Router', function () {
                    expect(appRouter.name).toBe('ODPApp.Router');
                });
        
            })
        
        })
   

    });

})