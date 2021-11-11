import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {

  let age;
  beforeEach(() => {
    age = new GalacticAge(30);
  });

  let ageLife;
  beforeEach(() => {
    ageLife = new GalacticAge(30, 75.5);
  });


  test('should correctly create an object from user inputted age', () => {
    expect(age.userAge).toEqual(30);
  });

  test('should correctly calculate user inputted age on Mercury', () => {
    expect(age.mercury).toEqual(125);
  });

  test('should correctly calculate user inputted age on Venus', () => {
    expect(age.venus).toEqual(48.39);
  });

  test('should correctly calculate user inputted age on Mars', () => {
    expect(age.mars).toEqual(15.96);
  });

  test('should correctly calculate user inputted age on Jupiter', () => {
    expect(age.jupiter).toEqual(2.53);
  });

  test('should correctly create an object from user inputted age and life expectancy', () => {
    expect(ageLife.userLifeExpectancy).toEqual(75.5);
  });

  test('should correctly calculate life expectancy on Mercury based on relative age', () => {
    expect(ageLife.mercuryLifeExpectancy()).toEqual(189.58);
  });

  test('should correctly calculate life expectancy on Venus based on relative age', () => {
    expect(ageLife.venusLifeExpectancy()).toEqual(73.38);
  });

  test('should correctly calculate life expectancy on Mars based on relative age', () => {
    expect(ageLife.marsLifeExpectancy()).toEqual(24.20);
  });

  test('should correctly calculate life expectancy on Jupiter based on relative age', () => {
    expect(ageLife.jupiterLifeExpectancy()).toEqual(3.84);
  });

  test('should correctly return a positive number if current age is greater than life expectancy', () => {
    const pastLifeExpect = new GalacticAge(85, 75.5);
    expect(pastLifeExpect.mercuryLifeExpectancy()).toEqual(39.59)
  });
});    