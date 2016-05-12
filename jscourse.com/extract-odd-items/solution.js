function extractOddItems(arr) {
	var filterFn = Array.prototype.filter;
	var handler = filterFn && filterFn.toString().indexOf('native') >= 0 ?
		function() {
			return arr.filter(function(elem, index) {
				return index % 2;
			});
		} :
		function() {
			// fallback for older browsers or if "filter" was "monkey-patched"
			var result = [];
			var length = arr.length;
			var i;

			for (i = 1; i < length; i += 2) {
				result.push(arr[i]);
			}

			return result;
		};

	return handler();
}
