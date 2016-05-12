function compose(...fns) {
	return () => {
		for (let fn of fns) {
			fn();
		}
	}
}