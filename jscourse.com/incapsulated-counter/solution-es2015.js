function createSummator(initialValue = 0) {
  return {
    inc(num = 1) {
      initialValue += num;
    },
    
    dec(num = 1) {
      initialValue -= num;
    },
    
    get() {
      return initialValue;
    }
  };
}