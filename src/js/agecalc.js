export default class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.userAge = age;
    this.userLifeExpectancy = lifeExpectancy
    this.mercury = Number(parseFloat(age/.24).toFixed(2));
    this.venus = Number(parseFloat(age/.62).toFixed(2));
    this.mars = Number(parseFloat(age/1.88).toFixed(2));
    this.jupiter = Number(parseFloat(age/11.86).toFixed(2));
  }

  mercuryLifeExpectancy() {
    const mercuryExpect = Number((parseFloat(this.userLifeExpectancy/.24) - this.mercury).toFixed(2));
    return mercuryExpect;
  }

  venusLifeExpectancy() {
    const venusExpect = Number((parseFloat(this.userLifeExpectancy/.62) - this.venus).toFixed(2));
    return venusExpect;
  }

  marsLifeExpectancy() {
    const marsExpect = Number((parseFloat(this.userLifeExpectancy/1.88) - this.mars).toFixed(2));
    return marsExpect;
  }

  jupiterLifeExpectancy() {
    const jupiterExpect = Number((parseFloat(this.userLifeExpectancy/11.86) - this.jupiter).toFixed(2));
    return jupiterExpect;
  }
}  