var gulp = require('gulp'),
    fs = require('fs'),
    mkdirp = require('mkdirp');



function createFiles(list) {
    
    var path;
    for (var i = 0; i < list.length; i++) {
        
        var file = list[i].toString(),
            dirPath = list[i].split(/[\w-]+\.\w+$/);
        
        
        
        // Query the entry
        try {
            // Query the entry
            var stats = fs.lstatSync(dirPath[0]),
                fileStats = fs.lstatSync(file);
            
            
            // Is it a directory?
            if (stats.isDirectory() && fileStats == 'undefined') {
                fs.writeFile(file);
            }
        }
catch (e) {
            
            mkdirp(dirPath[0], function () {
                
                fs.writeFile(file);
            })
            
            fs.writeFile(file);
        }
        
       
        

 
    }
    
}

var appConfig = JSON.parse(fs.readFileSync('./src/app/app.config.json').toString().trim()); // Takes care of whitespaces

//appConfig = JSON.parse(appConfig);
gulp.task('generate-app', function () {
    
    var appFileList = [];
    
    //First create the lists then generate the files
    for (var i in appConfig.files) {
        var parent = appConfig.files[i];
        var dirPath = 'src/app/' + parent.dir;
        var counter = 0;
        
        if (i == 'views') {
            
            for (var k in parent) {
                
                var fileList = parent[k].list;
                if (!fileList) continue; //skip the dirProperty
                
                var viewDir = dirPath + parent[k].dir;
                
                for (var j = 0; j < fileList.length; j++) {
                    
                    var tmp = viewDir + fileList[j].dir + fileList[j].template + '.html';
                    var ctrl = viewDir + fileList[j].dir + fileList[j].controller + '.js';
                    
                    appFileList.push(tmp, ctrl)
                }
            }

        } else {
            
            var fileList = parent.list;
            
            for (var q = 0; q < fileList.length; q++) {
                appFileList.push(dirPath + fileList[q].dir + fileList[q].name + '.js');
            }
        }

    }
    console.log(appFileList);
    createFiles(appFileList);

});