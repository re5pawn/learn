function XO(str) {
  str = str.trim().toLowerCase();

  let count = 0;

  for (let char of str) {
    if (char === 'x') { count++; }
    if (char === 'o') { count--; }
  }

  return count === 0;
}