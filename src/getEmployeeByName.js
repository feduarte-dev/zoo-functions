const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  (employeeName
    ? data.employees.find(
      (employee) =>
        employee.firstName === employeeName
        || employee.lastName === employeeName,
    )
    : {});

console.log(getEmployeeByName('Wishart'));

module.exports = getEmployeeByName;
