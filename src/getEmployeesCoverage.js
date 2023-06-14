const data = require('../data/zoo_data');

const getEmployee = (id) =>
  data.employees.find(
    (employee) =>
      employee.id === id.id
      || employee.firstName === id.name
      || employee.lastName === id.name,
  );

const findSpeciesId = (getEmployeeF) => getEmployeeF.responsibleFor.map(
  (animalId) => data.species.find((specie) => specie.id === animalId).name,
);

const findLocationsId = (getEmployeeF) => getEmployeeF.responsibleFor.map(
  (animalId) => data.species.find((specie) => specie.id === animalId).location,
);

const getEmployeesCoverage = (id) => {
  if (!id) { return data.employees.map((employee) => getEmployeesCoverage({ id: employee.id })); }
  if (
    !data.employees.some(
      (trabalhador) =>
        trabalhador.id === id.id
        || trabalhador.firstName === id.name
        || trabalhador.lastName === id.name,
    )
  ) {
    throw new Error('Informações inválidas');
  } else {
    return {
      id: getEmployee(id).id,
      fullName: `${getEmployee(id).firstName} ${getEmployee(id).lastName}`,
      species: findSpeciesId(getEmployee(id)),
      locations: findLocationsId(getEmployee(id)),
    };
  }
};

module.exports = getEmployeesCoverage;
