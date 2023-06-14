const data = require('../data/zoo_data');

const countEntrants = (entrants) => ({
  adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50)
    .length,
  child: entrants.filter((entrant) => entrant.age < 18).length,
  senior: entrants.filter((entrant) => entrant.age >= 50).length,
});

const calculateEntry = (entrants) => {
  if (!entrants) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  const result = adult * 49.99 + child * 20.99 + senior * 24.99;
  return result;
};

module.exports = { calculateEntry, countEntrants };
