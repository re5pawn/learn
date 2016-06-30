## Удаление элементов из массива по индексу
<http://jsraccoon.ru/exercise-remove-from-array>

Напишите функцию, которая первым аргументом будет принимать массив, а все последующие аргументы — индексы элементов, которые следует удалить из массива. Индексов может быть несколько. В конце работы функция должна возвращать новый, отредактированный массив:

```js
var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

remove(strings, 2); // ['JS', 'is', 'awesome']
remove(numbers, 0, 2, 4); // [7, 5, 2, 5, 6, 3, 4]
remove(data, 1, 3, 4); // [{i: 1}, {i: 3}]
remove(random, 1, 3); // [undefined, null, {data: [...]}]
```
