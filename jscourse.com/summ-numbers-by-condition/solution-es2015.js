function sumOnly100Plus(arr) {
	return arr.reduce((total, elem) => {
		// check on "NaN" isn't necessary, because "NaN" satisfies a condition "elem > 100"
		return typeof elem === 'number' && elem > 100 ? total + elem : total;
	}, 0);
}
