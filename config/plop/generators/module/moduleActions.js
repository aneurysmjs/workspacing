import { TEMPLATES, APPS } from '../../../paths.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 * @param {string} componentName
 */
const resolveModuleDestination = (componentApp, moduleName) => {
  const capitalizedModuleName = capitalize(moduleName);

  return `${APPS}/${componentApp}/src/modules/${capitalizedModuleName}`;
};

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

/**
 * @param {Object} answers
 * @param {string} answers.componentApp
 * @param {string} answers.moduleName
 */
export default function moduleActions({ componentApp, moduleName }) {
  /** @type {Array<AddActionConfig>} */
  const actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/module`,
      templateFiles: `${TEMPLATES}/module/**`,
      stripExtensions: ['plop'],
      destination: `${APPS}/${componentApp}/src/modules/${moduleName}`,
      data: {
        moduleName,
      },
    },
  ];

  return actions;
}
