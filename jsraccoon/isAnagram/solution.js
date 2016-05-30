function isAnagram(wordA, wordB) {
	'use strict';
	
	var a = wordA.replace(/\s/g, '').toLowerCase();
	var b = wordB.replace(/\s/g, '').toLowerCase();
	var sort = function(str) {
		return str.split('').sort().join('');
	}

	if (a === b) { return false };

	return sort(a) === sort(b);
}