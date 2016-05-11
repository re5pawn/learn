## Преобразовать строку запроса (query string) в объект
<http://jscourse.com/task/query-string-to-object>

Реализуй функцию `queryStringToObject(queryString)`, которая возвращает объект.
Распознавать следующие типы данных: числа, строки, булевы.
Помни, что некоторые символы query string могут быть закодированы.
Пример работы:

```js
queryStringToObject("user=true"); // {user: true}
queryStringToObject("user=true&age=29"); // {user: true, age: 29}
queryStringToObject("user=true&age=29&name=Evgen"); // {user: true, age: 29, name: "Evgen"}
```
