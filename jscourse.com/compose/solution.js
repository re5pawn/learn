function compose() {
	var fns = Array.prototype.slice.call(arguments);
	var forEachFn = Array.prototype.forEach;
	var handler = forEachFn && forEachFn.toString().indexOf('native') >= 0 ?
		function() {
			fns.forEach(function(fn) {
				if (typeof fn === 'function') { fn(); }
			});
		} :
		function() {
			var length = fns.length;
			var i;
			for (i = 0; i < length; i++) {
				if (typeof fns[i] === 'function') { fns[i](); }
			}
		};

	return handler;
}