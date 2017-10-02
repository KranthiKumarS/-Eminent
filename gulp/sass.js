// *************************************
//
//   sass.js
//
// *************************************
//
// Available tasks:
//  'gulp sass'
//  'gulp sass:eminentBazar'
//  'gulp sass:eminentExpress'
//  'gulp sass:eminentBazar:base'
//  'gulp sass:eminentBazar:components'
//  'gulp sass:eminentExpress:base'
//  'gulp sass:eminentExpress:components'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-autoprefixer          : Prefix CSS
// gulp-clean-css             : Clean CSS
// gulp-plumber               : Better error handling
// gulp-rename                : Rename files
// gulp-sass                  : Compile Sass
// node-sass-tilde-importer   : Import sass from node_modules with tilde
//
// -------------------------------------

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp');
var clean = require('gulp-clean-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var tildeImporter = require('node-sass-tilde-importer');


// -------------------------------------
//   Task: Sass All
// -------------------------------------

gulp.task('sass', ['sass:eminentBazar', 'sass:eminentExpress']);

// -------------------------------------
//   Task: Sass EminentBazar
// -------------------------------------

gulp.task('sass:eminentBazar', ['sass:eminentBazar:base', 'sass:eminentBazar:components']);

// -------------------------------------
//   Task: Sass EminentBazar Base
// -------------------------------------

gulp.task('sass:eminentBazar:base', () => {
  return gulp.src([
    'src/EminentBazar/base/scss/base.scss',
  ])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/EminentBazar/base/compiled'))
    .pipe(rename('base.min.css'))
    .pipe(clean({ compatibility: '*' }));
});


// -------------------------------------
//   Task: Sass EminentBazar Components
// -------------------------------------

gulp.task('sass:eminentBazar:components', () => {
  return gulp.src([
    'src/EminentBazar/components/scss/components.scss',
  ])
    .pipe(plumber({
      errorHandler: (err) => {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/EminentBazar/components/compiled'))
    .pipe(rename('styles.min.css'))
    .pipe(clean({ compatibility: '*' }))
    .pipe(gulp.dest('build/EminentBazar/base/css'));
});


// -------------------------------------
//   Task: Sass EminentExpress
// -------------------------------------

gulp.task('sass:eminentExpress', ['sass:eminentExpress:base', 'sass:eminentExpress:components']);

// -------------------------------------
//   Task: Sass EminentExpress Base
// -------------------------------------

gulp.task('sass:eminentExpress:base', () => {
  return gulp.src([
    'src/EminentExpress/base/scss/base.scss',
  ])
    .pipe(plumber({
      errorHandler: function (err) {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/EminentExpress/base/compiled'))
    .pipe(rename('base.min.css'))
    .pipe(clean({ compatibility: '*' }));
});


// -------------------------------------
//   Task: Sass EminentExpress Components
// -------------------------------------

gulp.task('sass:eminentExpress:components', () => {
  return gulp.src([
    'src/EminentExpress/components/scss/components.scss',
  ])
    .pipe(plumber({
      errorHandler: (err) => {
        notify.onError({
          title: 'Gulp error in ' + err.plugin,
          message: err.toString(),
        })(err);
      },
    }))
    .pipe(sass({
      errorLogToConsole: true,
      importer: tildeImporter,
      includePaths: [
        './',
      ],
    })
      .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false,
    }))
    .pipe(gulp.dest('src/EminentExpress/components/compiled'))
    .pipe(rename('styles.min.css'))
    .pipe(clean({ compatibility: '*' }))
    .pipe(gulp.dest('build/EminentExpress/base/css'));
});


