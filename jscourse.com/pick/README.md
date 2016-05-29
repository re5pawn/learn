## Выбрать ключи-значения из объекта
<http://jscourse.com/task/pick>

Реализовать функцию `pick(obj, keys)`, которая принимает аргументами объект и массив строк (названия ключей).
Возвращает новый объект, куда вошли все ключи, указанные в массиве `keys`, и соответствующие значения из объекта `obj`.
Если в объекте `obj`, нет ключа, указанного в массиве `keys`, в результирующем объекте этот ключ не должен присутствовать.
Пример работы:

```js
var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}

pick(user, ['name']); // {name: 'Sergey'}
pick(user, ['name', 'second-name']); // {name: 'Sergey'}
pick(user, ['name', 'friends']); // {name: 'Sergey', friends:['Sveta', 'Artem']}
```
