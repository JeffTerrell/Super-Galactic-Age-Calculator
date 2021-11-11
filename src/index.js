import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/triangle.js;'




$(document).ready(function() {
  $("#agelifeform").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const lifeExpect = parseInt($("#life-expect").val());
    const ageLife = new GalacticAge(age, lifeExpect);
    const ageLifeMercury = ageLife.mercuryLifeExpectancy();
    const ageLifeVenus = ageLife.venusLifeExpectancy();
    const ageLifeMars = ageLife.marsLifeExpectancy();
    const ageLifeJupiter = ageLife.jupiterLifeExpectancy();
    
    function displayLifeExpectMessage () {
      if (this.mercury < this.userLifeExpectancy/.24) {
        return $("#mercury1").text("<p> You are expected to live another " + mercuryExpectPositive + " years on Mercury <p>");
      }  
      else {
        return $(mercuryExpectPositive;
      }
    }
});
})