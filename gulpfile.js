"use strict";
var gulp = require('gulp');
var gutil = require('gulp-util');
var styl = require('gulp-stylus');
var autoprefixer   = require('autoprefixer-stylus');
var webpack = require("webpack");
// var runSequence = require('run-sequence');
// var bower = require('gulp-bower');
// var del = require('del');

gulp.task('clean', function () {
  return del(['build/*'] , function () {
    console.log('successfully deleted');
  }); 
});

/* gulp.task('bower', function () {
  return bower({ cmd: 'update'});
}); */

gulp.task('copy', function () {

});

gulp.task('images', function () {
    return gulp.src(['client/images/**/*.{jpg,png}'])
	.pipe(gulp.dest('build/images'));
});

gulp.task('sass', function () {
  return  gulp.src(['client/css/**/*.{styl}'])
              .pipe(sass({ includePaths : [/*'bower_components', */'node_modules'], errLogToConsole: true}))
              .pipe(autoprefixer({
                browsers: ['last 2 versions', 'ie 10']
              }))
              .pipe(gulp.dest('build/css'));
});

gulp.task("js", function(callback) {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('build', function(cb) {
  runSequence('clean', /*'bower',*/ ['copy', 'sass', 'js'], function () {
    cb();
  });
});


gulp.task('watch', ['build'], function () {
  gulp.watch(['client/**/*.{styl}'], ['styl']);
  gulp.watch(['client/**/*.{js,jsx}'], ['js']);
});

gulp.task('default', ['watch']);
