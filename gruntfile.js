module.exports = function(grunt) {
	require('time-grunt')(grunt);
	var config = require('load-grunt-config')(grunt);
	config.pkg = grunt.file.readJSON('package.json');
};