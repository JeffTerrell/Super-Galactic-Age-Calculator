import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAge from './js/agecalc.js';




$(document).ready(function() {
  $("#agelifeform").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age").val());
    console.log(age);
    const lifeExpect = parseFloat($("#life-expect").val());
    console.log(lifeExpect);
    const ageLife = new GalacticAge(age, lifeExpect);
    console.log(ageLife.mercury);
    const ageLifeMercury = ageLife.mercuryLifeExpectancy();
    const ageLifeVenus = ageLife.venusLifeExpectancy();
    const ageLifeMars = ageLife.marsLifeExpectancy();
    const ageLifeJupiter = ageLife.jupiterLifeExpectancy();

  
  //   *** WORK IN PROGRESS ***  
  //   function displayMessage () {
  //     $("#mercuryage").html(this.mercury) // use as span on index.html
  //     $("#mercurylife").html(ageLifeMercury) // use as span on index.html
  //     if (this.mercury < this.userLifeExpectancy/.24) {
  //      $("#mercury1").show();
  //     }
  //      else {
  //      $("#mercury2").show();
  //   }
  // }

    function displayMercuryMessage () {
      if (ageLife.mercury < ageLife.userLifeExpectancy/.24) {
        $("#mercury1").show();
        $("#mercury2").hide();
        return $("#mercury1-1").text("Your age on Mercury is: " + ageLife.mercury + ". You are expected to live another " + ageLifeMercury + " years on Mercury.");
      }  
      else {
        $("#mercury2").show();
        $("#mercury1").hide();
        return $("#mercury2-2").text("Your age on Mercury is: " + ageLife.mercury + ". Congrats! You have lived " + ageLifeMercury + " years past average life expectancy on Mercury.");
      }
    }

    function displayVenusMessage () {
      if (ageLife.venus < ageLife.userLifeExpectancy/.62) {
        return $("#venus1").text("<p>Your age on Venus is: " + ageLife.venus + ". You are expected to live another " + ageLifeVenus + " years on Venus. <p>");
      }  
      else {
        return $("#venus2").text("<p>Your age on Venus is: " + ageLife.venus + ". Congrats! You have lived " + ageLifeVenus + " years past average life expectancy on Venus. </p>");
      }
    }

    function displayMarsMessage () {
      if (ageLife.mars < ageLife.userLifeExpectancy/1.88) {
        return $("#mars1").text("<p>Your age on Mars is: " + ageLife.mars + ". You are expected to live another " + ageLifeMars + " years on Mars. <p>");
      }  
      else {
        return $("#mars2").text("<p>Your age on Mars is: " + ageLife.mars + ". Congrats! You have lived " + ageLifeMars + " years past average life expectancy on Mars. </p>");
      }
    }

    function displayJupiterMessage () {
      if (ageLife.jupiter < ageLife.userLifeExpectancy/11.86) {
        return $("#jupiter1").text("<p>Your age on Jupiter is: " + ageLife.jupiter + ". You are expected to live another " + ageLifeJupiter + " years on Jupiter <p>");
      }  
      else {
        return $("#jupiter2").text("<p>Your age on Jupiter is: " + ageLife.jupiter + ". Congrats! You have lived " + ageLifeJupiter + " years past average life expectancy on Jupiter </p>");
      }
    }
    displayMercuryMessage();
    displayVenusMessage();
    displayMarsMessage();
    displayJupiterMessage();
  });
});