var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

var stylus = require('gulp-stylus'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

var babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

var browserify = require('gulp-browserify');

gulp.task('styles', function() {
  gulp.src(['client/stylus/**/*.styl'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/styles/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/styles/'))
});

gulp.task('images', function() {
  gulp.src('client/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/images/'));
});

gulp.task('scripts', function() {
  return gulp.src('client/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(browserify({ transform: 'reactify', debug: true }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('public/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/'))
});

gulp.task('default', function() {
  gulp.watch("client/stylus/**/*.styl", ['styles']);
  //gulp.watch("client/images/**/*.png", ['images']);
  gulp.watch("client/scripts/**/*.js", ['scripts']);
});
