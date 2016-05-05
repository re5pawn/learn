/*
http://jscourse.com/task/default-function-parameters

Реализовать функцию someFunc(options), с необязательным первым параметром,
который может быть объектом. Функция должна возвращать объект
1. Если options не передан, то возвращаемый объект содержит все ключи-значения из defaultOptions.
2. Если options передан, то те ключи, которые переданы в объекте options,
   "перекрывают" ключи из defaultOptions, и результирующий объект содежит набор ключей-значений
   как из options, так и из defaultOptions.

someFunc(); // {index: 0, animate: false}
someFunc({index: 20}); // {index: 20, animate: false}
someFunc({index: 1, animate: true}); // {index: 1, animate: true}
*/

function someFunc(options) {
	var defaultOptions = {
		index: 0,
		animate: false
	};
	var isObject = Object.prototype.toString.call(options).indexOf('Object') >= 0;

	if (options && isObject) {
		var key;
		for (key in options) {
			if (!options.hasOwnProperty(key)) {
				break;
			}

			defaultOptions[key] = options[key];
		}
	}

	return defaultOptions;
}
