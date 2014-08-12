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
					'assets/css/screen.css': 'assets/scss/screen.scss'
				}
			}
		},
		uglify: {
			dist: {
				files: {
					'assets/main-min-js/main.js': [
						'assets/js/main.js'
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
			html: {
				files: [
					'index.html'
				],
				tasks: ['copy:html']
			},
			js: {
				files: [
					'assets/js/*.js',
					'assets/js/**/*.js'
				],
				tasks: ['javascript']
			}
		}
	});

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-jshint'); // Validate files with JSHint.
	grunt.loadNpmTasks('grunt-contrib-sass'); // Compile Sass to CSS.
	grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify files with UglifyJS.
	grunt.loadNpmTasks('grunt-contrib-watch'); // Run predefined tasks whenever watched file patterns are added, changed or deleted.

	// Register Tasks
	grunt.registerTask('javascript', ['jshint', 'uglify']);
	grunt.registerTask('watch', ['javascript', 'sass']);
	grunt.registerTask('default', ['watch']);
	
};
