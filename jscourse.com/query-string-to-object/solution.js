function queryStringToObject(queryString) {
	'use strict';
	
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
			return queryStringParts.reduce(assign, result);
		} :
		function() {
			// fallback for older browsers or if "reduce" was "monkey-patched"
			var length = queryStringParts.length;
			var i;
			
			for (i = 0; i < length; i++) {
				assign(result, queryStringParts[i]);
			}

			return result;
		};

	return handler();
}
