class Sequence {
  constructor(arr) {
    this.cursor = 0;
    this.seq = arr;
  }

  go(index) {
    const length = this.seq.length;
    this.cursor = index >= length ? length - 1 : index;
    return this.seq[this.cursor];
  }

  next() {
    this.cursor = this.cursor + 1 >= this.seq.length ? 0 : this.cursor + 1;
    return this.seq[this.cursor];
  }

  prev() {
    this.cursor = this.cursor === 0 ? this.seq.length - 1 : this.cursor - 1;
    return this.seq[this.cursor];
  }
}
