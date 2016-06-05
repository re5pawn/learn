function thereIsAnA(obj) {
	var isObject = function(test) {
		return Object.prototype.toString.call(test).indexOf('Object') >= 0;
	};
	
	return Object.keys(obj).reduce(function (result, key) {
		if (key === 'a') {
			result++;
		}
		
		if (isObject(obj[key])) {
			result += thereIsAnA(obj[key]);
		}
		
		return result;
	}, 0);
}