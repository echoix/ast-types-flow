'use strict';

//const gulp = require('gulp');
//var buildTypes = require('./scripts/build-types');

//gulp.task('build', function() {
//  return gulp
//    .src(['./src/types.js'])
//    .pipe(buildTypes)
//    .pipe(gulp.dest('./lib/'));
//});

//gulp.task('default', ['build']);



const { src, dest, series } = require('gulp');

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  src(['./src/types.js'])
  .pipe(buildTypes)
  .pipe(dest('./lib/'))
  cb();
}

exports.build = build;
exports.default = series(build);
