const isPowerOfThree = (num) => {
  while (num / 3 >= 1) {
    num /= 3;
  }

  return num === 1;
}