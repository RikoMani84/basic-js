const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let atSign = email.lastIndexOf('@');
  return email.slice(atSign + 1);e
}

module.exports = {
  getEmailDomain
};
