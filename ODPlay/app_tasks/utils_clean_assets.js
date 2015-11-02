var gulp = require('gulp'),
    rimraf = require('rimraf'),
    distDir = 'dist/app/assets/';

gulp.task('clean-assets', function () {
   return rimraf(distDir, function (error) { });
});
