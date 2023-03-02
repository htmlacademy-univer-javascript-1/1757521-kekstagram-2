/**
 * Get random number from a selected range
 * @see {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomNumber(min = 0, max = 0) {
  if (min < 0 || max < 0 || min > max) {
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Check string length
 * @param {String} string
 * @param {Number} maxLength
 * @return boolean
 */
function checkStringLength(string = '', maxLength = 0) {
  return string.length <= maxLength;
}
