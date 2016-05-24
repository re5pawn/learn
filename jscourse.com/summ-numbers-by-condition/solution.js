function sumOnly100Plus(arr) {
	'use strict';

	return arr.reduce(function(total, elem) {
		// check on "NaN" isn't necessary, because "NaN" satisfies a condition "elem > 100"
		return typeof elem === 'number' && elem > 100 ? total + elem : total;
	}, 0);

	// or for older browser
	// var result = 0;
	// var length = arr.length;
	// var i;

	// for (i = 0; i < length; i++) {
	// 	if (typeof arr[i] === 'number' && arr[i] > 100) {
	// 		result += arr[i];
	// 	}
	// }

	// return result;
}
