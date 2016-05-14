function every(arr, func) {
	'use strict';
	
	var length = arr.length;
	var i;
	
	for (i = 0; i < length; i++) {
		if (!func(arr[i], i, arr)) {
			return false;
		}
	}
	
	return true;
}