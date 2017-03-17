class Stack {
  constructor(...values) {
    this._stack = {};
    this._current = 0;
    
    // values could be array of array in case of new Stack([1, 2, 3]),
    // if so - make it flat
    values = Array.isArray(values[0])
      ? [...values[0]]
      : values;

    values.forEach(v => this.push(v));
  }

  push(value) {
    this._stack[this._current] = value;
    this._current++;
  }

  pop() {
    const nextValue = this._stack[this._current - 1];

    if (nextValue) {
      delete this._stack[this._current - 1];
      this._current--;
      return nextValue;
    }

    return null;
  }

  get size() {
    return this._current;
  }
}
