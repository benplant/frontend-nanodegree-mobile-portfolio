module.exports = function(grunt) {

  // Grunt configuration
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	uglify: {
  		dist: {
    		files: {
      			'js/min/ouput.js': ['js/perfmatters.js']
    		}
  		}
	},
  	jshint: {
  		files: ['Gruntfile.js', 'js/*.js'],
  		options: {
  			globals: {
  			}
  		}
  	},
  	uncss: {
  		dist: {
  			files: {
  				'css/style-uncss.css': ['index.html']
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
  				'index.html': 'src/index.html',
  				'project-2048.html': 'src/project-2048.html',
  				'project-mobile.html': 'src/project-mobile.html',
  				'project-webperf.html': 'src/project-webperf.html'
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

  grunt.registerTask('default', ['jshint', 'imageoptim', 'uglify']);
};