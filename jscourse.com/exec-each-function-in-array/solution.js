function execFunctions(arrOfFunctions) {
	'use strict';

	var mapFn = Array.prototype.map;
	var handler = mapFn && mapFn.toString().indexOf('native') >= 0 ?
		function() {
			console.log('map');
			return arrOfFunctions.map(function(fn) {
				return fn();
			});
		} :
		function() {
			console.log('for');
			var result = [];
			var length = arrOfFunctions.length;
			var i;

			for (i = 0; i < length; i++) {
				result.push(arrOfFunctions[i]());
			}

			return result;
		}

	return handler();
}
