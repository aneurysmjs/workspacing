import { APPS, TEMPLATES } from '../../../paths.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 */
export const resolvePageDestination = (componentApp, componentModule) => {
  return `${APPS}/${componentApp}/src/modules/${componentModule}/pages`;
};

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

/**
 * @param {Object} answers
 * @param {string} answers.pageName
 */
export default function plopActions({ componentApp, componentModule, pageName }) {
  /** @type {Array<AddActionConfig>} */
  let actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/page`,
      templateFiles: `${TEMPLATES}/page/**`,
      stripExtensions: ['plop'],
      destination: resolvePageDestination(componentApp, componentModule),
      data: {
        pageName,
      },
    },
  ];

  return actions;
}
