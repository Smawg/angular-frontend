module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'meta': {
      'jsFilesForTesting': [
        'bower_components/jquery/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/restangular/dist/restangular.js',
        'bower_components/underscore/underscore.js',
        'bower_components/underscore/underscore.js',
        'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'app/**/*.js'
          ],
        }
      },
    },

    'jshint': {
      'beforeconcat': ['Gruntfile.js','app/**/*.js'],
    },


    'concat': {
      'dist': {
        'src': ['app/**/*.js'],
        'dest': 'dist/<%= pkg.namelower %>-<%= pkg.version %>.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': false
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
        }
      }
    },

    'jsdoc': {
      'src': ['app/**/*.js'],
      'options': {
        'destination': 'doc'
      }
    }
  });

  grunt.registerTask('test', ['karma:development']);
  grunt.registerTask('build',
    [
      'jshint',
      'karma:development',
      'concat',
      'uglify',
      'jsdoc'
    ]);


};
