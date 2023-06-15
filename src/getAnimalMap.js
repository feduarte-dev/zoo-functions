const data = require('../data/zoo_data');

const map = { NE: [], NW: [], SE: [], SW: [] };

const noOption = () => {
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) => map[location].push(animal.name)));
  return map;
};

const includeNamesFunction = () => {
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) => map[location].push({
        [animal.name]: animal.residents.map(
          (animalNames) => animalNames.name,
        ),
      }))); return map;
};

const getAnimalMap = (options) => {
  if (!options) {
    return noOption();
  }
  if (options.includeNames === true) {
    return includeNamesFunction();
  }
};
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
