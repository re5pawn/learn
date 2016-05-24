function sort(items) {
	items
		.sort(function(a) {
			return a.active ? -1 : 1;
		})
		.sort(function(a, b) {
			if (a.active === b.active) {
				return a.value - b.value;
			}
		});
}
