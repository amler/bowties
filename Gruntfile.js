module.exports = function(grunt) {

	// Init
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				browser: true,
				globals: {
					jQuery: true
				}
			},
			all: [
				'Gruntfile.js',
				'assets/js/*.js'
			]
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'assets/screen.css': 'src/scss/screen.scss'
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'assets/main-min.js': [
						'src/js/main.js'
					]
				}
			}
		},
		watch: {
			css: {
				files: [
					'assets/scss/*.scss',
					'assets/scss/**/*.scss'
				],
				tasks: ['sass']
			},	
			js: {
				files: [
					'src/js/*.js',
					'src/js/**/*.js'
				],
				tasks: ['javascript']
			}
		}
	});

	grunt.registerTask('update-theme', 'Update Shopify Theme’s CSS & JavaScript.', function() {
		var css = grunt.file.read('assets/screen.css');
		var js = grunt.file.read('assets/main-min.js');
		grunt.file.write('../r-hanauer-10431979/assets/style.css.liquid', css);
		grunt.file.write('../r-hanauer-10431979/assets/scripts.js.liquid', js);
	});

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-jshint'); // Validate files with JSHint.
	grunt.loadNpmTasks('grunt-contrib-sass'); // Compile Sass to CSS.
	grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify files with UglifyJS.
	grunt.loadNpmTasks('grunt-contrib-watch'); // Run predefined tasks whenever watched file patterns are added, changed or deleted.

	// Register Tasks
	grunt.registerTask('javascript', ['jshint', 'uglify']);
	grunt.registerTask('build', ['javascript', 'sass', 'update-theme']);
	grunt.registerTask('default', ['build']);
	
};