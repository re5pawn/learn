function Sequence(arr) {
  'use strict';

  this.cursor = 0;
  this.seq = arr;
}

Sequence.prototype.go = function(index) {
  var length = this.seq.length;
  this.cursor = index >= length ? length - 1 : index;
  return this.seq[this.cursor];
};

Sequence.prototype.next = function() {
  this.cursor = this.cursor + 1 >= this.seq.length ? 0 : this.cursor + 1;
  return this.seq[this.cursor];
};

Sequence.prototype.prev = function() {
  this.cursor = this.cursor === 0 ? this.seq.length - 1 : this.cursor - 1;
  return this.seq[this.cursor];
};
