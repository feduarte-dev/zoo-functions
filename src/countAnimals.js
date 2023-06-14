const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const obj = {};
  if (!animal) {
    data.species.forEach((specie) =>
      Object.assign(obj, { [specie.name]: specie.residents.length }));
    return obj;
  } if (!animal.sex) {
    return data.species.filter((specie) => specie.name === animal.species)[0]
      .residents.length;
  }
  return data.species
    .filter((specie) => specie.name === animal.species)[0]
    .residents.filter((resident) => resident.sex === animal.sex).length;
};
console.log(countAnimals());
module.exports = countAnimals;
