function objectToQueryString(object) {
	'use strict';
	
	var result = '';
	var key, encodedKey, value;

	for (key in object) {

		// it's an important check, because in result will be
		// properties and methods from object's prototype
		if (!object.hasOwnProperty(key)) {
			break;
		}

		encodedKey = encodeURIComponent(key);
		value = encodeURIComponent(object[key]);

		result += encodedKey + '=' + value + '&';
	}

	return result.slice(0, result.length - 1);
}