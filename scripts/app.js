/*!
 * SomeExperiment v0.1.0
 * Thursday, March 6th, 2014, 15:50 GMT+0500
 */

(function(window) {
	window.utils = {
		roundDecimalToPlace: function(value, place) { var p = Math.pow(10, place); return Math.round(value * p) / p; },
		randomWithinRange: function(min, max) { return min + (Math.random() * (max - min)); },
		randomIntegerWithinRange: function(min, max) { return Math.floor(Math.random() * (1 + max - min) + min); },
		floor: function(nNumber, nRoundToInterval) { return Math.floor(nNumber / nRoundToInterval) * nRoundToInterval; },
		ceil: function(nNumber, nRoundToInterval) { return Math.ceil(nNumber / nRoundToInterval) * nRoundToInterval; },
		constrain: function(value, firstValue, secondValue) { return Math.min(Math.max(value, Math.min(firstValue, secondValue)), Math.max(firstValue, secondValue)); },
		roundToInterval: function(nNumber, nRoundToInterval) { return Math.round(nNumber / nRoundToInterval) * nRoundToInterval; },
		map: function(value, min1, max1, min2, max2) { return min2 + (max2 - min2) * ((value - min1) / (max1 - min1)); },
		isBetween: function(value, firstValue, secondValue) { return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue)); }
	};
})(window);;
(function(window, document) {
	window.constants = {
		breakpoint_MobileTablet: 768,
		breakpoint_TabletLaptop: 980,
		breakpoint_LaptopDesktop: 1200,
		breakpointLabel_Mobile: 'mobile',
		breakpointLabel_Tablet: 'tablet',
		breakpointLabel_Laptop: 'laptop',
		breakpointLabel_Desktop: 'desktop',
		className_container: 'container',
		className_maincontainer: 'maincontainer',
		className_topCenterWidget: 'top-center-widget',
		className_topLeftWidget: 'top-left-widget',
		document_readyState_interactive: 'interactive',
		document_readyState_complete: 'complete',
		event_onClick: 'onclick',
		event_onDoubleClick: 'ondblclick',
		event_onMouseDown: 'onmousedown',
		event_onMouseMove: 'onmousemove',
		event_onMouseOver: 'onmouseover',
		event_onMouseOut: 'onmouseout',
		event_onMouseUp: 'onmouseup',
		isAddEventListenerAvailable: !!(('addEventListener' in window)),
		isAttachEventAvailable: !!(('attachEvent' in document)),
		isQuerySelectorAvailable: !!(('querySelector' in document)),
		prefix_classSelector: '.',
		prefix_on: 'on',
		window_onLoaded: 'load'
	};
})(window, document);;
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
})(window);;
(function(window) {
	window.eventbinder = {
		toggleListeners: function(targetDIV, eventsArray, isAssigning) {
			var type, callback;
			for (var i = 0, length = eventsArray.length; i < length; i++) {
				type = eventsArray[i].type;
				callback = eventsArray[i].callback;
				if (isAssigning) {
					if (constants.isAddEventListenerAvailable) {
						targetDIV.addEventListener(type.slice(constants.prefix_on.length, type.length), callback, false);
					} else if (constants.isAttachEventAvailable) {
						targetDIV.attachEvent(type, callback);
					} else {
						targetDIV[type] = callback;
					}
				} else {
					if (constants.isAddEventListenerAvailable) {
						targetDIV.removeEventListener(type.slice(constants.prefix_on.length, type.length), callback, false);
					} else if (constants.isAttachEventAvailable) {
						targetDIV.detachEvent(type, callback);
					} else {
						targetDIV[type] = null;
					}
				}
			}
		}
	};
})(window);;
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