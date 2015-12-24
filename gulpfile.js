'use strict';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    nodemon = require('gulp-nodemon'),
    source = require('vinyl-source-stream');

var BROWSER_SYNC_RELOAD_DELAY = 500;

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

// http://stackoverflow.com/questions/22330103/how-to-include-node-modules-in-a-separate-browserify-vendor-bundle
gulp.task('scripts-vendor', function() {
  return browserify({ debug: false })
    .require('react')
    .require('react-dom')
    .require('react-router')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('public/scripts/'));
});

gulp.task('scripts-bundle', function() {
  return browserify('client/scripts/main.js', { debug: true, transform: 'babelify' })
    .external('react')
    .external('react-dom')
    .external('react-router')
    .bundle()
    //.pipe(babel({ compact: true }))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/scripts/'));
    //.pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    //.pipe(gulp.dest('public/scripts/'));
});

gulp.task('scripts', function() {
  return gulp.src(['client/scripts/**/*.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(browserify({ debug: false }))
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(babel({ compact: false }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/'));
});

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    // nodemon our expressjs server
    script: 'app.js',
    // watch core server file(s) that require server restart on change
    watch: ['app.js', 'server/**/*.js']
  })
  .on('start', function onStart() {
    // ensure start only got called once
    if (!called) { cb(); }
    called = true;
  })
  .on('restart', function onRestart() {
    // reload connected browsers after a slight delay
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

gulp.task('browser-sync', ['nodemon'], function() {
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({
    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',
    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,
    // open the proxied app in chrome
    browser: 'google chrome'
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('client/scripts/**/*.js', ['scripts-vendor', 'scripts-bundle', browserSync.reload]);
  gulp.watch('client/stylus/**/*.styl',  ['styles', browserSync.reload]);
  gulp.watch('public/**/*.html', ['bs-reload']);
});
