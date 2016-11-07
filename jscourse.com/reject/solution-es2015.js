function reject(arr, filterCallback) {
  return arr
    .filter((el, idx, array) => !filterCallback(el, idx, array));
}
