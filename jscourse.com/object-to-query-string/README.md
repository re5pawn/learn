## Преобразовать объект в queryString
<http://jscourse.com/task/object-to-query-string>

Реализовать функцию `objectToQueryString(object)`, которая принимает аргументом объект,
возвращает строку.
Примеры работы:

```js
objectToQueryString({user: 'Dmitry'}); // user=Dmitry
objectToQueryString({user: 'Dmitry', password: 'pass'}); // user=Dmitry&password=pass
objectToQueryString({user: 'Dmitry', password: 'pass', id: 1}); // user=Dmitry&password=pass&id=1
```
