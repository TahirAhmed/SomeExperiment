(function(window, document) {
	var main = {
		mainContainer: null,
		container: null,
		topCenterWidget: null,
		topLeftWidget: null,
		events: null,
		jRes: null,
		ready: function() {
			if (document.readyState === constants.document_readyState_complete) {
				main.init();
			} else {
				if (window.addEventListener) {
					window.addEventListener(constants.window_onLoaded, main.init, false);
				} else {
					window.attachEvent(constants.prefix_on + constants.window_onLoaded, function() {
						if (document.readyState === constants.document_readyState_interactive) { main.init(); }
					});
				}
			}
		},
		init: function() {
			resizelistener.init(main.onEnterDesktop, main.onExitDesktop, main.onEnterTablet, main.onExitTablet, main.onEnterMobile, main.onExitMobile);
			main.mainContainer = document.querySelectorAll(constants.prefix_classSelector + constants.className_maincontainer)[0];
			main.container = document.querySelectorAll(constants.prefix_classSelector + constants.className_container)[0];
			main.topCenterWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topCenterWidget)[0];
			main.topLeftWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topLeftWidget)[0];
			main.prepareEventsArray();
			eventbinder.toggleListeners(main.mainContainer, main.events, true);
			eventbinder.toggleListeners(main.container, main.events, true);
			eventbinder.toggleListeners(main.topCenterWidget, main.events, true);
			eventbinder.toggleListeners(main.topLeftWidget, main.events, true);
		},
		onEnterDesktop: function() { /*console.log('main.onEnterDesktop');*/ },
		onExitDesktop: function() { /*console.log('main.onExitDesktop');*/ },
		onEnterTablet: function() { /*console.log('main.onEnterTablet');*/ },
		onExitTablet: function() { /*console.log('main.onExitTablet');*/ },
		onEnterMobile: function() { /*console.log('main.onEnterMobile');*/ },
		onExitMobile: function() { /*console.log('main.onExitMobile');*/ },
		prepareEventsArray: function() {
			main.events = [
				{type: constants.event_onClick, callback: main.onClick},
				{type: constants.event_onDoubleClick, callback: main.onDoubleClick},
				{type: constants.event_onMouseDown, callback: main.onMouseDown},
				{type: constants.event_onMouseMove, callback: main.onMouseMove},
				{type: constants.event_onMouseOver, callback: main.onMouseOver},
				{type: constants.event_onMouseOut, callback: main.onMouseOut},
				{type: constants.event_onMouseUp, callback: main.onMouseUp}
			];
		},
		onClick: function(e) {
			//console.log(e.currentTarget);
			//TweenMax.to(contactus.respectiveDIV, 0.3, {x: utils.mathutils.roundToInterval(utils.mathutils.randomIntegerWithinRange(10, 1000), 200), ease: Power3.easeOut});
		},
		onDoubleClick: function(e) { /*console.log('main.onDoubleClick');*/ },
		onMouseDown: function(e) { /*console.log('main.onMouseDown');*/ },
		onMouseMove: function(e) { /*console.log('main.onMouseMove');*/ },
		onMouseOver: function(e) { /*console.log('main.onMouseOver');*/ },
		onMouseOut: function(e) { /*console.log('main.onMouseOut');*/ },
		onMouseUp: function(e) { /*console.log('main.onMouseUp');*/ }
	};
	window.main = main;
	main.ready();
	//main.init();
})(window, document);