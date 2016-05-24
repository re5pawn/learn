## Объединить объекты
<http://jscourse.com/task/extend-object-simple>

Реализовать функцию `extend(obj1, obj2)`, которая скопирует свойства из объекта `obj2`
в объект `obj1`. Функция должна возвращать `obj1`. Значения одинаковых ключей должны
перетирать оригинальные.
Пример:

```js
extend({foo: 'bar', baz: 1}, {foo: true, zoop: 0}); // {foo: true, baz: 1, zoop: 0}
```
