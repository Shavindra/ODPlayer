var gulp = require('gulp'),
    rimraf = require('rimraf');

gulp.task('build-app', function () {
    
    //TODO: OO rimraf task
    rimraf(distDir, function (error) {
        
        if (error) {
            console.log(error);
        }    
        gulp.src('src/**/*.*').pipe(gulp.dest('www'))

    
    });
    
})