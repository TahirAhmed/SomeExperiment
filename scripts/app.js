/*global console*/
var utils = utils || {};
utils.mathutils = {};

utils.mathutils.roundDecimalToPlace = function(value, place) { var p = Math.pow(10, place); return Math.round(value * p) / p; };
utils.mathutils.randomWithinRange = function(min, max) { return min + (Math.random() * (max - min)); };
utils.mathutils.randomIntegerWithinRange = function(min, max) { return Math.floor(Math.random() * (1 + max - min) + min); };
utils.mathutils.floor = function(nNumber, nRoundToInterval) { return Math.floor(nNumber / nRoundToInterval) * nRoundToInterval; };
utils.mathutils.ceil = function(nNumber, nRoundToInterval) { return Math.ceil(nNumber / nRoundToInterval) * nRoundToInterval; };
utils.mathutils.constrain = function(value, firstValue, secondValue) { return Math.min(Math.max(value, Math.min(firstValue, secondValue)), Math.max(firstValue, secondValue)); };
utils.mathutils.roundToInterval = function(nNumber, nRoundToInterval) { return Math.round(nNumber / nRoundToInterval) * nRoundToInterval; };
utils.mathutils.map = function(value, min1, max1, min2, max2) { return min2 + (max2 - min2) * ((value - min1) / (max1 - min1)); };
utils.mathutils.isBetween = function(value, firstValue, secondValue) { return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue)); };;var constants = constants || {};
constants.prefix_on = 'on';
constants.prefix_classSelector = '.';
constants.className_mainContainer = 'main-container';
constants.className_container = 'container';
constants.className_topCenterWidget = 'top-center-widget';
constants.className_topLeftWidget = 'top-left-widget';;/*global jRespond */
var main = main || {};
main.mainContainer = null;
main.container = null;
main.topCenterWidget = null;
main.topLeftWidget = null;
main.events = null;
main.jRes = null;
main.init = function() {
	main.setupBreakpoints();
	main.mainContainer = document.querySelectorAll(constants.prefix_classSelector + constants.className_mainContainer)[0];
	main.container = document.querySelectorAll(constants.prefix_classSelector + constants.className_container)[0];
	main.topCenterWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topCenterWidget)[0];
	main.topLeftWidget = document.querySelectorAll(constants.prefix_classSelector + constants.className_topLeftWidget)[0];
	main.prepareEventsArray();
	main.toggleListeners(main.mainContainer, true);
	main.toggleListeners(main.container, true);
	main.toggleListeners(main.topCenterWidget, true);
	main.toggleListeners(main.topLeftWidget, true);
};
main.setupBreakpoints = function() {
	main.jRes = jRespond([
		{label: 'mobile', enter: 0, exit: 767},
		{label: 'tablet', enter: 768, exit: 979},
		{label: 'laptop', enter: 980, exit: 1199},
		{label: 'desktop', enter: 1200, exit: 10000}
	]);
	main.jRes.addFunc([
	{
		breakpoint: ['desktop', 'laptop'],
		enter: function() { main.onEntering_Desktop(); },
		exit: function() { main.onExiting_Desktop(); }
	},
	{
		breakpoint: 'tablet',
		enter: function() { main.onEntering_Tablet(); },
		exit: function() { main.onExiting_Tablet(); }
	},
	{
		breakpoint: 'mobile',
		enter: function() { main.onEntering_Mobile(); },
		exit: function() { main.onExiting_Mobile(); }
	}]);
};
main.onEntering_Desktop = function() {
	console.log('main.onEntering_Desktop');
};
main.onExiting_Desktop = function() {
	//console.log('main.onExiting_Desktop');
};
main.onEntering_Tablet = function() {
	console.log('main.onEntering_Tablet');
};
main.onExiting_Tablet = function() {
	//console.log('main.onExiting_Tablet');
};
main.onEntering_Mobile = function() {
	console.log('main.onEntering_Mobile');
};
main.onExiting_Mobile = function() {
	//console.log('main.onExiting_Mobile');
};
main.prepareEventsArray = function() {
	main.events = [
		{type: 'onclick', callback: main.onClicked},
		{type: 'ondblclick', callback: main.onDoubleClicked},
		{type: 'onmousedown', callback: main.onMouseDown},
		{type: 'onmousemove', callback: main.onMouseMove},
		{type: 'onmouseover', callback: main.onMouseOver},
		{type: 'onmouseout', callback: main.onMouseOut},
		{type: 'onmouseup', callback: main.onMouseUp}
	];
};
main.toggleListeners = function(targetDIV, isAssigning) {
	var eventsArray = main.events, length = eventsArray.length, type = '', callback = null, i = 0;
	for (i; i < length; i++) {
		type = eventsArray[i].type;
		callback = eventsArray[i].callback;
		if (isAssigning) {
			if (targetDIV.addEventListener) {
				targetDIV.addEventListener(type.slice(constants.prefix_on.length, type.length), callback, false);
			} else if (targetDIV.attachEvent) {
				targetDIV.attachEvent(type, callback);
			} else {
				targetDIV[type] = callback;
			}
		} else {
			if (targetDIV.removeEventListener) {
				targetDIV.removeEventListener(type.slice(constants.prefix_on.length, type.length), callback, false);
			} else if (targetDIV.detachEvent) {
				targetDIV.detachEvent(type, callback);
			} else {
				targetDIV[type] = null;
			}
		}
	}
};
main.onClicked = function(e) {
	console.log(e.currentTarget);
	//TweenMax.to(contactus.respectiveDIV, 0.3, {x: utils.mathutils.roundToInterval(utils.mathutils.randomIntegerWithinRange(10, 1000), 200), ease: Power3.easeOut});
};
main.onDoubleClicked = function(e) {
	//console.log('main.onDoubleClicked');
};
main.onMouseDown = function(e) {
	//console.log('main.onMouseDown');
};
main.onMouseMove = function(e) {
	//console.log('main.onMouseMove');
};
main.onMouseOver = function(e) {
	//console.log('main.onMouseOver');
};
main.onMouseOut = function(e) {
	//console.log('main.onMouseOut');
};
main.onMouseUp = function(e) {
	//console.log('main.onMouseUp');
};

//
main.init();