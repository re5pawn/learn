function returnMultipleValues() {
  return [1, 2];
}
let [foo, bar] = returnMultipleValues();
console.log(foo); // 1
console.log(bar); // 2

// or
function returnMultiple() {
  return {
    a: 1,
    b: 2
  };
}
// names of variables must be
// identity of returned object props
let { a, b } = returnMultipleValues();
