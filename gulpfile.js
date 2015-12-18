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
  gulp.watch('client/scripts/**/*.js', ['scripts', browserSync.reload]);
  gulp.watch('client/stylus/**/*.styl',  ['styles', browserSync.reload]);
  gulp.watch('public/**/*.html', ['bs-reload']);
});
