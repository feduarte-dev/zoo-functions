const data = require('../data/zoo_data');

const schedule = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Tuesday'))
      .map((animal) => animal.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Wednesday'))
      .map((animal) => animal.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Thursday'))
      .map((animal) => animal.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Friday'))
      .map((animal) => animal.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Saturday'))
      .map((animal) => animal.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes('Sunday'))
      .map((animal) => animal.name),
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const animalSchedule = (animal) =>
  data.species.filter((specie) => specie.name === animal)[0].availability;

const weekSchedule = (day) => {
  const obj = {
    [day]: schedule[day],
  };
  return obj;
};

const getSchedule = (scheduleTarget) => {
  if (data.species.find((specie) => specie.name === scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  } if (Object.keys(data.hours).includes(scheduleTarget)) {
    return weekSchedule(scheduleTarget);
  }
  return schedule;
};

console.log(getSchedule());
module.exports = getSchedule;
