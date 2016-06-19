const sumDigits = (num) => {
	const numAsStr = String(num);
	return numAsStr.split('').reduce((sum, digit) => {
		return sum += digit * digit;
	}, 0);
};

const happyNumber = (num) => {
	let tryCount = 0;
	let sum = num;
	while (tryCount < 10 && sum !== 1) {
		sum = sumDigits(sum);
		tryCount++;
	}
	
	return sum === 1;
}
