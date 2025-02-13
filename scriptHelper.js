// Write your helper functions here!
  // require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */

        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `<h2>Mission Destination</h2>
        <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
 }
 
 function validateInput(testInput) {
    if (testInput === ""){
      return "Empty" ;
    }
    else if(isNaN(testInput)){
        return "Not a Number";
    }
    else{
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
     
    let pilotStatusItem = document.getElementById('pilotStatus');
    let copilotStatusItem = document.getElementById('copilotStatus');
    let fuelStatusItem = document.getElementById('fuelStatus');
    let cargoStatusItem = document.getElementById('cargoStatus');
    let launchStatusItem = document.getElementById('launchStatus');
    let faultyItems = list;
  
    let readyToLaunch = true;

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
            readyToLaunch = false;
          alert("All fields are  required!");
     } 
     if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        readyToLaunch = false;
        alert("Make sure to enter valid information for each field!");
      } 
    else{
       pilotStatusItem.innerHTML = `Pilot ${pilot} is ready for launch`;
       copilotStatusItem.innerHTML = `Co-pilot ${copilot} is ready for launch`;
          if(fuelLevel >= 10000){
           fuelStatusItem.innerHTML = 'Fuel level high enough for launch';
         } else{
        fuelStatusItem.innerHTML = 'Fuel level too low for launch';
        faultyItems.style.visibility = "visible";
        launchStatusItem.style.color = 'red';
        launchStatusItem.innerHTML= 'Shuttle Not Ready for Launch';
        readyToLaunch = false;
        }
     if(cargoLevel <= 10000){
        cargoStatusItem.innerHTML = 'Cargo mass low enough for launch';
        } else{
        faultyItems.style.visibility = "visible";
        cargoStatusItem.innerHTML = 'Cargo mass too heavy for launch';
        launchStatusItem.style.color = 'red';
        launchStatusItem.innerHTML = 'Shuttle Not Ready for Launch';
        readyToLaunch = false;
      }
      }
      if(readyToLaunch){
        launchStatusItem.innerHTML = 'Shuttle is Ready for Launch';
        launchStatusItem.style.color = 'green';
      }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;