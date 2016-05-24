function contains(where, what) {
	'use strict';
	
	if (!what.length) { return true; }

	return what.every(function(item) {
		return where.indexOf(item) >= 0;
	});
}
