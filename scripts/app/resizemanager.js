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
				{label: 'mobile', enter: 0, exit: 767},
				{label: 'tablet', enter: 768, exit: 979},
				{label: 'laptop', enter: 980, exit: 1199},
				{label: 'desktop', enter: 1200, exit: 10000}
			]);
			resizemanager.jRes.addFunc([
				{breakpoint: 'desktop', enter: function() { resizemanager.onEnterDesktop(); }, exit: function() { resizemanager.onExitDesktop(); }},
				{breakpoint: 'laptop', enter: function() { resizemanager.onEnterLaptop(); }, exit: function() { resizemanager.onExitLaptop(); }},
				{breakpoint: 'tablet', enter: function() { resizemanager.onEnterTablet(); }, exit: function() { resizemanager.onExitTablet(); }},
				{breakpoint: 'mobile', enter: function() { resizemanager.onEnterMobile(); }, exit: function() { resizemanager.onExitMobile(); }}
			]);
		}
	};
	window.resizemanager = resizemanager;
})(window);