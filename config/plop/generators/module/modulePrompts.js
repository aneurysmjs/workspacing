import { resolveDirs, makeChoices } from '../../plopUtils.js';
import { APPS } from '../../../paths.js';

const apps = resolveDirs(APPS);

export default [
  {
    type: 'prompt',
    name: 'moduleName',
    message: 'Module name:',
    async validate(input) {
      if (input === '') {
        throw new Error("Module name can't be empty");
      }

      return true;
    },
  },
  {
    type: 'list',
    name: 'componentApp',
    message: 'Specify the app: ',
    choices: makeChoices(apps),
  },
];
