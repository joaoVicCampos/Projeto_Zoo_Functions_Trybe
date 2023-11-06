const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalVerify = data.species.find((animalName) => animalName.name === animal)
  const ageVerify = animalVerify.residents.every((animalAge) => animalAge.age >= age)
   return ageVerify;  
  };
  
module.exports = getAnimalsOlderThan;
