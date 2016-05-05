/*
http://jscourse.com/task/summ-numbers-by-condition

Реализовать функцию sumOnly100Plus, которая принимает аргументом массив,
и возвращает сумму всех чисел массива, которые больше 100.
В массиве могут быть не только числовые данные, их никак не учитывать.
Пример работы:
sumOnly100Plus([150, "200", " ", 30, 300]); // 450
*/

function sumOnly100Plus(arr) {
	var reduceFn = Array.prototype.reduce;
	var handler = reduceFn && reduceFn.toString().indexOf('native') >= 0 ?
		function() {
			return arr.reduce(function(total, elem) {
				// check on "NaN" isn't necessary, because "NaN" satisfies a condition "elem > 100"
				return typeof elem === 'number' && elem > 100 ? total + elem : total;
			}, 0);
		} :
		function() {
			// fallback for older browsers or if "reduce" was "monkey-patched"
			var result = 0;
			var i;

			for (i = 0; i < arr.length; i++) {
				if (typeof arr[i] === 'number' && arr[i] > 100) {
					result += arr[i];
				}
			}

			return result;
		}

	return handler();
}
