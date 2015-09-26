/* jshint node: true */

'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
// var browserify = require('browserify');
// var transform = require('vinyl-transform');


// gulp.task('browserify', function() {

//   var browserified = transform(function(filename) {
//     var b = browserify(filename);
//     return b.bundle();
//   });

//   return gulp.src(['./client/src/**/*.js'])
//     .pipe(browserified)
//     .pipe(gulp.dest('./client/build/js'));

// });


gulp.task('less', function() {
  return gulp.src('./client/src/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./client/build/css'));
});


gulp.task('default', ['browserify', 'less'], function () {


});


gulp.task('build', ['browserify','less'], function () {


});
