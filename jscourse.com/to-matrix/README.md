## Преобразовать одномерный массив в двумерный
<http://jscourse.com/task/to-matrix>

Реализовать функцию `toMatrix(data, rowSize)`, которая принимает аргументом массив и число, возвращает новый массив. Число показывает количество элементов в подмассивах,
элементы подмассивов беруться из массива `data`. Оригинальный массив не должен быть изменен.
Пример работы:

```js
toMatrix([1,2,3,4,5,6,7,8,9], 3); // [[1,2,3], [4,5,6], [7,8,9]]
toMatrix([1,2,3,4,5,6,7], 3); // [[1,2,3], [4,5,6], [7]]
toMatrix([1,2,3], 5); // [[1,2,3]]
toMatrix([], 3); // []
```