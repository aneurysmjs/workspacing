import fs from 'node:fs';
import path from 'node:path';

import { APPS } from '../paths.js';

/**
 * @typedef {'functional' | 'class'} Role
 * @typedef {'ts' | 'tsx' | 'test.tsx' | 'less'} Ext format/extension of the file.
 * @typedef {'component' | 'module'} ComponentType Component's type.
 */

/**
 * @typedef {object} ComponentPaths
 * @property {string} path Path where component will be.
 * @property {string} templatePath Path template's location.
 */

/**
 * @typedef {object} Answers
 * @property {ComponentType} componentType
 */

/**
 *
 * @param {string} dir
 * @returns {string}
 */
export const resolveDirs = (dir) => {
  return fs.readdirSync(dir).filter((name) => fs.lstatSync(path.join(dir, name)).isDirectory());
};

/**
 *
 * @param {string} componentApp
 * @returns {string}
 */
export const resolveAppModules = (componentApp) => {
  const appModulesPath = `${APPS}/${componentApp}/src/modules`;

  return resolveDirs(appModulesPath);
};

/**
 * @param {string[]} choices
 */
export const makeChoices = (choices) => {
  return choices.map((choice) => ({
    name: choice,
    value: choice,
  }));
};

/**
 * @param {string} word
 */
export const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
