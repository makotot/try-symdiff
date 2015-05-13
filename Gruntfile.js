module.exports = function (grunt) {

  require('jit-grunt')(grunt);

  var symdiffCSS = require('symdiff-css'),
    symdiffHTML = require('symdiff-html');

  grunt.initConfig({
    symdiff: {
      options: {
        css: [symdiffCSS],
        templates: [symdiffHTML]
      },
      all: {
        src: ['./src/css/*.css', './src/*.html']
      }
    }
  });

  grunt.registerTask('default', ['symdiff']);
};
