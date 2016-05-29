## Реализовать простейший templater
<http://jscourse.com/task/simple-templater>

Описать функцию `templater(templateString, dataObj)`. Функция, принимает аргументом строку и объект. Заменяет все вхождения подстрок вида `${STRING}` значениями из объекта с ключом `STRING`. Пример использования:

```js
templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
}); // 'mama mila ramu'
```
