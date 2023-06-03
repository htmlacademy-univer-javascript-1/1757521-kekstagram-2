/**
 * Get random number from a selected range
 * @see {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random}
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomNumber(min = 0, max = 0) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
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

const isEscapeKey = (evt) => evt.key === 'Escape';

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

const checkFokus = (el) => el === document.querySelector(':focus');

export {getRandomNumber, checkStringLength, isEscapeKey, hasDuplicates, checkFokus};
