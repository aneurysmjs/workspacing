import { resolveAppModules, resolveDirs, makeChoices } from '../../plopUtils.js';
import { APPS } from '../../../paths.js';

const apps = resolveDirs(APPS);

export default [
  {
    type: 'prompt',
    name: 'pageName',
    message: 'Page name:',
    async validate(input) {
      if (input === '') {
        throw new Error("Page name can't be empty");
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
  {
    type: 'list',
    name: 'componentModule',
    message: 'Specify the module: ',
    choices(answers) {
      const modulesPath = resolveAppModules(answers.componentApp);

      return makeChoices(modulesPath);
    },
  },
];
