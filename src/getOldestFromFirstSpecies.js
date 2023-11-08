const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const responsibleEmployee = data.employees.find((employee) => employee.id === id);

  if (!responsibleEmployee || !responsibleEmployee.responsibleFor.length) {
    return null;
  }

  const [firstSpeciesId] = responsibleEmployee.responsibleFor;
  const firstSpecies = data.species.find((specie) => specie.id === firstSpeciesId);

  if (!firstSpecies || firstSpecies.residents.length === 0) {
    return null;
  }

  const oldestAnimal = firstSpecies.residents.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
