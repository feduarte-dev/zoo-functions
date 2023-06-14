const data = require('../data/zoo_data');

const findEmployee = (id) =>
  data.employees.find((employee) => employee.id === id).responsibleFor[0];

const getOldestFromFirstSpecies = (id) =>
  Object.values(
    data.species
      .find((specie) => specie.id === findEmployee(id))
      .residents.reduce((bigger, number) =>
        (bigger.age > number.age ? bigger : number)),
  );

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
