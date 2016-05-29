function createObject(arrOfKeys, arrOfData) {
	'use strict';

	return arrOfKeys.reduce(function(result, key, idx) {
		result[key] = arrOfData[idx];
		return result;
	}, {});
	
	// or for older browsers
	// var result = {};
	// var length = arrOfKeys.length;
	// var i, key, value;
	
	// for (i = 0; i < length; i++) {
	// 	key = arrOfKeys[i];
	// 	value = arrOfData[i];
		
	// 	result[key] = value;
	// }
	
	// return result;
}