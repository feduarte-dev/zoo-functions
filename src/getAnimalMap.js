const data = require('../data/zoo_data');

const noOption = () =>
  ({
    NE: data.species
      .filter((specie) => specie.location === 'NE')
      .map((animal) => animal.name),
    NW: data.species
      .filter((specie) => specie.location === 'NW')
      .map((animal) => animal.name),
    SE: data.species
      .filter((specie) => specie.location === 'SE')
      .map((animal) => animal.name),
    SW: data.species
      .filter((specie) => specie.location === 'SW')
      .map((animal) => animal.name),
  });

const getAnimalMap = (options) => {
  if (!options || options.includeNames === false || options.sorted === false || options.sex) {
    return noOption();
  }
};
console.log(getAnimalMap({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
