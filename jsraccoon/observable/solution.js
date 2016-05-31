function observable(obj) {
	'use strict';
	
	var observers = {};

	var removeHandler = function(eventName, idx) {
		observers[eventName] && observers[eventName].splice(idx, 1);
	};

	var removeObserver = function(eventName) {
		observers[eventName] && delete observers[eventName];
	};

	var assignMethods = function() {
		for (var method in api) {
			obj[method] = api[method];
		}
	};

	var api = {
		'on': function(eventName, fn, runOnce) {
			runOnce = runOnce || false;
			observers[eventName] = observers[eventName] || [];

			var alreadyExist = observers[eventName].some(function(o) {
				return o.fn === fn && o.runOnce === runOnce;
			});

			if (!alreadyExist) {
				observers[eventName].push({ fn: fn, runOnce: runOnce });
			}
		},

		'one': function(eventName, fn) {
			this.on(eventName, fn, true);
		},

		'fire': function(eventName) {
			var args = Array.prototype.slice.call(arguments, 1);
			var self = this;

			observers[eventName] && observers[eventName].forEach(function(o, i, arr) {
				o.fn.apply(this, args);
				o.runOnce && self.unbind(eventName, o.fn);
			});
		},

		'unbind': function(eventName, fn) {
			if (fn && observers[eventName]) {
				observers[eventName].forEach(function(o, i, fns) {
					if (o.fn !== fn) { return; }

					if (fns.length === 1) {
						removeObserver(eventName);
					} else {
						removeHandler(eventName, i);
					}
				});
			} else {
				removeObserver(eventName);
			}
		},

		'getObservers': function() {
			return observers;
		}
	};

	assignMethods();
};
