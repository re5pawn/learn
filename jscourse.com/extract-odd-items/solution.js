function extractOddItems(arr) {
	'use strict';

	return arr.filter(function(elem, index) {
		return index % 2;
	});
	
	// or for older browsers
	// var result = [];
	// var length = arr.length;
	// var i;

	// for (i = 1; i < length; i += 2) {
	// 	result.push(arr[i]);
	// }

	// return result;
}
