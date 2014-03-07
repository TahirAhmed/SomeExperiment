module.exports = {
	compile: {
		files: {'index.min.html': 'index.html'},
		//		files: {'sharepoint.min.html': 'sharepoint.html'},
		options: {
			//			preserveComments: true,
			//			preserveMultiSpaces: true,
			//			preserveLineBreaks: true,
			removeIntertagSpaces: true,
			removeQuotes: true,
			removeStyleAttr: true,
			removeLinkAttr: true,
			removeScriptAttr: true,
			removeFormAttr: true,
			removeInputAttr: true,
			simpleBoolAttr: true,
			removeJsProtocol: true,
			removeHttpProtocol: true,
			removeHttpsProtocol: true,
			removeSurroundingSpaces: true,
			//			jsCompressor: 'closure',
			//			nomunge: true,
			//			preserveSemi: true,
			//			disableOptimizations: true,
			compressCss: true,
			compressJs: true
		}
	}
};