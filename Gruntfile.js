module.exports = function(grunt) {

	// Init
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			images: {
				expand: true,
				cwd: 'src/assets/img',
				src: '**',
				dest: 'build/assets/img',
				filter: 'isFile'
			},
			libraries: {
				expand: true,
				cwd: 'assets/js/libraries',
				src: '**',
				dest: 'build/assets',
				filter: 'isFile'
			},
		},
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
					'build/assets/style.css.liquid': 'assets/scss/screen.scss'
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'build/assets/scripts.js.liquid': [
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
			js: {
				files: [
					'assets/js/*.js',
					'assets/js/**/*.js'
				],
				tasks: ['javascript']
			}
		}
	});

		// Custom Tasks
	grunt.task.registerTask('setup', 'Refreshes build directory for a new build process.', function() {
		grunt.file.delete('build');
		grunt.file.mkdir('build');
	});	

	// Load NPM Tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint'); // Validate files with JSHint.
	grunt.loadNpmTasks('grunt-contrib-sass'); // Compile Sass to CSS.
	grunt.loadNpmTasks('grunt-contrib-uglify'); // Minify files with UglifyJS.
	grunt.loadNpmTasks('grunt-contrib-watch'); // Run predefined tasks whenever watched file patterns are added, changed or deleted.

	// Register Tasks
	grunt.registerTask('javascript', ['jshint', 'uglify']);
	grunt.registerTask('build', ['setup','javascript', 'sass', 'copy']);
	grunt.registerTask('default', ['build']);
};