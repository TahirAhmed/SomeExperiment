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
})(window);