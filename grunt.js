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
      // 'pluginname': 'base directory'
      'gruntplugin2': 'src'
    }
  });

  // Create a helper to copy files from src to ~/.grunt/tasks/init/
  // TODO: This should be its own repo as well
  var path = require('path'),
      rimraf = require('rimraf');
  grunt.registerMultiTask('install', 'Helper to copy files to ~/.grunt', function () {
    var file = this.file,
        baseDir = file.src,
        pluginName = file.dest,
        srcJS = baseDir + '/' + pluginName + '.js',
        src = baseDir + '/' + pluginName + '/**',
        dest = grunt.file.userDir('tasks/init');

    // Grab the srcDirs and srcFiles
    var srcDirs = grunt.file.expandDirs({'dot': true}, src),
        srcFiles = grunt.file.expandFiles({'dot': true}, src);

    // Add srcJS to the head of the srcFiles
    srcFiles.unshift(srcJS);

    // Empty each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove baseDir from srcDir
      srcDir = srcDir.replace(baseDir, '');

      // Empty the directory
      var destDir = path.join(dest, srcDir);
      rimraf.sync(destDir);
    });

    // Re-create each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      // Remove baseDir from srcDir
      srcDir = srcDir.replace(baseDir, '');

      // Re-creaate the directory
      var destDir = path.join(dest, srcDir);
      grunt.file.mkdir(destDir);
    });

    // Copy over each of the srcFiles
    srcFiles.forEach(function (srcFile) {
      // Remove baseDir from srcFile
      var _srcFile = srcFile.replace(baseDir, '');

      // Copy over the file
      var destFile = path.join(dest, _srcFile);
      grunt.file.copy(srcFile, destFile);
    });
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

};