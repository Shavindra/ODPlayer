'use strict'
var requireDir = require('require-dir');
var gulp = require('gulp');
var fs = require('fs');
var glob = require('glob');
var Q = require("q");

function getFiles(searchDir, file, callback) {

    var glob = require("glob"),
        fileList = [];
    var deferred = Q.defer();

    // options is optional 
    var options = {
        cwd: searchDir || ''
    }

    glob(file, options, function (er, files) {
        if (error) {
            deferred.reject(new Error(error));
        } else {   
            deferred.resolve(files);
        }
    })
    return deferred.promise;

}

//REF: https://www.npmjs.com/package/q
function readFile(file) {
    var deferred = Q.defer();
    fs.readFile(file, "utf-8", function (error, text) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(text);
        }
    });
    return deferred.promise;

}

function getJS() { 

};


function getCSS() { 

};

gulp.task('package-bower', function () {
    
    
    glob.sync('bower_components/**/bower.json').forEach(function (filePath) {
        readFile(filePath).then(function (data) {
            var data = JSON.parse(data);
            
            var mainFilePath = data.main;
            console.log(mainFilePath);
                  
        }, function (error) {
            console.error(error);
        });
    });
    
    //gulp.src('bower_components/bower.json')
    //.pipe(fileStream(stream));
})

gulp.task('Read-Bower', function () {
    var bowerFile = 'bower.json';
    readFile(bowerFile).then(function (data) {
    
        var dependencies = data.dependencies;
        console.log(data);
        
    }, function (error) {
        // If there's an error or a non-200 status code, log the error. 
        console.error(error);
    });

})


gulp.task('create-bower-json', function () {
    
    
    var file = 'bower.json';
    
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        
        data = JSON.parse(data);
        
        console.dir(data);
    });

    var packageList = require('./bower.json');
    
    console.log(packageList);

    

   // getFiles('bower_components', '**/bower.json', printFiles)

})




