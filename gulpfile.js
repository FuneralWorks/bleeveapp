var gulp       = require('gulp');
var watch      = require('gulp-watch');
var concat     = require('gulp-concat');
var livereload = require('gulp-livereload');


// JS
gulp.task('js', function() {
  return gulp.src('./public/js/**/*.js')
    //.pipe(uglify())
    .pipe(concat('Bleeveapp.js'))
    .pipe(gulp.dest('./public/libs/Bleeve/'))
    .pipe(livereload());

});

gulp.task('html', function () {
    return gulp.src('./public/**/*.html')
        .pipe(livereload());

});
/* Task to watch less changes */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./public/js/**/*.js', ['js']);
    gulp.watch('./public/**/*.html', ['html']);
});


/* Task when running `gulp` from terminal */
gulp.task('default', ['js']);
