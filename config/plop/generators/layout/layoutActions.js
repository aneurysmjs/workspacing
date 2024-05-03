import { TEMPLATES, APPS } from '../../../paths.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 * @param {string} layoutName
 */
const resolveLayoutDestination = (componentApp, componentModule, layoutName) => {
  return `${APPS}/${componentApp}/src/modules/${componentModule}/layouts`;
};

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

/**
 * @param {Object} answers
 * @param {string} answers.componentApp
 * @param {string} answers.componentModule
 * @param {string} answers.layoutName
 */
export default function plopActions({ componentApp, componentModule, layoutName }) {
  /** @type {Array<AddActionConfig>} */
  let actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/layout`,
      templateFiles: `${TEMPLATES}/layout/**`,
      stripExtensions: ['plop'],
      destination: resolveLayoutDestination(componentApp, componentModule, layoutName),
      data: {
        layoutName,
      },
    },
  ];

  return actions;
}
