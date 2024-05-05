import { TEMPLATES, APPS } from '../../../paths.js';
import { capitalize } from '../../plopUtils.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 * @param {string} componentName
 */
export const resolveComponentDestination = (componentApp, componentModule, componentName) => {
  const capitalizedComponentName = capitalize(componentName);

  return `${APPS}/${componentApp}/src/modules/${componentModule}/components/${capitalizedComponentName}`;
};

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

/**
 * @param {Object} answers
 * @param {string} answers.componentApp
 * @param {string} answers.componentModule
 * @param {string} answers.componentName
 */
export default function plopActions({ componentApp, componentModule, componentName }) {
  /** @type {Array<AddActionConfig>} */
  let actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/component`,
      templateFiles: `${TEMPLATES}/component/**`,
      stripExtensions: ['plop'],
      destination: resolveComponentDestination(componentApp, componentModule, componentName),
      data: {
        componentName,
      },
    },
  ];

  return actions;
}
