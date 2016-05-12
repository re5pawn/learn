function toMatrix (data, rowSize) {
	return data.reduce((result, d, i) => {
		if (i % rowSize === 0) {
			result.push(data.slice(i, i + rowSize));
		}
		return result;
	}, []);
}