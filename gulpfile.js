var gulp = require('gulp'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify');

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
    .pipe(plumber())
    .pipe(browserify({ transform: 'reactify', debug: true }))
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    //.pipe(babel())
    .pipe(gulp.dest('public/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/'))
});

gulp.task('server', function() {
  browserSync({
    server: {
     baseDir: './public'
    }
  });
});

gulp.task('default', ['scripts', 'styles', 'server'], function() {
  return gulp.watch([
    "client/scripts/**/*.js", "client/stylus/**/*.styl"
  ], [
   'scripts', 'styles', browserSync.reload
  ]);
});
