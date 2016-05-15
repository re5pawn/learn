function flatten(array) {
	return array.reduce((result, elem) => {
		if (Array.isArray(elem)) {
			flatten(elem).forEach(e => result.push(e));
		} else {
			result.push(elem);
		}

		return result;
	}, []);
}