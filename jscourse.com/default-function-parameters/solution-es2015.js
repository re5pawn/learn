function someFunc(options) {
	const defaultOptions = {
		index: 0,
		animate: false
	};
	const isObject = Object.prototype.toString.call(options).includes('Object') >= 0;

	if (options && isObject) {
		return Object.assign(defaultOptions, options);
	}

	return defaultOptions;
}
