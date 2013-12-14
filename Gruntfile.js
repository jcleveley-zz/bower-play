module.exports = function(grunt) {

    grunt.initConfig({
      bower: {
        install: {
            options: {
                verbose: true,
                targetDir: './vendor',
                layout: 'byType',
                install: true,
                cleanTargetDir: true,
                cleanBowerDir: true,
                bowerOptions: {}
            }
        }
      }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};