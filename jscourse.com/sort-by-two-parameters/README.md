## Отсортировать структуру по двум параметрам
<http://jscourse.com/task/sort-by-two-parameters>

Реализовать функцию `sort(list)`, которая отсортирует список по 2-м параметрам.
Все объекты с признаком `active` равным `true` должны идти раньше тех, объектов,
у которых это свойство равняется `false`. При этом объекты должны быть отсортированы
в убывающем порядке по свойству `value`. Функция изменяет оригинальный массив,
а не создает новый.
Пример:

```js
var items = [{
    active: false,
    value: 3
}, {
    active: false,
    value: 1
}, {
    active: true,
    value: 2
}, {
    active: false,
    value: 2
}, {
    active: true,
    value: 1
}];

sort(items);
console.log(items);

/*
[{
    active: true,
    value: 1
}, {
    active: true,
    value: 2
}, {
    active: false,
    value: 1
}, {
    active: false,
    value: 2
}, {
    active: false,
    value: 3
}]
*/
```
