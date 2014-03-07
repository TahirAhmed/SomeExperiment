module.exports = {
	//	markup: {files: ['index.html'], tasks: ['newer:htmlcompressor'], options: {nospawn: true}},
	markup: {files: ['templates/**/*.html'], tasks: ['newer:bake', 'newer:htmlcompressor'], options: {nospawn: true}},
	styles: {files: ['styles/app/**/*.less'], tasks: ['less:app', 'less:app_min', 'cssmin:app'], options: {nospawn: true}},
	scripts: {files: ['scripts/app/**/*.js'], tasks: ['newer:concat:app_scripts', 'newer:uglify:app'], options: {nospawn: true}},
	plugins: {files: ['scripts/plugins/**/*.js', 'styles/plugins/**/*.css'], tasks: ['newer:concat:pluginsScripts', 'newer:concat:pluginsStyles', 'newer:uglify:plugins', 'newer:less:plugins', 'newer:less:plugins_min'], options: {nospawn: true}}//,
	//images: {files: ['images/**/*.{png,jpg,gif}'], tasks: ['newer:imagemin']}
};