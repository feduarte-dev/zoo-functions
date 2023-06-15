const data = require('../data/zoo_data');

const map = { NE: [], NW: [], SE: [], SW: [] };

const noOption = () => {
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) => map[location].push(animal.name)));
  return map;
};

const getAnimalMap = (options) => {
  if (
    !options
    || options.includeNames === false
    || options.sorted === false
    || options.sex
  ) {
    return noOption();
  }
};

console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
