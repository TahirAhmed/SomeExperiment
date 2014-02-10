(function(window, document) {
	var constants = {
		className_container: 'container',
		className_mainContainer: 'main-container',
		className_topCenterWidget: 'top-center-widget',
		className_topLeftWidget: 'top-left-widget',
		isAddEventListenerAvailable: !!(('addEventListener' in window)),
		isAttachEventAvailable: !!(('attachEvent' in document)),
		isQuerySelectorAvailable: !!(('querySelector' in document)),
		prefix_classSelector: '.',
		prefix_on: 'on'
	};
	window.constants = constants;
})(window, document);