module.exports = {
	options: {banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n * <%= grunt.template.today("dddd, mmmm dS, yyyy, HH:MM Z") %>\n */\n\n', separator: ';\n'},
	app_scripts: {
		src: ['scripts/app/utils.js', 'scripts/app/constants.js', 'scripts/app/resizelistener.js', 'scripts/app/eventbinder.js', 'scripts/app/main.js'],
		dest: 'scripts/app.js'
	},
	pluginsScripts: {src: ['scripts/plugins/**/*.js'], dest: 'scripts/plugins.js'},
	/*app_styles: {
	 src: ['scripts/app/utils.js', 'scripts/app/constants.js', 'scripts/app/resizelistener.js', 'scripts/app/eventbinder.js', 'scripts/app/main.js'],
	 dest: 'scripts/app.js'
	 },*/
	/*pluginsStyles: {
	 src: ['styles/plugins/reset_en_gb.css', 'styles/plugins/reset_ar_ae.css', 'styles/plugins/style-ar.css', 'styles/plugins/style_en_gb.css', 'styles/plugins/style_ar_ae.css', 'styles/plugins/fixing_en_gb.css', 'styles/plugins/fixing_ar_ae.css', 'styles/plugins/print_en_gb.css', 'styles/plugins/print_ar_ae.css', 'styles/plugins/printFixing_en_gb.css', 'styles/plugins/printFixing_ar_ae.css', 'styles/plugins/jquery.ad-gallery_en_gb.css', 'styles/plugins/jquery.ad-gallery_ar_ae.css', 'styles/plugins/selectik.css', 'styles/plugins/tabs.css'],
	 dest: 'styles/plugins.css'
	 }*/
	pluginsStyles: {
		src: ['styles/plugins/normalize.css'],
		dest: 'styles/plugins.css'
	}
};