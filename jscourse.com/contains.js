function contains(where, what) {
  if (!what.length) { return true; }

  return what.every(function(e) {
    return where.indexOf(e) >= 0;
  });
}
