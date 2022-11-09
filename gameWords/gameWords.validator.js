const Ajv = require('ajv');
const ajv = new Ajv();

const addWordValidation = () => {
  const addWordSchema = {
    type: 'object',
    properties: {
      word: {
        type: 'string',
        maxLength: 255,
      },
    },
    required: ['word'],
    additionalProperties: false,
  };
  const addWordValidator = ajv.compile(addWordSchema);
  return addWordValidator;
}

module.exports = {
  addWordValidator: addWordValidation(),
};
