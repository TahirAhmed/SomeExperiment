/*global jRespond */
(function(window) {
	window.resizelistener = {
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
			resizelistener.onEnterDesktop = onEnterDesktop;
			resizelistener.onExitDesktop = onExitDesktop;
			resizelistener.onEnterLaptop = onEnterDesktop;
			resizelistener.onExitLaptop = onExitDesktop;
			resizelistener.onEnterTablet = onEnterTablet;
			resizelistener.onExitTablet = onExitTablet;
			resizelistener.onEnterMobile = onEnterMobile;
			resizelistener.onExitMobile = onExitMobile;
			resizelistener.setupBreakpoints();
		},
		setupBreakpoints: function() {
			resizelistener.jRes = window.jRespond([
				{label: constants.breakpointLabel_Mobile, enter: 0, exit: constants.breakpoint_MobileTablet-1},
				{label: constants.breakpointLabel_Tablet, enter: constants.breakpoint_MobileTablet, exit: constants.breakpoint_TabletLaptop-1},
				{label: constants.breakpointLabel_Laptop, enter: constants.breakpoint_TabletLaptop, exit: constants.breakpoint_LaptopDesktop-1},
				{label: constants.breakpointLabel_Desktop, enter: constants.breakpoint_LaptopDesktop, exit: 10000}
			]);
			resizelistener.jRes.addFunc([
				{breakpoint: constants.breakpointLabel_Desktop, enter: function() { resizelistener.onEnterDesktop(); }, exit: function() { resizelistener.onExitDesktop(); }},
				{breakpoint: constants.breakpointLabel_Laptop, enter: function() { resizelistener.onEnterLaptop(); }, exit: function() { resizelistener.onExitLaptop(); }},
				{breakpoint: constants.breakpointLabel_Tablet, enter: function() { resizelistener.onEnterTablet(); }, exit: function() { resizelistener.onExitTablet(); }},
				{breakpoint: constants.breakpointLabel_Mobile, enter: function() { resizelistener.onEnterMobile(); }, exit: function() { resizelistener.onExitMobile(); }}
			]);
		}
	};
})(window);