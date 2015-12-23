'use strict';

var gulp = require('gulp'),
    //connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    minifycss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    //cache = require('gulp-cache'),
    babel = require('gulp-babel'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    //reactify = require('reactify'),
    //babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    nodemon = require('gulp-nodemon');

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

gulp.task('scripts', function() {
  return gulp.src('client/scripts/**/*.js')
    .pipe(plumber())
    //.pipe(browserify({ transform: 'reactify', debug: true }))
    .pipe(browserify({ debug: true }))
    //.pipe(jshint())
    //.pipe(jshint.reporter('default'))
    .pipe(babel({ compact: false }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts/'))
});

gulp.task('vendor', function() {
  var libs = [
    'react',
    // 'react-dom',
    // 'react-router',
    // 'flux'
    // 'react/lib/ReactCSSTransitionGroup',
    // 'react/lib/cx',
    // 'q',
    // 'underscore',
    // 'loglevel'
  ];

  var production = (process.env.NODE_ENV === 'production');
  var stream = gulp.src('./gulp/noop.js', {read: false})
    .pipe(browserify({
        debug: false
    }))
    .on('prebundle', function(bundle) {
      // Require vendor libraries and make them available outside the bundle.
      libs.forEach(function(lib) {
        bundle.require(lib);
      });
    });

  if (production) {
    // If this is a production build, minify it
    stream.pipe(uglify());
  }

  // Give the destination file a name, adding '.min' if this is production
  stream.pipe(rename('vendor' + (production ? '.min' : '') + '.js'))
    // Save to the build directory
    .pipe(gulp.dest('public/scripts/'));

  return stream;
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

/*gulp.task('bs-reload', function() {
  browserSync.reload();
});*/

gulp.task('default', ['browser-sync'], function() {
  gulp.watch('client/scripts/**/*.js', ['scripts', browserSync.reload]);
  gulp.watch('client/stylus/**/*.styl',  ['styles', browserSync.reload]);
  gulp.watch('public/**/*.html', [browserSync.reload]);
});
