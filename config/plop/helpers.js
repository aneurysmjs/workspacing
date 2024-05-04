export default {
  curlyMe: (text) => `{${text}}`,
  doubleCurlyMe: (text) => `{{${text}}}`,
  prefixMe: (suffix, text) => `${suffix}${text}`,
  suffixMe: (text, suffix) => `${text}${suffix}`,
  appendType: (prefix, text, suffix = '') => `${prefix}${text}${suffix}`,
};
