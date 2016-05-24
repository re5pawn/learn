function extend(obj1, obj2) {
	'use strict';
	
	var key;
	
	for (key in obj2) {
		if (obj2.hasOwnProperty(key)) {
			obj1[key] = obj2[key];
		}
	}
	
	return obj1;
}