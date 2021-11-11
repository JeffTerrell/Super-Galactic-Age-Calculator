import { exportAllDeclaration } from '@babel/types';
import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {

  test('should correctly create an object from user inputted age', () => {
    const age = new GalacticAge(20);
    expect(age.userAge).toEqual(20);
  })

  test('should correctly calculate user inputted age on Mercury', () => {
    const age = new GalacticAge(30);
    expect(age.mercury).toEqual(125);
  })

  test('should correctly calculate user inputted age on Venus', () => {
    const age = new GalacticAge(30);
    expect(age.venus).toEqual(48.39);
  })

  test('should correctly calculate user inputted age on Mars', () => {
    const age = new GalacticAge(30);
    expect(age.mars).toEqual(15.96);
  })

  test('should correctly calculate user inputted age on Jupiter', () => {
    const age = new GalacticAge(30);
    expect(age.jupiter).toEqual(2.53);
  })

  test('should correctly create an object from user inputted age and life expectancy', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.userLifeExpectancy).toEqual(75.5);
  })

  test('should correctly calculate life expectancy on Mercury based on relative age', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.mercuryLifeExpectancy()).toEqual(189.58);
  })

  test('should correctly calculate life expectancy on Venus based on relative age', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.venusLifeExpectancy()).toEqual(73.38);
  })

  test('should correctly calculate life expectancy on Mars based on relative age', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.marsLifeExpectancy()).toEqual(24.20);
  })

  test('should correctly calculate life expectancy on Jupiter based on relative age', () => {
    const ageLife = new GalacticAge(30, 75.5);
    expect(ageLife.jupiterLifeExpectancy()).toEqual(3.84);
  })

  test('should correctly return a positive number if current age is greater than life expectancy', () => {
    const passLifeExpect = new GalacticAge(85, 75.5);
    expect(passLifeExpect.mercuryLifeExpectancy()).toEqual(39.59)
  })
});    