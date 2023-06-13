const data = require('../data/zoo_data');

const isManager = (id) =>
  data.employees.some((employee) => employee.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return data.employees
      .filter((employee) => employee.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
