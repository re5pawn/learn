function extractOddItems(arr) {
	return arr.filter((elem, index) => {
		return index % 2;
	});
}
