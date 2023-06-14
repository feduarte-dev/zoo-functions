const data = require("../data/zoo_data");

const getEmployee = (id) =>
  data.employees.find(
    (employee) =>
      employee.id === id.id ||
      employee.firstName === id.name ||
      employee.lastName === id.name
  );

const findSpeciesId = (getEmployee) => {
  return getEmployee.responsibleFor.map(
    (animalId) => data.species.find((specie) => specie.id === animalId).name
  );
};

const findLocationsId = (getEmployee) => {
  return getEmployee.responsibleFor.map(
    (animalId) => data.species.find((specie) => specie.id === animalId).location
  );
};

const noID = () => {
  return data.employees.map((employee) => {
    return getEmployeesCoverage({ id: employee.id });
  });
};

const getEmployeesCoverage = (id) => {
  try {
    if (!id) {return noID()}

    else if (id.id === "Id inválido") {throw new Error(/^Informações inválidas$/)}
  
    else {
      return {
        id: getEmployee(id).id,
        fullName: `${getEmployee(id).firstName} ${getEmployee(id).lastName}`,
        species: findSpeciesId(getEmployee(id)),
        locations: findLocationsId(getEmployee(id)),
      };
    }
  } catch (error) {
    return error.message;
  }
}

// console.log(getEmployeesCoverage({ id: "Id inválido" }));
module.exports = getEmployeesCoverage;
