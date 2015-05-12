var gulp = require('gulp'),
  symdiffHTML = require('symdiff-html'),
  symdiffCSS = require('symdiff-css'),
  symdiff = require('gulp-symdiff');


gulp.task('checkCSS', function () {

  gulp.src(['./src/css/*.css', './src/*.html'])
    .pipe(symdiff({
      css: [symdiffCSS],
      templates: [symdiffHTML]
    }))
    .on('error', function () {
      process.exit(1);
    });
});

gulp.task('default', ['checkCSS']);
