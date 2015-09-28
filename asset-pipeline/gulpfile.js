/* jshint node: true */

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
// var watch = require('gulp-watch');
var path = require('path');


var LESS_SRC = '/opt/devwebapp/app-client/src/**/*.less';
var LESS_DEST = '/opt/devwebapp/app-client/build/css/';



gulp.task('less', function() {
  return gulp.src(LESS_SRC)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(LESS_DEST));
});



/* BUILD */

gulp.task('build', ['less'], function () {


});

/* DEV WATCH */

gulp.task('watch', ['build'], function () {

  gulp.watch(LESS_SRC, ['less']);


});
