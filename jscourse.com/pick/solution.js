function pick(obj, keys) {
	'use strict';

	var assign = function(sourceObj, targetObj, key) {
		if (sourceObj.hasOwnProperty(key)) {
			targetObj[key] = sourceObj[key];
		}

		return targetObj;
	};

	var reduceFn = Array.prototype.reduce;
	var handler = reduceFn && reduceFn.toString().indexOf('native') >= 0 ?
		function() {
			return keys.reduce(function(result, key) {
				return assign(obj, result, key);
			}, {});
		} :
		function() {
			// fallback for older browsers or if "reduce" was "monkey-patched"
			var result = {};
			var i;

			for (i = 0; i < keys.length; i++) {
				assign(obj, result, keys[i]);
			}

			return result;
		};

		return handler();
}