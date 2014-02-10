(function(window, document) {
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
			//eventmanager.toggleListeners(main.mainContainer, main.events, true);
			//eventmanager.toggleListeners(main.container, main.events, true);
			eventmanager.toggleListeners(main.topCenterWidget, main.events, true);
			//eventmanager.toggleListeners(main.topLeftWidget, main.events, true);
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