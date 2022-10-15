const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let strNum = String(n);
  const resultArr = [];
  for (let i = 0; i < strNum.length; i++) {
    let a = strNum.slice(0, i) ? strNum.slice(0, i) : ' ';
    let b = strNum.slice(i + 1) ? strNum.slice(i+1) : ' ';
    resultArr.push((a+b.trim()));
  }

  return Math.max(...resultArr);
}

module.exports = {
  deleteDigit
};
