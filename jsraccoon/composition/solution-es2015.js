const composition = (...fns) => {
  return (arg) => {
    return fns.reduce((prevResult, fn) => fn(prevResult), arg);
  };
}