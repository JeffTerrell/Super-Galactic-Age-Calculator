import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/agecalc.js';




$(document).ready(function() {
  $("#agelifeform").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    const lifeExpect = parseFloat($("#life-expect").val());
    const ageLife = new GalacticAge(age, lifeExpect);
    const lifeMercury = ageLife.mercuryLifeExpectancy();
    const lifeVenus = ageLife.venusLifeExpectancy();
    const lifeMars = ageLife.marsLifeExpectancy();
    const lifeJupiter = ageLife.jupiterLifeExpectancy();

    function errorMessage() {
      if (isNaN(age) && isNaN(lifeExpect)) {
        $("#planets").hide();
        $("#errorage").hide();
        $("#errorlife").hide();
        return $("#erroragelife").show();
      }
        else if (isNaN(age)) {
          $("#planets").hide();
          $("#erroragelife").hide();
          $("#errorlife").hide();
          return $("#errorage").show();
      }
        else if (isNaN(lifeExpect)) {
          $("#planets").hide();
          $("#erroragelife").hide();
          $("#errorage").hide();
          return $("#errorlife").show();
        }
    }
    function displayMercuryMessage() {
      if (errorMessage());
        else if (ageLife.mercury < ageLife.userLifeExpectancy/.24) {
          $("#erroragelife").hide();
          $("#errorage").hide();
          $("#errorlife").hide();
          $("#planets").show();
          $("#mercury1").show();
          $("#mercury2").hide();
          $("#mercury1-age").text(ageLife.mercury);
          $("#mercury1-life").text(lifeMercury);
        }  
        else {
          $("#erroragelife").hide();
          $("#errorage").hide();
          $("#errorlife").hide();
          $("#planets").show();
          $("#mercury2").show();
          $("#mercury1").hide();
          $("#mercury2-age").text(ageLife.mercury);
          $("#mercury2-life").text(lifeMercury);
        }
    }
    function displayVenusMessage() {
      if (errorMessage());
        else if (ageLife.venus < ageLife.userLifeExpectancy/.62) {
          $("#venus1").show();
          $("#venus2").hide();
          $("#venus1-age").text(ageLife.venus);
          $("#venus1-life").text(lifeVenus);
        }
        else {
          $("#venus2").show();
          $("#venus1").hide();
          $("#venus2-age").text(ageLife.venus);
          $("#venus2-life").text(lifeVenus);
        }
    }
    function displayMarsMessage() {
      if (errorMessage());
        else if (ageLife.mars < ageLife.userLifeExpectancy/1.88) {
          $("#mars1").show();
          $("#mars2").hide();
          $("#mars1-age").text(ageLife.mars);
          $("#mars1-life").text(lifeMars);
        }
        else {
          $("#mars2").show();
          $("#mars1").hide();
          $("#mars2-age").text(ageLife.mars);
          $("#mars2-life").text(lifeMars);
        }
    }
    function displayJupiterMessage() {
      if (errorMessage());
        else if (ageLife.jupiter < ageLife.userLifeExpectancy/11.86) {
          $("#jupiter1").show();
          $("#jupiter2").hide();
          $("#jupiter1-age").text(ageLife.jupiter);
          $("#jupiter1-life").text(lifeJupiter);
        }
        else {
          $("#jupiter2").show();
          $("#jupiter1").hide();
          $("#jupiter2-age").text(ageLife.jupiter);
          $("#jupiter2-life").text(lifeJupiter);
        }
    }

    displayMercuryMessage();
    displayVenusMessage();
    displayMarsMessage();
    displayJupiterMessage();
  });
});