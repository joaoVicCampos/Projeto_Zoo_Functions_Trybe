const data = require('../data/zoo_data');

const animals = data.species.map((animal) => animal.name);
const weekDays = Object.keys(data.hours);
const searchAnimals = (workDays) => {
  const animalsFound = data.species.filter((specie) => specie.availability.includes(workDays));
  return animalsFound.map((animal) => animal.name);
};
const createScheduleEntry = (days) => {
  if (days === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  const daySchedule = data.hours[days];
  const exhibition = searchAnimals(days);
  const officeHour = `Open from ${daySchedule.open}am until ${daySchedule.close}pm`;
  return { officeHour, exhibition };
};
const generalSchedule = () => {
  const scheduleDefault = {};
  weekDays.forEach((days) => {
    scheduleDefault[days] = createScheduleEntry(days);
  });
  return scheduleDefault;
};
const getSchedule = (scheduleTarget) => {
  if (typeof scheduleTarget === 'undefined') {
    return generalSchedule();
  }
  if (animals.includes(scheduleTarget)) {
    const scheduleByAnimal = data.species.find((specie) => specie.name === scheduleTarget);
    return scheduleByAnimal.availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    const allSchedule = generalSchedule();
    return { [scheduleTarget]: allSchedule[scheduleTarget] };
  }
  return generalSchedule();
};
module.exports = getSchedule;
