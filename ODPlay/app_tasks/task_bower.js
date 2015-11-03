var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    rename = require("gulp-rename"),
    rimraf = require('rimraf'),
    tap = require('gulp-tap'),
    fs = require('fs'),
    path = require('path'),
    run = require('gulp-run'),
    srcDir = 'src/app/assets/',
    distDir = 'dist/app/assets/';


function renameDir(prefix, fileExt, suffix) {
    var dir;
    
    switch (fileExt) {
        
        case '.js':
            dir = 'js/libs/' + suffix;
            break;

        case '.css':
            dir = 'styles/css/vendor/' + suffix;
            break;
            
        case '.scss':
            dir = 'styles/sass/vendor/' + suffix;
            break;

        case '.eot':
            dir = 'fonts/';
            break;

        case '.woff':
            dir = 'fonts/';
            break;

        case '.ttf':
            dir = 'fonts/';
            break;

        case '.svg':
            dir = 'fonts/';
            break;

        default:
            dir = 'components/vendor/' + suffix;
                
    }
    
    
    return dir;

}

//When Bower install runs it will add the file paths to the index
gulp.task('bower-html', function () {
    gulp.src('./src/app/index.html')
      .pipe(wiredep({
        ignorePath: "bower_components/",
        fileTypes: {
            html: {
                block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                detect: {
                    js: /<script.*src=['"]([^'"]+)/gi,
                    css: /<link.*href=['"]([^'"]+)/gi
                },
                replace: {
                    js: function (filePath) {
                        var pathObj = path.parse(filePath);                                     
                        var newPath = 'assets/' + 'js/libs/' + pathObj.name + '/' + pathObj.base;
                        return '<script src="' + newPath + '"></script>';
                    },
                    css: function (filePath) {
                        var pathObj = path.parse(filePath);
                        var newPath = 'assets/' + 'styles/css/vendor/' + pathObj.name + '/' + pathObj.base;
                        return ' <link rel="stylesheet" type="text/css" href="' + newPath + '" />';
                    },
                }
            }
        }
    }))
    .pipe(gulp.dest('./dist/app'))
    .pipe(gulp.dest('./src/app'));

});

//Copy bower files from bower main directory to actual source directory
gulp.task('bower-copy', function () {
    
    var bowerFileJson = {};
    return gulp.src(['bower_components/**/*.{js,css,scss,ttf,woff,eot,svg}', '!bower_components/**/src/**/*.{js,css,scss,ttf,woff,eot,svg}'])

    .pipe(rename(function (path) {
        
        var dirSuffix = path.dirname.indexOf("\\") > -1 ? path.dirname.split('\\')[0] : path.dirname;
        path.dirname = renameDirPaths('', path.extname, dirSuffix);
        
        
        return path;
       
    }))
    .on('end', function () {
        
        fs.writeFile('bower.files.json')
    })
    .pipe(gulp.dest(srcDir));

});



