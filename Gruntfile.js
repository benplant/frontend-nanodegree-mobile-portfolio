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
  				'src/css/style-uncss.css': ['src/index.html'],
  				'views/css/style-uncss.css': ['views/pizza.html']
  			}
  		}
  	},
  	imageoptim: {
  		myTask: {
    		src: ['img', 'views/images']
  		}
	},
	uglify: {
  		dist: {
    		files: {
      			'src/js/perfmatters.min.js': ['src/js/perfmatters.js'],
      			'views/js/main.min.js': ['views/js/main.js']
    		}
  		}
	},
  	cssmin: {
  		target: {
  			files: [{
  				expand: true,
  				cwd: 'src/css/',
  				src: 'style.css',
  				dest: 'src/css/',
  				ext: '.min.css'
  			},
  			{
  				expand: true,
  				cwd: 'src/css/',
  				src: 'print.css',
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
  	inline: {
  		dist: {
	  		files: [{
	            expand: true,
	            cwd:  'src/',
	            src: ['*.html'],
	            dest: 'src/inlined/'
	        }]
	    }
  	},
  	htmlmin: {
  		dist: {
  			options: {
  				removeComments: true,
  				collapseWhitespace: true
  			},
  			files: {
  				'index.html': 'src/inlined/index.html',
  				'project-2048.html': 'src/inlined/project-2048.html',
  				'project-mobile.html': 'src/inlined/project-mobile.html',
  				'project-webperf.html': 'src/inlined/project-webperf.html',
  				'views/pizza.html': 'views/src/pizza.html'
  			}
  		}
  	},
    watch: {
		files: ['<%= jshint.files %>'],
		tasks: ['jshint']
	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-imageoptim');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['imageoptim', 'uglify', 'cssmin', 'inline', 'htmlmin']);
};