class Queue {
  constructor(...values) {
    this._q = {};
    this._current = 0;
    this._nextPointer = 0;

    // values could be array of array in case of new Stack([1, 2, 3]),
    // if so - make it flat
    values = Array.isArray(values[0])
      ? [...values[0]]
      : values;

    values.forEach(v => this.enqueue(v));
  }

  enqueue(value) {
    if (this._current === this._nextPointer) {
      this._current = this._nextPointer = 0;
    }
    
    this._q[this._current] = value;
    this._current++;
  }

  dequeue() {
    const value = this._q[this._nextPointer] || null;

    if (value) {
      delete this._q[this._nextPointer];
      this._nextPointer++;
    }
    
    return value;
  }

  get size() {
    return this._current - this._nextPointer;
  }
}
