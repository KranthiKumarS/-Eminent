// *************************************
//
//   js.js
//
// *************************************
//
// Available tasks:
//  'gulp js'
//  'gulp js:eminentBazar
//  'gulp js:eminentExpress'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-concat                : Concatenate files
// gulp-rename                : Rename files
// gulp-uglify                : Uglify (minify) js
//
// -------------------------------------

var concat = require('gulp-concat');
var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// -------------------------------------
//   Task: JS All
// -------------------------------------

gulp.task('js', ['js:eminentBazar', 'js:eminentExpress']);


// -------------------------------------
//   Task: JS EminentBazar
// -------------------------------------

gulp.task('js:eminentBazar', () => {
  return gulp.src(['src/EminentBazar/base/js/**/*.js', 'src/EminentBazar/components/js/**/*.js'])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(concat('base.js'))
    .pipe(gulp.dest('src/EminentBazar/base/compiled'))
    .pipe(rename('base.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/EminentBazar/base/js'));
});

// -------------------------------------
//   Task: JS EminentExpress
// -------------------------------------

gulp.task('js:eminentExpress', () => {
  return gulp.src(['src/EminentExpress/base/js/**/*.js', 'src/EminentExpress/components/js/**/*.js'])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(concat('base.js'))
    .pipe(gulp.dest('src/EminentExpress/base/compiled'))
    .pipe(rename('base.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/EminentExpress/base/js'));
});