import { TEMPLATES, APPS } from '../../../paths.js';

import { resolveComponentDestination } from '../component/componentActions.js';
import { resolvePageDestination } from '../page/pageActions.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 */
const resolveModuleDestination = (componentApp, moduleName) => {
  return `${APPS}/${componentApp}/src/modules/${moduleName}`;
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
      destination: resolveModuleDestination(componentApp, moduleName),
      data: {
        moduleName,
      },
    },
    {
      type: 'addMany',
      base: `${TEMPLATES}/component`,
      templateFiles: `${TEMPLATES}/component/**`,
      stripExtensions: ['plop'],
      destination: resolveComponentDestination(componentApp, moduleName, moduleName),
      data: {
        componentName: moduleName,
      },
    },
    {
      type: 'addMany',
      base: `${TEMPLATES}/page`,
      templateFiles: `${TEMPLATES}/page/**`,
      stripExtensions: ['plop'],
      destination: resolvePageDestination(componentApp, moduleName),
      data: {
        pageName: moduleName,
      },
    },
  ];

  return actions;
}
