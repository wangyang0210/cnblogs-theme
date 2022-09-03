const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify')

gulp.task('minify-css', function () {
    return gulp.src('./src/style/simple-memory.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify-style', function () {
    return gulp.src('dist/style/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/style/'));
});

gulp.task('minify-simple', function () {
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});


gulp.task('minify-script', function () {
    return gulp.src('dist/script/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'));
});

gulp.task('default', gulp.series(['minify-css', 'minify-simple', 'minify-script', 'minify-style'], done => done()));
