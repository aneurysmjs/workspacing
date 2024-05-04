export default [
  {
    type: 'prompt',
    name: 'generatorName',
    message: 'Generator name:',
    async validate(input) {
      if (input === '') {
        throw new Error("Generator name can't be empty");
      }

      return true;
    },
  },
  {
    type: 'prompt',
    name: 'templateName',
    message: 'Template name:',
    async validate(input) {
      if (input === '') {
        throw new Error("Template name can't be empty");
      }

      return true;
    },
  },
];
