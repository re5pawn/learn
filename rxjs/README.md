## Let's do everything reactive!

__Links:__
* Доклад с HolyJS 2016 Piter: Виктор Русакович — Реактивное программирование: управляем потоками данных
  - [Видео](https://www.youtube.com/watch?v=3cGKw9sxV_g)
  - [Презентация](http://public.jugru.org/holyjs/2016/spb/day_1/track_1/rusakovich.pdf)

* [RxMarbles](http://rxmarbles.com/) - visualization of Rx operators

* Build an Angular 2 Instant Search Component - course by egghead.io. Learn more about using observables in Angular 2
  - [Course](https://egghead.io/courses/build-an-angular-2-instant-search-component)
  - [Repo](https://github.com/andela-osule/instant-search)

__Samples:__

* Stream from event

```js
const input = document.getElementById('input');
const source = Rx.Observable.fromEvent(input, 'click');
const subscription = source.subscribe(
 x => console.log('Next: Clicked!'), // .onNext()
 err => console.log('Error: ', err) // .onError()
 () => console.log('Completed') // .onComplete()
);
input.trigger('click');
// => Next: Clicked!
```

* Stream from Promise

```js
const promise = Promise.reject(new Error('reason'));
const source = Rx.Observable.fromPromise(promise);
const subscription = source.subscribe(
 x => console.log('Next msg') // .onNext()
 err => console.log('Error: %s', err) // .onError()
 () => console.log('Completed') // .onComplete()
);
// => Error: Error: reject
```

```js
// Create a promise which resolves 42
var promise = Promise.resolve(42)
var source = Rx.Observable.fromPromise(promise);
const subscription = source.subscribe(
 x => console.log('Next msg') // .onNext()
 err => console.log('Error: %s', err) // .onError()
 () => console.log('Completed') // .onComplete()
);
// => Next: 42
// => Completed
```
