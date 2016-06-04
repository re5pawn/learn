function isInArray(arr) {
	'use strict';

	return Array.prototype.every.call(arguments, function(a) {
                // skip "arr" in 1st iteration
                if (a === arr) { return true; }

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
