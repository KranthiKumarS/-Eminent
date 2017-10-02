// *************************************
//
//   copy.js
//
// *************************************
//
// Available tasks:
//  'gulp copy'
//  'gulp copy:eminentBazar'
//  'gulp copy:eminentExpress'
//  'gulp clean:eminentBazarImages'
//  'gulp copy:eminentBazarImages
//  'gulp clean:eminentExpressImages'
//  'gulp copy:eminentExpressImages
//  'gulp clean:eminentBazarFonts'
//  'gulp copy:eminentBazarFonts'
//  'gulp clean:eminentExpressFonts'
//  'gulp copy:eminentExpressFonts'
//  'gulp clean:eminentBazarVendor'
//  'gulp copy:eminentBazarVendor'
//  'gulp clean:eminentExpressVendor'
//  'gulp copy:eminentExpressVendor'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-clean                 : Remove files or directories
//
// -------------------------------------


var clean = require('gulp-clean');
var gulp = require('gulp');


// -------------------------------------
//   Task: Copy All
// -------------------------------------

gulp.task('copy', ['copy:eminentBazar', 'copy:eminentExpress']);


// -------------------------------------
//   Task: Copy EminentBazar
// -------------------------------------

gulp.task('copy:eminentBazar', ['copy:eminentBazarImages', 'copy:eminentBazarFonts',  'copy:eminentBazarVendor']);


// -------------------------------------
//   Task: Copy EminentExpress
// -------------------------------------

gulp.task('copy:eminentExpress', ['copy:eminentExpressImages', 'copy:eminentExpressFonts', 'copy:eminentExpressVendor']);


// -------------------------------------
//   Task: Copy EminentBazar Images 
// -------------------------------------

gulp.task('clean:eminentBazarImages', () => {
  return gulp.src('build/EminentBazar/base/images', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentBazarImages', ['clean:eminentBazarImages'], () => {
  return gulp.src('src/EminentBazar/base/images/**/*')
    .pipe(gulp.dest('build/EminentBazar/base/images'));
});

// -------------------------------------
//   Task: Copy EminentExpress Images 
// -------------------------------------

gulp.task('clean:eminentExpressImages', () => {
  return gulp.src('build/EminentExpress/base/images', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentExpressImages', ['clean:eminentExpressImages'], () => {
  return gulp.src('src/EminentExpress/base/images/**/*')
    .pipe(gulp.dest('build/EminentExpress/base/images'));
});

// -------------------------------------
//   Task: Copy EminentBazar Fonts
// -------------------------------------

gulp.task('clean:eminentBazarFonts', () => {
  return gulp.src('build/EminentBazar/base/fonts', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentBazarFonts', ['clean:eminentBazarFonts'], () => {
  return gulp.src('src/EminentBazar/base/fonts/**/*')
    .pipe(gulp.dest('build/EminentBazar/base/fonts'));
});

// -------------------------------------
//   Task: Copy EminentExpress Fonts
// -------------------------------------

gulp.task('clean:eminentExpressFonts', () => {
  return gulp.src('build/EminentExpress/base/fonts', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentExpressFonts', ['clean:eminentExpressFonts'], () => {
  return gulp.src('src/EminentExpress/base/fonts/**/*')
    .pipe(gulp.dest('build/EminentExpress/base/fonts'));
});

// -------------------------------------
//   Task: Copy EminentBazar Vendor
// -------------------------------------

gulp.task('clean:eminentBazarVendor', () => {
  return gulp.src('build/EminentBazar/vendor', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentBazarVendor', ['clean:eminentBazarVendor'], () => {
  return gulp.src(['src/vendor/common/**/*', 'src/vendor/eminentbazar/**/*'])
    .pipe(gulp.dest('build/EminentBazar/vendor'));
});

// -------------------------------------
//   Task: Copy EminentExpress Vendor
// -------------------------------------

gulp.task('clean:eminentExpressVendor', () => {
  return gulp.src('build/EminentExpress/vendor', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('copy:eminentExpressVendor', ['clean:eminentExpressVendor'], () => {
  return gulp.src(['src/vendor/common/**/*', 'src/vendor/eminentexpress/**/*'])
    .pipe(gulp.dest('build/EminentExpress/vendor'));
});


