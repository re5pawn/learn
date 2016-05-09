function queryStringToObject(queryString) {
	queryString = decodeURIComponent(queryString.trim());

	if (!queryString.length) {
		return {};
	}

	var assign = function(targetObject, queryStringPart) {
		var eqCharIdx = queryStringPart.indexOf('=');
		var key = queryStringPart.slice(0, eqCharIdx);
		var value = queryStringPart.slice(eqCharIdx + 1);

		if (value === 'true') {
			value = true;
		}

		if (value === 'false') {
			value = false;
		}

		if (!isNaN(parseInt(value, 10))) {
			value = parseInt(value, 10);
		}

		targetObject[key] = value;
		
		return targetObject;
	};

	var queryStringParts = queryString.split('&');
	var result = {};
	var reduceFn = Array.prototype.reduce;

	var handler = reduceFn && reduceFn.toString().indexOf('native') >= 0 ?
		function() {
			console.log('reduce');
			return queryStringParts.reduce(assign, result);
		} :
		function() {
			console.log('for');
			// fallback for older browsers or if "reduce" was "monkey-patched"
			for (var i = 0; i < queryStringParts.length; i++) {
				assign(result, queryStringParts[i]);
			}

			return result;
		};

	return handler();
}
