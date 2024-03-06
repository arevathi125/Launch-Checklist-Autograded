// Write your helper functions here!
   require('cross-fetch/polyfill');

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
        missionTarget.innerHtml = `
        <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
        `
 }
 
 function validateInput(testInput) {
    if (testInput === ""){
      return "Empty" ;
    }
    if(isNaN(testInput)){
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

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty"
           || validateInput(cargoLevel) === "Empty"){
            readyToLaunch = false;
          alert("All fields are  required!");
     }
   
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number"
      || validateInput(cargoLevel) === "Not a Number"){
        readyToLaunch = false;
        alert("Make sure to enter valid information for each field!");
      }

      else{
        pilotStatusItem.innerHtml = `Pilot ${pilot} is ready for Launch`;
        copilotStatusItem.innerHtml = `Co-pilot ${copilot} is ready for launch`;
        if(fuelLevel >= 10000){
         fuelStatusItem.innerHtml = `Fuel level high enough for launch`;
        }
     else{
        fuelStatusItem.innerHtml = `Fuel level too low for launch`;
        faultyItems.style.visibility = "visible";
        launchStatusItem.innerHtml = `Shuttle not ready for launch`;
        launchStatusItem.style.color = 'red';
        readyToLaunch = false;
        }
     if(cargoLevel < 10000){
        cargoStatusItem.innerHtml = `Cargo mass low for the shuttle to take off`;
      }
     else{
        faultyItems.style.visibility = "visible";
        cargoStatusItem.innerHtml = `there is too much mass for the shuttle to take off`;
        launchStatusItem.innerHtml = `Shuttle not ready for launch`;
        launchStatusItem.style.color = 'red';
        readyToLaunch = false;
      }
      }
      if(readyToLaunch){
        launchStatusItem.innerHtml = `Shuttle is ready for launch`;
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