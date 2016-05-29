function templater(templateString, dataObj) {
	'use strict';

	var startIdx, endChar, re, key;

	for (key in dataObj) {
		startIdx = templateString.indexOf('${' + key);
		endChar = templateString[startIdx + key.length + 2]; // 2 === '${'.length
		re = new RegExp('\\${' + key + '}', 'g'); // /\${key}/g

		if (startIdx >= 0 && endChar === '}') {
			templateString = templateString.replace(re, dataObj[key]);
		}
	}

	return templateString;
}