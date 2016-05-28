function closest(node, testFunc) {
	'use strict';

	if (node === document.body && !testFunc(node)) {
		return null;
	}

	return testFunc(node) ? node : closest(node.parentElement, testFunc);
}