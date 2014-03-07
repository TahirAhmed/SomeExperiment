module.exports = {
	dist: {
		options: {
			removeComments: true,
			removeCommentsFromCDATA: true,
			removeCDATASectionsFromCDATA: true,
			collapseWhitespace: true,
			collapseBooleanAttributes: true,
			/*removeAttributeQuotes: true,*/
			removeRedundantAttributes: true,
			removeEmptyAttributes: true/*,
			 removeOptionalTags: true*/
		},
		files: {'index.min.html': 'index.html'}
	}
};