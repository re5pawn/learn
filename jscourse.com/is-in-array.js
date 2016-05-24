function isInArray(arr) {
	'use strict';

	var args = Array.prototype.slice.call(arguments, 1);

	return args.every(function(a) {
		return arr.indexOf(a) >= 0;
	});
}
