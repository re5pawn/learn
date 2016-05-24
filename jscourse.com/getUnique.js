function getUnique(list) {
	'use strict';

	list = Array.prototype.slice.call(list);
	
	return list.reduce(function(result, current) {
		if (result.indexOf(current) < 0) {
			result.push(current);
		}

		return result;
	}, []);
}
