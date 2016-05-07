function objectToQueryString(object) {
	var result = '';
	var key;

	for (key in object) {
		if (!object.hasOwnProperty(key)) {
			break;
		}

		result += encodeURIComponent(key) + '=' + encodeURIComponent(object[key]) + '&';
	}

	return result.slice(0, result.length - 1);
}