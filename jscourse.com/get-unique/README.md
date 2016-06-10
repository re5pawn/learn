## Сформировать список без повторений
<http://jscourse.com/task/get-unique>

Реализовать функцию `getUnique(arr)`, которая принимает аргументом массив или массивоподоный объект, и возвращает массив таких элементов, которые входят в массив аргумента, и встречаются только раз в массиве результата. Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать с порядком, в котором они встречаются в оригинальной структуре.

```js
var a = {};
var b = {};
var u = getUnique([a,b,b,a]);
console.log(u[0] === a); // true
console.log(u[1] === b); // true
console.log(u.length === 2); // true
```

<iframe src='https://glot.io/snippets/efhwb6r2zx/embed' frameborder='0' scrolling='no' sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts' width='600' height='400'></iframe>
