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

    displayMercuryMessage();
    displayVenusMessage();
    displayMarsMessage();
    displayJupiterMessage();
  
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
      if (this.mercury < this.userLifeExpectancy/.24) {
        return $("#mercury1").text("<p>Your age on Mercury is: " + this.mercury + ". You are expected to live another " + ageLifeMercury + " years on Mercury. <p>");
      }  
      else {
        return $("#mercury2").text("<p>Your age on Mercury is: " + this.mercury + ". Congrats! You have lived " + ageLifeMercury + " years past average life expectancy on Mercury. </p>");
      }
    }

    function displayVenusMessage () {
      if (this.venus < this.userLifeExpectancy/.62) {
        return $("#venus1").text("<p>Your age on Venus is: " + this.venus + ". You are expected to live another " + ageLifeVenus + " years on Venus. <p>");
      }  
      else {
        return $("#venus2").text("<p>Your age on Venus is: " + this.venus + ". Congrats! You have lived " + ageLifeVenus + " years past average life expectancy on Venus. </p>");
      }
    }

    function displayMarsMessage () {
      if (this.mars < this.userLifeExpectancy/1.88) {
        return $("#mars1").text("<p>Your age on Mars is: " + this.mars + ". You are expected to live another " + ageLifeMars + " years on Mars. <p>");
      }  
      else {
        return $("#mars2").text("<p>Your age on Mars is: " + this.mars + ". Congrats! You have lived " + ageLifeMars + " years past average life expectancy on Mars. </p>");
      }
    }

    function displayJupiterMessage () {
      if (this.jupiter < this.userLifeExpectancy/11.86) {
        return $("#jupiter1").text("<p>Your age on Jupiter is: " + this.jupiter + ". You are expected to live another " + ageLifeJupiter + " years on Jupiter <p>");
      }  
      else {
        return $("#jupiter2").text("<p>Your age on Jupiter is: " + this.jupiter + ". Congrats! You have lived " + ageLifeJupiter + " years past average life expectancy on Jupiter </p>");
      }
    }
  });
})