import { TEMPLATES, APPS } from '../../../paths.js';

/**
 * @param {string} componentApp
 * @param {string} componentModule
 */
const resolveRouteDestination = (componentApp, componentModule) => {
  return `${APPS}/${componentApp}/src/modules/${componentModule}/routes`;
};

/**
 * @param {string} componentApp
 * @param {string} componentModule
 * @param {string} routeName
 */
const resolvePageDestination = (componentApp, componentModule, routeName) => {
  return `${APPS}/${componentApp}/src/modules/${componentModule}/pages`;
};

/**
 * @typedef {import('plop').AddActionConfig} AddActionConfig
 */

/**
 * @param {Object} answers
 * @param {string} answers.componentApp
 * @param {string} answers.componentModule
 * @param {string} answers.routeName
 */
export default function routeActions({ componentApp, componentModule, routeName }) {
  /** @type {Array<AddActionConfig>} */
  const actions = [
    {
      type: 'addMany',
      base: `${TEMPLATES}/route`,
      templateFiles: `${TEMPLATES}/route/**`,
      destination: resolveRouteDestination(componentApp, componentModule),
      stripExtensions: ['plop'],
      data: {
        componentModule,
        routeName,
      },
    },
    {
      type: 'addMany',
      base: `${TEMPLATES}/module/pages`,
      templateFiles: `${TEMPLATES}/module/pages/**`,
      stripExtensions: ['plop'],
      destination: resolvePageDestination(componentApp, componentModule, routeName),
      data: {
        moduleName: routeName,
      },
    },
  ];

  return actions;
}
