const yup = require("yup");

module.exports = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
});
