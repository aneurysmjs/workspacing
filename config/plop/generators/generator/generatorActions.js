import { GENERATORS, TEMPLATES } from '../../../paths.js';

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

const templateWithHelper = "{{appendHelper 'camelCase' (camelCase templateName) 'Name'}}";

/**
 * @param {Object} answers
 * @param {string} answers.generatorName
 * @param {string} answers.templateName
 */
export default function plopActions({ generatorName, templateName }) {
  /** @type {Array<AddActionConfig>} */
  let actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/generator`,
      templateFiles: `${TEMPLATES}/generator/**`,
      stripExtensions: ['plop'],
      destination: `${GENERATORS}/${generatorName}`,
      data: {
        generatorName,
        templateName,
      },
    },
    {
      type: 'add',
      path: `${TEMPLATES}/${templateName}/${templateWithHelper}.plop`,
      template: templateWithHelper,
      data: {
        templateName,
      },
    },
  ];

  return actions;
}
