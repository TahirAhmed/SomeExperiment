(function(window) {
	var utils = {
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
	window.utils = utils;
})(window);;(function(window, document) {
	var constants = {
		className_mainContainer: 'main-container',
		className_container: 'container',
		className_topCenterWidget: 'top-center-widget',
		className_topLeftWidget: 'top-left-widget',
		isAddEventListenerAvailable: !!(('addEventListener' in window)),
		isQuerySelectorAvailable: !!(('querySelector' in document)),
		isAttachEventAvailable: !!(('attachEvent' in document)),
		prefix_on: 'on',
		prefix_classSelector: '.'
	};
	window.constants = constants;
})(window, document);;/*global jRespond */
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
})(window);;(function(window, document) {
	var main = {
		mainContainer: null,
		container: null,
		topCenterWidget: null,
		topLeftWidget: null,
		events: null,
		jRes: null,
		init: function() {
			resizemanager.init(main.onEnterDesktop, main.onExitDesktop, main.onEnterTablet, main.onExitTablet, main.onEnterMobile, main.onExitMobile);
			main.mainContainer = document.querySelectorAll(constants.prefix_classSelector + constants.className_mainContainer)[0];
			main.container = document.querySelectorAll(constants.prefix_classSelector + constants.className_container)[0];
			main.topCenterWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topCenterWidget)[0];
			main.topLeftWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topLeftWidget)[0];
			main.prepareEventsArray();
			//main.toggleListeners(main.mainContainer, main.events, true);
			//main.toggleListeners(main.container, main.events, true);
			main.toggleListeners(main.topCenterWidget, main.events, true);
			//main.toggleListeners(main.topLeftWidget, main.events, true);
		},
		onEnterDesktop: function() { /*console.log('main.onEnterDesktop');*/ },
		onExitDesktop: function() { /*console.log('main.onExitDesktop');*/ },
		onEnterTablet: function() { /*console.log('main.onEnterTablet');*/ },
		onExitTablet: function() { /*console.log('main.onExitTablet');*/ },
		onEnterMobile: function() { /*console.log('main.onEnterMobile');*/ },
		onExitMobile: function() { /*console.log('main.onExitMobile');*/ },
		prepareEventsArray: function() {
			main.events = [
				{type: 'onclick', callback: main.onClick},
				{type: 'ondblclick', callback: main.onDoubleClick},
				{type: 'onmousedown', callback: main.onMouseDown},
				{type: 'onmousemove', callback: main.onMouseMove},
				{type: 'onmouseover', callback: main.onMouseOver},
				{type: 'onmouseout', callback: main.onMouseOut},
				{type: 'onmouseup', callback: main.onMouseUp}
			];
		},
		toggleListeners: function(targetDIV, eventsArray, isAssigning) {
			var length = eventsArray.length, type = '', callback = null, i = 0;
			for (i; i < length; i++) {
				type = eventsArray[i].type;
				callback = eventsArray[i].callback;
				if (isAssigning) {
					if (constants.isAddEventListenerAvailable) { targetDIV.addEventListener(type.slice(constants.prefix_on.length, type.length), callback, false); }
					else if (constants.isAttachEventAvailable) { targetDIV.attachEvent(type, callback); }
					else { targetDIV[type] = callback; }
				} else {
					if (constants.isAddEventListenerAvailable) { targetDIV.removeEventListener(type.slice(constants.prefix_on.length, type.length), callback, false); }
					else if (constants.isAttachEventAvailable) { targetDIV.detachEvent(type, callback); }
					else { targetDIV[type] = null; }
				}
			}
		},
		onClick: function(e) {
			//console.log(e.target);
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
	main.init();
})(window, document);