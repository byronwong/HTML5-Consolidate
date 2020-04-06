// Gulpfile
// ========================================

// Dependancies
// ----------------------------------------
// UTIL
var gulp = require('gulp');
var browserSync = require("browser-sync").create();

// Tasks
// ----------------------------------------

// UTIL
// Setup static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: ['./', './html'],
      index: 'index.html'
    },
    port: 8000,
    ui : {
      port:8080
    },
    // watch directories or files
    // use for files that are not compiled
    files:['./html/*.html','./css/*.css', './js/*.js']
  });
});

gulp.task('serve',['browser-sync']);