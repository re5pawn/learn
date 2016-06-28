function findLongestPalindrome(stringToSearchIn) {
  'use strict';

  var isPalindrome = function(test) {
    test = test.toLowerCase();
    return test === test.split('').reverse().join('');
  }

  var str = stringToSearchIn
    .toLowerCase()
    .split('')
    .filter(function(char) {
      return char !== ' ';
    })
    .join('');

  if (isPalindrome(str)) {
    return str;
  };

  var result = '';
  var length = str.length;
  var i, test;

  for (i = 0; i < length; i++) {
    test = str.slice(0, i + 1);

    if (isPalindrome(test)) {
      result = test.length > result.length ? test : result;
    }
  }

  return result;
}