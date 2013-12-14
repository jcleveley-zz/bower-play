module.exports = function(grunt) {

    grunt.initConfig({
      bower: {
        install: {
            options: {
                targetDir: '',
                verbose: true,
                cleanBowerDir: true,
                layout: function(type, component) {
                    var path;
                    if (type == 'css') {
                        path = 'sass/partials/external';
                    } else {
                        path = 'js/vendor';
                    }

                    return path + '/' + component;
                }
            }
        }
      }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};