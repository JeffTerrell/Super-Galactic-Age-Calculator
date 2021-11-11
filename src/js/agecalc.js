export default class GalacticAge {
  constructor(age) {
    this.userAge = age;
    this.mercury = (age/.24);
    this.venus = (age/.62);
  }
}  