function isPalindrome(test) {
  test = test.toLowerCase();
  return test === test.split('').reverse().join('');
};

function longestPalindrome(s) {
  var str = s.replace(/\s/g, '');

  if (isPalindrome(str)) {
    return str.length;
  };

  var findPalindrome = function(str) {
    var length = str.length;
    var i, test;

    for (i = 0; i < length; i++) {
      test = str.slice(0, i + 1);

      if (isPalindrome(test)) {
        resultLength = test.length > resultLength
          ? test.length
          : resultLength;
      }
    }
  };

  var resultLength = 0;
  var length = str.length;
  var i, test;

  for (i = 0; i < length; i++) {
    test = str.slice(i);
    findPalindrome(test);
  }

  return resultLength;
}
