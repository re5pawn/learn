## Найди анаграммы
<http://jsraccoon.ru/exercise-anagrams>

Напишите функцию `isAnagram`, которая будет проверять являются ли два переданных ей слова анаграммами.

```js
isAnagram('стационар', 'соратница'); // true
isAnagram('покраснение', 'пенсионерка'); // true
isAnagram('внимание', 'Вениамин'); // true
isAnagram('апельсин', 'спаниель'); // true
```

Функция может работать с несколькими словами и не учитывает регистр букв:

```js
// работает с несколькими словами
isAnagram('eleven plus two', 'twelve plus one'); // true
isAnagram('statue of liberty', 'built to stay free'); // true
isAnagram('older and wiser', 'I learned words'); // true
```
