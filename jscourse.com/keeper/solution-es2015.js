function createKeeper() {
  let data = [];
  
  return {
    put(key, value) {
      if (data.some(d => d.key === key)) {
        let d = data.filter(d => d.key === key)[0];
        d.value = value;
      } else {
        data.push({ key, value });
      }
    },

    get(key) {
      let k = data.filter(d => d.key === key)[0];
      return k ? k.value : null;
    }
  }
}