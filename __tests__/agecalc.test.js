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
});    