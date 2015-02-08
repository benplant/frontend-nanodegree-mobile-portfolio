module.exports = function(grunt) {

  // Grunt configuration
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	jshint: {
  		files: ['Gruntfile.js', 'js/*.js', 'views/js/*.js'],
  		options: {
  			globals: {
  			}
  		}
  	},
  	uncss: {
  		dist: {
  			files: {
  				'views/css/style-uncss.css': ['views/pizza.html']
  			}
  		}
  	},
  	uglify: {
  		dist: {
    		files: {
      			'js/perfmatters.min.js': ['js/perfmatters.js'],
      			'views/js/main.min.js': ['views/js/main.js']
    		}
  		}
	},
  	cssmin: {
  		target: {
  			files: [{
  				expand: true,
  				cwd: 'css/',
  				src: ['*.css', '!*.min.css'],
  				dest: 'css/',
  				ext: '.min.css'
  			},
  			{
  				expand: true,
  				keepSpecialComments: 0,
  				cwd: 'views/css/',
  				src: ['*.css', '!*.min.css'],
  				dest: 'views/css/',
  				ext: '.min.css'
  			}],
  			options: {
      			keepSpecialComments: 0
      		}
  		}
  	},
  	htmlmin: {
  		dist: {
  			options: {
  				removeComments: true,
  				collapseWhitespace: true
  			},
  			files: {
  				'index.html': 'src/index.html',
  				'project-2048.html': 'src/project-2048.html',
  				'project-mobile.html': 'src/project-mobile.html',
  				'project-webperf.html': 'src/project-webperf.html',
  				'views/pizza.html': 'views/src/pizza.html'
  			}
  		}
  	},
    imageoptim: {
  		myTask: {
    		src: ['img', 'views/images']
  		}
	},
	watch: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['imageoptim', 'uglify', 'cssmin', 'htmlmin']);
};