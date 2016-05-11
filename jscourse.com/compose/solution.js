function compose() {
	var fns = Array.prototype.slice.call(arguments);
	var forEachFn = Array.prototype.forEach;
	var handler = forEachFn && forEachFn.toString().indexOf('native') >= 0 ?
		function() {
			console.log('forEach');
			fns.forEach(function(fn) {
				fn();
			});
		} :
		function() {
			console.log('for');
			var i;
			for (i = 0; i < fns.length; i++) {
				fns[i]();
			}
		};

	return handler;
}