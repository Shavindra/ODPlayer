(function (window, angular) { 

    window.APP = window.APP || {}

    window.APP.ModuleNames = {
        main: 'ODPApp',
        routes: 'ODPApp.Routes',
        controllers: 'ODPApp.controllers',
        config: 'ODPApp.Config',
        services: 'ODPApp.services',
        constants: 'ODPApp.constants'

    },

    window.APP.Controllers = {}

    
    //Enable disable debug
    window.DEBUG = {

        status: true
    
    }


})(window, angular)