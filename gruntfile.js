module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					removeCommentsFromCDATA: true,
					removeCDATASectionsFromCDATA: true,
					collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true
				},
				files: {'index.min.html': 'index.html'}
			}
		},
		less: {
			app: {files: {'styles/app.css': 'styles/app/main.less'}},
			plugins: {files: {'styles/plugins.css': 'styles/plugins/**/*.css'}},
			app_min: {options: {compress: true, cleancss: true, optimization: 2}, files: {'styles/app.min.css': 'styles/app.css'}},
			plugins_min: {options: {compress: true, cleancss: true, optimization: 2}, files: {'styles/plugins.min.css': 'styles/plugins.css'}}
		},
		concat: {
			options: {separator: ';'},
			app: {
				src: ['scripts/app/utils.js', 'scripts/app/constants.js', 'scripts/app/resizemanager.js', 'scripts/app/main.js'],
      			dest: 'scripts/app.js'
			},
			plugins: {src: ['scripts/plugins/**/*.js'], dest: 'scripts/plugins.js'}
		},
		uglify: {
			options: {banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n * <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM Z") %>\n */\n\n', /*beautify: true,*/ mangle: true},
			app: {files: {'scripts/app.min.js': ['scripts/app.js']}},
			plugins: {files: {'scripts/plugins.min.js': ['scripts/plugins.js']}}
		},
		watch: {
			styles: {files: ['styles/app/**/*.less'], tasks: ['less:app', 'less:app_min'], options: {nospawn: true}},
			scripts: {files: ['scripts/app/**/*.js'], tasks: ['concat:app', 'uglify:app'], options: {nospawn: true}},
			plugins: {files: ['scripts/plugins/**/*.js', 'styles/plugins/**/*.css'], tasks: ['concat:plugins', 'uglify:plugins', 'less:plugins', 'less:plugins_min'], options: {nospawn: true}}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['watch']);
};