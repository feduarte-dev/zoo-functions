const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.map((id) => data.species.filter((specie) => specie.id === id)).flat();

module.exports = getSpeciesByIds;
