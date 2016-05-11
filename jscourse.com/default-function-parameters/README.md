## Функция с параметрами по умолчанию
<http://jscourse.com/task/default-function-parameters>

Реализовать функцию `someFunc(options)`, с необязательным первым параметром, который может быть объектом.
Функция должна возвращать объект
* Если `options` не передан, то возвращаемый объект содержит все ключи-значения из `defaultOptions`.
* Если `options` передан, то те ключи, которые переданы в объекте `options`, "перекрывают" ключи из `defaultOptions`,
  и результирующий объект содежит набор ключей-значений как из `options`, так и из `defaultOptions`.

```js
someFunc(); // {index: 0, animate: false}
someFunc({index: 20}); // {index: 20, animate: false}
someFunc({index: 1, animate: true}); // {index: 1, animate: true}
```
