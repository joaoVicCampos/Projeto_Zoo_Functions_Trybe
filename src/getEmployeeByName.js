const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  const verifyName = data.employees.find(
    (employee) => employee.firstName === employeeName,
  );
  const verifyLastName = data.employees.find(
    (employee) => employee.lastName === employeeName,
  );
  if (verifyName) {
    return verifyName;
  }
  return verifyLastName;
};
console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
