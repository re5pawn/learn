/*
Реализуйте функцию которая принимает на вход количество минут, а в возвращает время в виде строки.
Пример:
solution(60); // 1:00
solution(5); // 0:05
solution(15); // 0:15
solution(175); // 2:55
solution(67); // 1:07
*/

function formatTime(min) {
	var hours = 0;
	var separator;

	while (min >= 60) {
		hours++;
		min -= 60;
	}

	separator = min < 10 ? ':0' : ':';

	return hours + separator + min;
}

console.log(formatTime(60)); // 1:00
console.log(formatTime(5)); // 0:05
console.log(formatTime(15)); // 0:15
console.log(formatTime(175)); // 2:55
console.log(formatTime(67)); // 1:07
