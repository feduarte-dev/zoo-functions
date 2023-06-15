const data = require('../data/zoo_data');

const noOption = () => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) => map[location].push(animal.name)));
  return map;
};

const includeNamesFunction = () => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) =>
        map[location].push({
          [animal.name]: animal.residents.map(
            (animalNames) => animalNames.name,
          ),
        })));
  return map;
};

const sortNames = () => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) =>
        map[location].push({
          [animal.name]: animal.residents
            .map((animalNames) => animalNames.name)
            .sort(),
        })));
  return map;
};

const filterGender = (gender) => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) =>
        map[location].push({
          [animal.name]: animal.residents
            .filter((animalGender) => animalGender.sex === gender)
            .map((animalNames) => animalNames.name),
        })));
  return map;
};

const filteredAndSorted = (gender) => {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((location) =>
    data.species
      .filter((specie) => specie.location === location)
      .map((animal) =>
        map[location].push({
          [animal.name]: animal.residents
            .filter((animalGender) => animalGender.sex === gender)
            .map((animalNames) => animalNames.name).sort(),
        })));
  return map;
};

const sort = (options) => {
  if (options.sorted && !options.sex) {
    return sortNames();
  }
  if (options.sorted && options.sex) {
    return filteredAndSorted(options.sex);
  }
};

const noSort = (options) => {
  if (!options.sorted && !options.sex) { return includeNamesFunction(); }
  if (!options.sorted && options.sex) { return filterGender(options.sex); }
  return sort(options);
};

const getAnimalMap = (options) => {
  if (options === undefined || !options.includeNames) { return noOption(); }
  return noSort(options);
};

module.exports = getAnimalMap;
