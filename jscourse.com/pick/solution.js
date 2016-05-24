function pick(obj, keys) {
	'use strict';

	var assign = function(sourceObj, targetObj, key) {
		if (sourceObj.hasOwnProperty(key)) {
			targetObj[key] = sourceObj[key];
		}

		return targetObj;
	};

	return keys.reduce(function(result, key) {
		return assign(obj, result, key);
	}, {});

	// or for older browsers
	// var result = {};
	// var length = keys.length;
	// var i;

	// for (i = 0; i < length; i++) {
	// 	assign(obj, result, keys[i]);
	// }

	// return result;
}