function sum(...args) {
	return args.reduce((total, elem) => {
		return total + elem;
	});
}
