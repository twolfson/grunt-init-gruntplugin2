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
  var platform = process.platform;
  console.log(platform);
  grunt.registerMultiTask('install', 'Helper to copy files to ~/.grunt', function () {
    // TODO: Windows support
    var file = this.file,
        src = file.src,
        dest = '~/.grunt/tasks/init/';

    // Grab the srcDirs and srcFiles
    var srcDirs = grunt.file.expandDirs(src),
        srcFiles = grunt.file.expandFiles(src);

    // Delete and re-create each of the srcDirs
    srcDirs.forEach(function (srcDir) {
      grunt.file.write(srcDir);
    });

    // Copy over each of the srcFiles
    srcFiles.forEach(function (srcFile) {
      grunt.file.write(srcFile);
    });
  });

  // Default task.
  grunt.registerTask('default', 'lint test');

};