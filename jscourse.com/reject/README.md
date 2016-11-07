## Выбрать элементы, которые не соответствуют условию фильтрации
<http://jscourse.com/task/reject>

Реализовать функцию `reject`, которая получает аргументом массив и функцию-фильтр,
и возвращает новый массив, в который попали элементы, для которых функция фильтр вернула `false`.
Функция фильтр получает аргументами соответственно элемент массива, индекс элемента массива, сам массив.

```js
var arr = ['uno', 2, true, 42, 'tre']
// skip only number 2
reject(arr, function (item) {
    return item === 2
}); // ['uno', true, 42, 'tre']

// Skip only strings
reject(arr, function (item) {
    return typeof item === 'string'
}); // [2, true, 42]
```
