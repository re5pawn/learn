const invertCase = (string) => {
  let toLow, toUp;

  return string.split('').reduce((result, letter) => {
    toLow = letter.toLowerCase();
    toUp = letter.toUpperCase();

    letter = toLow === letter ? toUp : toLow;

    return result += letter;
  }, '');
}