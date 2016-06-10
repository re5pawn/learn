/**
  * @param {Array} data – array of CSS classes
  */
const obfuscate = (data) => {
	'use strict';

	const obfus = () => {
		let dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

		return Math.round(new Date().getTime() / Math.random())
			.toString().split('').map(sym => dict[parseInt(sym, 10)]).join('');
	};

	return data.reduce((result, className) => {
		result[className] = className in result ? result[className] : obfus();
		return result;
	}, {});
};

export default obfuscate;
