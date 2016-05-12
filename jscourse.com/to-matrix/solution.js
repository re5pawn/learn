function toMatrix (data, rowSize) {
	var reduceFn = Array.prototype.reduce;
	var handler = reduceFn && reduceFn.toString().indexOf('native') >= 0 ?
		function() {
			return data.reduce(function(result, d, i) {
				if (i % rowSize === 0) {
					result.push(data.slice(i, i + rowSize));
				}
				return result;
			}, []);
		} :
		function() {
			// fallback for older browsers or if "reduce" was "monkey-patched"
			var result = [];
			var i;

			for(i = 0; i < data.length; i += rowSize) {
				result.push(data.slice(i, i + rowSize));
			}

			return result;
		}

		return handler();
}