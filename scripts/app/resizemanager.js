/*global jRespond */
(function(window) {
	var resizemanager = {
		jRes: null,
		onEnterDesktop: null,
		onExitDesktop: null,
		onEnterLaptop: null,
		onExitLaptop:  null,
		onEnterTablet: null,
		onExitTablet: null,
		onEnterMobile: null,
		onExitMobile: null,
		init: function(onEnterDesktop, onExitDesktop, onEnterTablet, onExitTablet, onEnterMobile, onExitMobile) {
			resizemanager.onEnterDesktop = onEnterDesktop;
			resizemanager.onExitDesktop = onExitDesktop;
			resizemanager.onEnterLaptop = onEnterDesktop;
			resizemanager.onExitLaptop = onExitDesktop;
			resizemanager.onEnterTablet = onEnterTablet;
			resizemanager.onExitTablet = onExitTablet;
			resizemanager.onEnterMobile = onEnterMobile;
			resizemanager.onExitMobile = onExitMobile;
			resizemanager.setupBreakpoints();
		},
		setupBreakpoints: function() {
			resizemanager.jRes = jRespond([
				{label: constants.breakpointLabel_Mobile, enter: 0, exit: constants.breakpoint_MobileTablet-1},
				{label: constants.breakpointLabel_Tablet, enter: constants.breakpoint_MobileTablet, exit: constants.breakpoint_TabletLaptop-1},
				{label: constants.breakpointLabel_Laptop, enter: constants.breakpoint_TabletLaptop, exit: constants.breakpoint_LaptopDesktop-1},
				{label: constants.breakpointLabel_Desktop, enter: constants.breakpoint_LaptopDesktop, exit: 10000}
			]);
			resizemanager.jRes.addFunc([
				{breakpoint: constants.breakpointLabel_Desktop, enter: function() { resizemanager.onEnterDesktop(); }, exit: function() { resizemanager.onExitDesktop(); }},
				{breakpoint: constants.breakpointLabel_Laptop, enter: function() { resizemanager.onEnterLaptop(); }, exit: function() { resizemanager.onExitLaptop(); }},
				{breakpoint: constants.breakpointLabel_Tablet, enter: function() { resizemanager.onEnterTablet(); }, exit: function() { resizemanager.onExitTablet(); }},
				{breakpoint: constants.breakpointLabel_Mobile, enter: function() { resizemanager.onEnterMobile(); }, exit: function() { resizemanager.onExitMobile(); }}
			]);
		}
	};
	window.resizemanager = resizemanager;
})(window);