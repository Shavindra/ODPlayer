'use strict'
var requireDir = require('require-dir');
var gulp = require('gulp');
var fs = require('fs');
var fs = require('glob');

var getFiles = (searchDir, file, callback) => {

    var glob = require("glob"),
        fileList = [];

    // options is optional 
    var options = {
        cwd: searchDir || ''
    }


    glob(file, options, function (er, files) {
        console.log(files);

        if (callback && typeof callback == "function") {
            callback();
        }

        return fileList = files;
    })

}




gulp.task('create-bower-json', function () {

    var mapBowerFiles = getFiles;

    gulp.src('bower_components/**/bower.json',
            { base: 'bower_components/' });

    mapBowerFiles('bower_components', "**/bower.json");



})




