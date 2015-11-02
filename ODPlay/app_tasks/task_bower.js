var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    rename = require("gulp-rename"),
    rmdir = require('rimraf'),

    srcDir = 'src/app/assets/',
    distDir = 'dist/app/assets/';

gulp.task('clean-assets', function () {
    rmdir(distDir, function (error) { });
})

gulp.task('bower', function () {
    gulp.src('./www/index.html')
      .pipe(wiredep({
          ignorePath: "assets/components",
          fileTypes: {
              html: {
                  block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                  detect: {
                      js: /<script.*src=['"]([^'"]+)/gi,
                      css: /<link.*href=['"]([^'"]+)/gi
                  },
                  replace: {
                      js: '<script src="/assets/js/vendor{{filePath}}"></script>',
                      css: '<link rel="stylesheet" href="/assets/js/vendor{{filePath}}" />'
                  }
              }
          }
      }));
    //.pipe(gulp.dest('./dest'));
});
