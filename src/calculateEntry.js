const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counted = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      counted.child += 1;
    } else if (entrant.age < 50) {
      counted.adult += 1;
    } else {
      counted.senior += 1;
    }
  });
  return counted;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const { child, adult, senior } = data.prices;
  const numberEntrants = Object.values(countEntrants(entrants));
  let sumEntrants = 0;
  sumEntrants += numberEntrants[0] * child;
  sumEntrants += numberEntrants[1] * adult;
  sumEntrants += numberEntrants[2] * senior;
  return sumEntrants;
};

module.exports = { calculateEntry, countEntrants };
