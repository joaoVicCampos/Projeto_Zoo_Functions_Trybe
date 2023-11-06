const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const speciesIdReturned = data.species.filter((id) =>
    ids.includes(id.id));
  return speciesIdReturned;
};

module.exports = getSpeciesByIds;
