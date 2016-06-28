function compose(...fns) {
  return () => {
    for (let fn of fns) {
      if (typeof fn === 'function') { fn(); }
    }
  }
}