const data = require('../data/zoo_data');

const findEmployeeById = (id) => data.employees.find((employee) => employee.id === id);
const findFirstSpeciesForEmployee = (employee) => employee.responsibleFor[0];
const findOldestAnimalForEmployee = (employee) => {
  const speciesId = findFirstSpeciesForEmployee(employee);
  const species = data.species.find((animal) => animal.id === speciesId);
  const sortedResidents = species.residents.sort((a, b) => b.age - a.age);
  const residentResult = sortedResidents[0];
  return [residentResult.name, residentResult.sex, residentResult.age];
};
const getOldestFromFirstSpecies = (id) => {
  const employee = findEmployeeById(id);
  if (!employee) {
    return 'Funcionário não encontrado.';
  }
  return findOldestAnimalForEmployee(employee);
};
module.exports = getOldestFromFirstSpecies;
