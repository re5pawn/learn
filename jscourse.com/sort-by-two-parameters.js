function sort(items) {
  items
    .sort(a => a.active ? -1 : 1)
    .sort((a, b) => {
      if (a.active === b.active) {
        return a.value - b.value;
      }
    });
}
