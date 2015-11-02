var gulp = require('gulp'),
    rename = require("gulp-rename"),
    rmdir = require('rimraf'),
    srcDir = 'src/app/assets/',
    distDir = 'dist/app/assets/';

gulp.task('bower-copy', function () {
    
  return  gulp.src(['bower_components/**/*.{js,css,scss,ttf,woff,eot,svg}','!bower_components/**/src/**/*.{js,css,scss,ttf,woff,eot,svg}'])
    .pipe(rename(function (path) {
        
        var dir,
            dirname = path.dirname.indexOf("\\") > -1 ? path.dirname.split('\\')[0] : path.dirname;
        
        switch (path.extname) {
        
            case '.js':
                dir = 'js/libs/' + dirname;
                break;

            case '.css':
                dir = 'styles/css/vendor/' + dirname;
                break;
            
            case '.scss':
                dir = 'styles/sass/vendor/' + dirname;
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
                dir = 'components/vendor/' + dirname;
                
        }
            
        path.dirname = dir;
        return path;
    }))
    .pipe(gulp.dest(srcDir));

});


gulp.task('assets-dist', ['bower-copy'], function () {
    gulp.src(srcDir + '/**/*.*')
    .pipe(gulp.dest(distDir));

});

