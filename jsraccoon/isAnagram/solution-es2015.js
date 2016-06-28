function isAnagram(wordA, wordB) {
  'use strict';
  
  const a = wordA.replace(/\s/g, '').toLowerCase();
  const b = wordB.replace(/\s/g, '').toLowerCase();
  const sort = (str) => str.split('').sort().join('');

  if (a === b) { return false; };

  return sort(a) === sort(b);
}
