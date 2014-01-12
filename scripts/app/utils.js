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
utils.mathutils.isBetween = function(value, firstValue, secondValue) { return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue)); };