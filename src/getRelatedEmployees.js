const data = require('../data/zoo_data');

const isManager = (id) => {
  const verifyManager = data.employees.some((manager) => manager.managers.includes(id));
  return verifyManager;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;

  const verifyManagerEmployee = ((person) => person.managers.includes(managerId));
  const returnedFullName = ((person) => `${person.firstName} ${person.lastName}`);
  const returnedEmployees = employees
    .filter(verifyManagerEmployee)
    .map(returnedFullName);
  return returnedEmployees;
};

module.exports = { isManager, getRelatedEmployees };
