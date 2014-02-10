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
})(window);