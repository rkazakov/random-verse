var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

gulp.task('styles', function() {
  gulp.src(['client/stylus/*.styl'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(stylus())
    .pipe(gulp.dest('public/styles/'))
});

// gulp.task('browserify', function () {
//   gulp.src('src/main.js')
//     .pipe(plumber())
//     .pipe(browserify({ transform: 'reactify', debug: true }))
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest('public'));
// });

gulp.task('default', function() {
  gulp.watch("client/stylus/*.styl", ['styles']);
});
