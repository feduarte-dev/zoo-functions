const data = require("../data/zoo_data");

const getAnimalsOlderThan = (animal, age) => {
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age > age);
};

console.log(getAnimalsOlderThan("penguins", 10));

module.exports = getAnimalsOlderThan;
