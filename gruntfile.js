module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {files: {"styles/app.css": "styles/app/main.less" }},
			production: {options: {compress: true, cleancss: true, optimization: 2}, files: {"styles/app.min.css": "styles/app.css"}}
		},
		concat: {
			options: {separator: ';'},
			app: {
				src: ['scripts/app/utils.js', 'scripts/app/constants.js', 'scripts/app/main.js'],
      			dest: 'scripts/app.js'
			},
			plugins: {src: ['scripts/plugins/**/*.js'], dest: 'scripts/plugins.js'}
		},
		uglify: {
			options: {banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n * <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM Z") %>\n */\n\n', /*beautify: true,*/ mangle: false},
			app: {files: {'scripts/app.min.js': ['scripts/app.js']}},
			plugins: {files: {'scripts/plugins.min.js': ['scripts/plugins.js']}}
		},
		watch: {
			styles: {files: ['styles/app/main.less'], tasks: ['less'], options: {nospawn: true}},
			scripts: {files: ['scripts/app/**/*.js'], tasks: ['concat', 'uglify:app'], options: {nospawn: true}},
			plugins: {files: ['scripts/plugins/**/*.js'], tasks: ['concat', 'uglify:plugins'], options: {nospawn: true}}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['watch']);
};