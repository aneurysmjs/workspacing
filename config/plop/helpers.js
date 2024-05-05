/**
 *
 * @param {string} text
 */
const curlyMe = (text) => `{${text}}`;
/**
 *
 * @param {string} text
 */
const doubleCurlyMe = (text) => `{{${text}}}`;
/**
 *
 * @param {string} prefix
 * @param {string} text
 */
const prefixMe = (prefix, text) => `${prefix}${text}`;
/**
 *
 * @param {string} text
 * @param {string} suffix
 */
const suffixMe = (text, suffix) => `${text}${suffix}`;
/**
 *
 * @param {string} prefix
 * @param {string} text
 * @param {string} [suffix='']
 */
const appendType = (prefix, text, suffix = '') => `${prefix}${text}${suffix}`;
/**
 *
 * @param {string} helperName
 * @param {string} text
 * @param {string} [suffix='']
 */
const appendHelper = (helperName, text, suffix = '') =>
  doubleCurlyMe(`${helperName} ${prefixMe(text, suffix)}`);

export default {
  curlyMe,
  doubleCurlyMe,
  prefixMe,
  suffixMe,
  appendType,
  appendHelper,
};
