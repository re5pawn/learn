## Объект наблюдатель
<http://jsraccoon.ru/exercise-observable>

Напишите функцию `observable`, которая будет принимать объект и делать его “наблюдаемым”. После вызова функции объект должен поддерживать следующие методы.

```js
function callback(){
    console.log("I'm called!");
}
var obj = {};
observable(obj);

obj.on("event", callback); // При каждом событии event вызвать callback
obj.fire("event"); // I'm called!
obj.fire("event"); // I'm called!

obj.one("event2", callback); // Подписаться на событие единожды
obj.fire("event2"); // I'm called!
obj.fire("event2"); // Ничего не происходит

obj.unbind("event"); // Отписаться от события
obj.fire("event"); // Ничего не происходит
```

Из дополнительных опций - поддержка нескольких функций, подписанных на одно событие.

```js
obj.on("event", callback1);
obj.on("event", callback2);
obj.fire("event"); // callback1 и callback2 вызваны
```

Unbind конкретной функции, а не всего события.

```js
obj.on("event", callback1);
obj.on("event", callback2);
obj.unbind("event", callback1);
obj.fire("event"); //  callback2 вызван
```

Передача аргументов в callback.

```js
function callback(one, two){
    console.log(one + two);
}
obj.on("event", callback);
obj.fire("event", 1, 2); // 3
```
