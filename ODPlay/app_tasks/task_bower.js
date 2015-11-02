var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    rename = require("gulp-rename"),
    rmdir = require('rimraf'),

    srcDir = 'src/app/assets/',
    distDir = 'dist/app/assets/';

gulp.task('clean-assets', function () {
    rmdir(distDir, function (error) { });
})

//When Bower install runs it will add the file paths to the index
gulp.task('bower-html', function () {
    gulp.src('./www/index.html')
      .pipe(wiredep({
          ignorePath: "bower_components",
          fileTypes: {
              html: {
                  block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                  detect: {
                      js: /<script.*src=['"]([^'"]+)/gi,
                      css: /<link.*href=['"]([^'"]+)/gi
                  },
                  replace: {
                      js: '<script src="/assets/js/libs/{{filePath}}"></script>',
                      css: '<link rel="stylesheet" href="/assets/styles/css/vendor/{{filePath}}" />'
                  }
              }
          }
      }));
    //.pipe(gulp.dest('./dest'));
});
