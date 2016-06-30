function remove(array, ...indexes) {
  return array.filter((item, idx) => !indexes.includes(idx));
}