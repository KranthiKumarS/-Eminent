// *************************************
//
//   partials.js
//
// *************************************
//
// Available tasks:
//  'gulp partials'
//  'gulp partials:base'
//
// *************************************


// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp                       : The streaming build system
// gulp-html-partial          : Including HTML files into each other
//
// -------------------------------------

var gulp = require('gulp');
var htmlPartial = require('gulp-html-partial');


// -------------------------------------
//   Task: Partials All
// -------------------------------------

gulp.task('partials', ['partials:eminentBazar:base', 'partials:eminentExpress:base']);

// -------------------------------------
//   Task: partials EminentBazar Base
// -------------------------------------

const defaultsEminentBazar = {
    basePath: 'src/',
    tagName: 'htmlPartial',
    variablePrefix: '@@'
}
gulp.task('partials:eminentBazar:base', () => {
    gulp.src(['src/EminentBazar/prototypes/*.html'])
    .pipe(htmlPartial({
        basePath: defaultsEminentBazar.basePath,
        tagName: defaultsEminentBazar.tagName,
        variablePrefix: defaultsEminentBazar.variablePrefix
    }))
    .pipe(gulp.dest('build/EminentBazar'));
});


// -------------------------------------
//   Task: partials EminentExpress Base
// -------------------------------------

const defaultsEminentExpress = {
    basePath: 'src/',
    tagName: 'htmlPartial',
    variablePrefix: '@@'
}
gulp.task('partials:eminentExpress:base', () => {
    gulp.src(['src/EminentExpress/prototypes/*.html'])
    .pipe(htmlPartial({
        basePath: defaultsEminentExpress.basePath,
        tagName: defaultsEminentExpress.tagName,
        variablePrefix: defaultsEminentExpress.variablePrefix
    }))
    .pipe(gulp.dest('build/EminentExpress'));
});