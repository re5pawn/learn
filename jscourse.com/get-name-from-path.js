function getName(path) {
	'use strict';
	
	return path.split('/')
		.filter(function(p) { return !!p; })
		.pop();
}
