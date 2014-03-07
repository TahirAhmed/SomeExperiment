module.exports = {
	app: {files: {'styles/app.min.css': ['styles/app.min.css']}, options: {keepSpecialComments: 0, report: 'gzip'}},
	plugins: {files: {'styles/plugins.min.css': ['styles/plugins.css']}, options: {keepSpecialComments: 0, report: 'gzip'}}
};