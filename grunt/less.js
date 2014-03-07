module.exports = {
	app: {files: {'styles/app.css': 'styles/app/main.less'}},
	//plugins: {files: {'styles/plugins.css': 'styles/plugins/**/*.css'}},
	app_min: {options: {compress: true, cleancss: true, optimization: 2}, files: {'styles/app.min.css': 'styles/app.css'}}
	//plugins_min: {options: {compress: true, cleancss: true, optimization: 2}, files: {'styles/plugins.min.css': 'styles/plugins.css'}}
};