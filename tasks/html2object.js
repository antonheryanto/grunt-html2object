/*
 * grunt-html2object
 * https://github.com/antonheryanto/grunt-html2object
 *
 * Copyright (c) 2013 Anton Heryanto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var minify = require('html-minifier').minify;

  grunt.registerMultiTask('html2object', 'Convert HTML into Javascript Object and used directly in Application', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      target: 'window.$.html',
      storage: '{}',
      htmlmin: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }   
    });
    var counter = 0,
        target = options.target + ' || (' + options.target + ' = ' + options.storage + ')';
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        counter++;
        // Read file source.
        var content = grunt.file.read(filepath).replace(/'/g,"\\'");
        return "$['" + filepath + "']='" + minify(content, options.htmlmin) + "';";
      }).join('\n');

      // Handle options.
      src = '(function($){\n' + src + '\n})(' + target + ');';

      // Write the destination file.
      grunt.file.write(f.dest, grunt.util.normalizelf(src));
    });
    // Print a success message.
    grunt.log.writeln("Successfully converted "+(""+counter).green + 
        " html to " + options.target + " and using " + options.storage + " as storage");
  });

};
