import { exportAllDeclaration } from '@babel/types';
import GalacticAge from './../src/js/agecalc.js';

describe('GalacticAge', () => {

  test('should correctly create an object from user age', () => {
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
    expect(age.mars).toEqual(15.96)
  })

  test('should correctly calculate user inpuuted age on Jupiter', () => {
    const age = new GalacticAge(30);
    expect(age.jupiter).toEqual(2.53);
  })
});    