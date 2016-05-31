## Шаблонизация
<http://jsraccoon.ru/exercies-template>

Напишите функцию `template`, которая первым аргументом принимает строку-шаблон, а вторым — описание литералов, которые в этот шаблон нужно вставить.

```js
var templates = [
  'Hello, {user}!',
  'How was your {dayOfTheWeek}?',
  'Would you like a cup of {drink1}, or maybe some {drink2}?',
  'I\'ve just learned how to play the {instrument}, so I\'m stil a bad {instrument}ist.'
];
// Hello, missingdays!
console.log(template(templates[0], { user: 'missingdays' })); 

// How was your Monday?
console.log(template(templates[1], { dayOfTheWeek: 'Monday' })); 

// Would you like a cup of tea, or maybe some coffee?
console.log(template(templates[2], { drink1: 'tea', drink2: 'coffee' })); 

// I've just learned how to play the guitar, so I'm still a bad guitarist.
console.log(template(templates[3], { instrument: 'guitar' })); 
```

__Дополнительно__: функция может работать с массивами:

```js
var settings = {
  frameworks: ['Angular', 'Ember', 'Backbone'],
  libraries: ['jQuery', 'Underscore', 'D3']
};

// Popular frameworks: Angular, Ember, Backbone.
template('Popular frameworks: {frameworks}.', settings);

// Popular libraries: jQuery, Underscore, D3.
template('Popular libraries: {libraries}.', settings);

// Popular frameworks and libraries: Angular, Ember, Backbone, jQuery, Underscore, D3.
template('Popular frameworks and libraries: {frameworks}, {libraries}.', settings)
```
