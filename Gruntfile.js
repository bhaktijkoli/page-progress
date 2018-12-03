module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        stripBanners: true,
      },
      dist: {
        src: [
          // Add your js file here
          'src/js/demo.js',
        ],
        dest: 'dist/js/demo.js',
      },
    },
    sass: {
      dist: {
        files: {
          // Add your sass files here
          'dist/css/demo.css': 'src/sass/demo.scss',
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js', 'src/js/**/*.js'],
        tasks: ['concat', 'notify:js'],
        options: {
          spawn: false,
        },
      },
      sass: {
        files: ['src/sass/*.scss', 'src/sass/**/*.scss'],
        tasks: ['sass', 'notify:sass'],
        options: {
          spawn: false,
        },
      },
    },
    notify: {
      js: {
        options: {
          title: 'JS Concatenated',  // optional
          message: 'Task finished.', //required
        }
      },
      sass: {
        options: {
          title: 'SASS Compiled',  // optional
          message: 'Task finished.', //required
        }
      },
    },
    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: 'dist/js',
          src: '*.js',
          dest: 'dist/js'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: '*.css',
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    }
  });

  // Load the tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['concat', 'sass']);
  grunt.registerTask('build', ['concat', 'sass', 'uglify', 'cssmin']);

};
