/*
http://jscourse.com/task/summ-all-arguments

Реализуй функцию sum(), которая суммирует все передаваемые ей аргументы.
В аргументах могут быть любые данные.
Пример работы:
sum(10, 20); // 30
*/

function sum() {
	var reduceFn = Array.prototype.reduce;
	var args = Array.prototype.slice.call(arguments, 0);
	var handler = reduceFn && reduceFn.toString().indexOf('native') >= 0 ?
		function() {
			return args.reduce(function(total, elem) {
				return total + elem;
			});
		} :
		function() {
			// fallback for older browsers or if "reduce" was "monkey-patched"
			var result = typeof args[0] === 'number' ? 0 : '';
			var i;

			for (i = 0; i < args.length; i++) {
				result += args[i];
			}

			return result;
		};

	return handler();
}
