import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {

  test('should correctly create an object from user age', () => {
    const planet = new GalacticAge(20)
    expect(planet.userAge).toEqual(20);
  })
});    