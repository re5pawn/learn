function flatten(array) {
	return array.reduce((result, elem) => {
		if (Array.isArray(elem)) {
			result = result.concat(flatten(elem));
		} else {
			result.push(elem);
		}

		return result;
	}, []);
}