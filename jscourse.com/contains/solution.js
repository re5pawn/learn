function contains(where, what) {
	'use strict';

	if (!what.length) {
		return true;
	}

	return what.every(function(item) {
		return where.indexOf(item) >= 0;
	});

	// or for older browsers
	// var length = what.length;
	// var i;
	
	// for (i = 0; i < length; i++) {
	// 	if (where.indexOf(what[i]) < 0) {
	// 		return false;
	// 	}
	// }

	// return true;
}
