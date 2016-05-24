function compose() {
	'use strict';

	var fns = Array.prototype.slice.call(arguments);

	return function() {
		fns.forEach(function(fn) {
			if (typeof fn === 'function') { fn(); }
		});

		// or for older browsers:
		// var length = fns.length;
		// var i;
		// for (i = 0; i < length; i++) {
		// 	if (typeof fns[i] === 'function') { fns[i](); }
		// }
	}
}