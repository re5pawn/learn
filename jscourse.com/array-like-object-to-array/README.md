## Создать массив из массивоподобного объекта
<http://jscourse.com/task/array-like-object-to-array>

Реализовать функцию `toArray(obj)`, которая принимает аргументом массивоподобный объект
(например `arguments`), и возвращает массив из тех же элементов, которые входили в
массивоподобный объект.
Пример работы:

```js
function someFunc() {
    var args = toArray(arguments);
    console.log(arguments.forEach); // undefined, метод есть только у массивов.
    console.log(args.forEach); // [function], метод есть только у массивов.
}

someFunc(1,2,3,4);
```
