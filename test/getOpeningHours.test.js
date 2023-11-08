const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('sem argumento na função', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('para o dia Monday e 10:00-AM', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
  });
  it('para o dia Tuesday e 10:00-AM', () => {
    expect(getOpeningHours('Tuesday', '10:00-AM')).toBe('The zoo is open');
  });
  it('para o dia Tuesday e 10:00-JM', () => {
    expect(() => getOpeningHours('Tuesday', '10:00-JM')).toThrow(
      'The abbreviation must be "AM" or "PM"',
    );
  });
  it('para o dia Fridai e 10:00-AM', () => {
    expect(() => getOpeningHours('Fridai', '10:00-AM')).toThrow(
      'The day must be valid. Example: Monday',
    );
  });
  it('para o dia Wednesday e I0:00-AM', () => {
    expect(() => getOpeningHours('Wednesday', 'I0:00-AM')).toThrow(
      'The hour should represent a number',
    );
  });
  it('para o dia Sunday e 10:I0-AM', () => {
    expect(() => getOpeningHours('Sunday', '10:I0-AM')).toThrow(
      'The minutes should represent a number',
    );
  });
  it('para o dia Friday e 14:00-PM', () => {
    expect(() => getOpeningHours('Friday', '14:00-PM')).toThrow(
      'The hour must be between 0 and 12',
    );
  });
  it('para o dia Friday e 11:63-AM', () => {
    expect(() => getOpeningHours('Friday', '11:63-AM')).toThrow(
      'The minutes must be between 0 and 59',
    );
  });
});
