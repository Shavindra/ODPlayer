var rimraf = require('rimraf');

gulp.task('clean-assets', function () {
    rimraf(distDir, function (error) { });
});
