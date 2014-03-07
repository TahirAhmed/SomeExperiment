module.exports = {
	options: {banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n * <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM Z") %>\n */\n\n', /*beautify: true,*/ mangle: true, compress: true, report: 'gzip'},
	app: {files: {'scripts/app.min.js': ['scripts/app.js']}},
	plugins: {files: {'scripts/plugins.min.js': ['scripts/plugins.js']}}
};