function isInArray(arr) {
	'use strict';

	var args = Array.prototype.slice.call(arguments, 1);

	return args.every(function(a) {
		return arr.indexOf(a) >= 0;
	});

	// or for older browsers
	// var length = args.length;
	// var i;

	// for (i = 0; i < length; i++) {
	// 	if (arr.indexOf(args[i]) < 0) {
	// 		return false;
	// 	}
	// }

	// return true;
}
