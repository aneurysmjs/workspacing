import helpers from './helpers.js';
import componentGenerator from './generators/component/componentGenerator.js';
import moduleGenerator from './generators/module/moduleGenerator.js';
import routeGenerator from './generators/route/routeGenerator.js';
import layoutGenerator from './generators/layout/layoutGenerator.js';

// console.log('helpers', helpers);

/**
 * @typedef {import('plop').NodePlopAPI} NodePlopAPI
 */

/**
 *
 * @param {NodePlopAPI} plop
 */
export default function plopFn(plop) {
  // Here we register each helper function for Plop.
  Object.keys(helpers).forEach((key) => {
    plop.setHelper(key, helpers[key]);
  });

  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('module', moduleGenerator);
  plop.setGenerator('route', routeGenerator);
  plop.setGenerator('layout', layoutGenerator);
}
