(function(){
	var eventmanager = {
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
		}
	};
	window.eventmanager = eventmanager;
})();