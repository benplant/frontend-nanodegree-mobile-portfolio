module.exports = function(grunt) {

  // Grunt configuration
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	uglify: {
		options: {
    		// the banner is inserted at the top of the output
    		banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  		},
  		dist: {
    		files: {
      			'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
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
  	cssmin: {
  		target: {
  			files: [{
  				expand: true,
  				cwd: 'css/',
  				src: '*.css',
  				dest: 'css/',
  				ext: '.min.css'
  			}]
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'imageoptim', 'uglify']);
};