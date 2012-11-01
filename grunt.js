module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },
    install: {
      gruntplugin2: {
        'src': 'src'
      }
    }
  });

  // Create a helper to copy files from src to ~/.grunt/tasks/init/
  // TODO: This should be its own repo as well
  var path = require('path'),
      rimraf = require('rimraf');
  grunt.registerMultiTask('install', 'Helper to copy files to ~/.grunt', function () {
    var file = this.file,
        rawSrc = file.src,
        src = rawSrc + '/**',
        dest = grunt.file.userDir('tasks/init');

    // Grab the srcDirs and srcFiles
    var srcDirs = grunt.file.expandDirs(src),
        srcFiles = grunt.file.expandFiles(src);

    // Empty each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove rawSrc from srcDir
      srcDir = srcDir.replace(rawSrc, '');

      // Empty the directory
      var destDir = path.join(dest, srcDir);
      rimraf.sync(destDir);
    });

    // Re-create each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove rawSrc from srcDir
      srcDir = srcDir.replace(rawSrc, '');

      // Re-creaate the directory
      var destDir = path.join(dest, srcDir);
      grunt.file.mkdir(destDir);
    });

    // Copy over each of the srcFiles
    srcFiles.forEach(function (srcFile) {
      // Remove rawSrc from srcFile
      var _srcFile = srcFile.replace(rawSrc, '');

      // Re-create the directory
      var destFile = path.join(dest, _srcFile);
      grunt.file.copy(srcFile, destFile);
    });
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

};