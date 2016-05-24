function contains(where, what) {
	'use strict';

	if (!what.length) {
		return true;
	}

	var everyFn = Array.prototype.every;
	var handler = everyFn && everyFn.toString().indexOf('native') >= 0 ?
		function() {
			return what.every(function(item) {
				return where.indexOf(item) >= 0;
			});
		} :
		function() {
			// fallback for older browsers or if "every" was "monkey-patched"
			var i = 0;
			var length = what.length;

			for (i; i < length; i++) {
				if (where.indexOf(what[i]) < 0) {
					return false;
				}
			}

			return true;
		}
}
