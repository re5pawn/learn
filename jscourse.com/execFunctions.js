function execFunctions(arrOfFunctions) {
	'use strict';
	
	return arrOfFunctions.map(function(fn) {
		return fn();
	});
}
