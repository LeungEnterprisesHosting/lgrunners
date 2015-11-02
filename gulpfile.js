var gulp = require('gulp');

var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var babel = require('gulp-babel');

gulp.task('jade', function() {
  return gulp.src(['src/**/*.jade', '!src/partials/*.jade', '!src/_layout.jade'])
    .pipe(plumber())
    .pipe(jade({
      basedir: './src'
    }))
    .pipe(gulp.dest('./'));
})

gulp.task('stylus', function() {
  return gulp.src('src/css/styles.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./css'));
});

gulp.task('babel', function() {
  return gulp.src('src/js/scripts.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['jade', 'stylus', 'babel'], function() {
  gulp.watch('src/**/*.jade', ['jade']);
  gulp.watch('src/css/styles.styl', ['stylus']);
  gulp.watch('src/js/scripts.js', ['babel']);
});