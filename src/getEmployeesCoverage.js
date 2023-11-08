const data = require('../data/zoo_data');

const { species, employees } = data;
function getSpeciesResponsibleFor(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId,
  );
  if (!foundEmployee) return [];

  const speciesIds = foundEmployee.responsibleFor;
  const speciesNames = speciesIds
    .map((id) => {
      const speciesInfo = species.find((s) => s.id === id);
      return speciesInfo ? speciesInfo.name : null;
    })
    .filter(Boolean);

  return speciesNames;
}

function getAreas(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId,
  );
  if (!foundEmployee) return [];

  const speciesIds = foundEmployee.responsibleFor;
  const areas = speciesIds
    .map((id) => {
      const speciesInfo = species.find((s) => s.id === id);
      return speciesInfo ? speciesInfo.location : null;
    })
    .filter(Boolean);

  return areas;
}

function createEmployeeObject(employee) {
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const employeeSpecies = getSpeciesResponsibleFor(employee.id);
  const employeeLocations = getAreas(employee.id);

  return {
    id: employee.id,
    fullName,
    species: employeeSpecies,
    locations: employeeLocations,
  };
}
function generateAllEmployeesCoverage() {
  return employees.map(createEmployeeObject);
}

function validateParameter(parameter) {
  const isMatchingById = (employee) => employee.id === parameter.id;
  const isMatchingByName = (employee) =>
    employee.firstName === parameter.name || employee.lastName === parameter.name;

  if (parameter.id && employees.some(isMatchingById)) {
    return 'byId';
  }

  if (parameter.name && employees.some(isMatchingByName)) {
    return 'byName';
  }

  return false;
}
function getEmployeesCoverage(parameter) {
  if (!parameter) {
    return generateAllEmployeesCoverage();
  }
  const parameterType = validateParameter(parameter);
  if (!parameterType) {
    throw new Error('Informações inválidas');
  }
  if (parameterType === 'byId') {
    return createEmployeeObject(employees.find((e) => e.id === parameter.id));
  } if (parameterType === 'byName') {
    const employeeByName = employees.find((e) => e.firstName === parameter.name
    || e.lastName === parameter.name);
    return createEmployeeObject(employeeByName);
  }
}
module.exports = getEmployeesCoverage;
