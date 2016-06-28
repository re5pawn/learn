function someFunc(options) {
  const defaultOptions = {
    index: 0,
    animate: false
  };
  const isObject = Object.prototype.toString.call(options).includes('Object');

  if (options && isObject) {
    return Object.assign(defaultOptions, options);
  }

  return defaultOptions;
}
