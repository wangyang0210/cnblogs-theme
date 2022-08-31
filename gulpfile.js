const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', function () {
    return gulp.src('./src/style/simple-memory.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('minify-css', done => done()));
