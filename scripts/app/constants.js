(function(window, document) {
	var constants = {
		breakpoint_MobileTablet: 768,
		breakpoint_TabletLaptop: 980,
		breakpoint_LaptopDesktop: 1200,
		breakpointLabel_Mobile: 'mobile',
		breakpointLabel_Tablet: 'tablet',
		breakpointLabel_Laptop: 'laptop',
		breakpointLabel_Desktop: 'desktop',
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