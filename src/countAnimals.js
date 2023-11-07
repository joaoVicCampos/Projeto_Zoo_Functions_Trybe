const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species } = data;

  if (!animal) {
    const animalCounter = {};
    species.forEach((specie) => {
      animalCounter[specie.name] = specie.residents.length;
    });
    return animalCounter;
  }

  const speciesName = animal.species;
  const animalsCounted = species.find((specie) => specie.name === speciesName);

  if (animal.sex) {
    const sexCounted = animalsCounted.residents
      .filter((resident) => resident.sex === animal.sex).length;
    return sexCounted;
  }

  return animalsCounted.residents.length;
};

console.log(countAnimals({ species: 'lions' }));

module.exports = countAnimals;
