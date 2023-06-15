// const data = require('../data/zoo_data');

// const map = { NE: [], NW: [], SE: [], SW: [] };

// const noOption = () => {
//   Object.keys(map).forEach((location) =>
//     data.species
//       .filter((specie) => specie.location === location)
//       .map((animal) => map[location].push(animal.name)));
//   return map;
// };

// const includeNamesFunction = () => {
//   Object.keys(map).forEach((location) =>
//     data.species
//       .filter((specie) => specie.location === location)
//       .map((animal) =>
//         map[location].push({
//           [animal.name]: animal.residents.map(
//             (animalNames) => animalNames.name,
//           ),
//         })));
//   return map;
// };

// const sortNames = () => {
//   Object.keys(map).forEach((location) =>
//     data.species
//       .filter((specie) => specie.location === location)
//       .map((animal) =>
//         map[location].push({
//           [animal.name]: animal.residents
//             .map((animalNames) => animalNames.name)
//             .sort(),
//         })));
//   return map;
// };

// const filterGender = (gender) => {
//   Object.keys(map).forEach((location) =>
//     data.species
//       .filter((specie) => specie.location === location)
//       .map((animal) =>
//         map[location].push({
//           [animal.name]: animal.residents
//             .filter((animalGender) => animalGender.sex === gender)
//             .map((animalNames) => animalNames.name),
//         })));
//   return map;
// };

// const filteredAndSorted = (gender) => {
//   Object.keys(map).forEach((location) =>
//     data.species
//       .filter((specie) => specie.location === location)
//       .map((animal) =>
//         map[location].push({
//           [animal.name]: animal.residents
//             .filter((animalGender) => animalGender.sex === gender)
//             .map((animalNames) => animalNames.name).sort(),
//         })));
//   return map;
// };

// const getAnimalMap = (options) => {
//   if (!options) {
//     return noOption();
//   }
//   if (!options.includeNames && options.sex && options.sorted) {
//     return noOption();
//   }
//   if (!options.includeNames && options.sex) {
//     return noOption();
//   }
//   if (options.includeNames && !options.sorted && !options.sex) {
//     return includeNamesFunction();
//   }
//   if (options.includeNames && options.sorted && !options.sex) {
//     return sortNames();
//   }
//   if (options.includeNames && options.sex && !options.sorted) {
//     return filterGender(options.sex);
//   }
//   if (options.includeNames && options.sorted && options.sex) {
//     return filteredAndSorted(options.sex);
//   }
// };
// // console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }).NE);
// module.exports = getAnimalMap;
