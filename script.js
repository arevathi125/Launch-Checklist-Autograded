// const { validateInput, formSubmission, myFetch } = require("./scriptHelper");

// const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

// Write your JavaScript code here!
  let form = document.querySelector("form");
window.addEventListener("load", function() {
    form.addEventListener("submit",event =>{
        event.preventDefault();
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myrandomPlanet = pickPlanet(listedPlanets);
    //    let name = mypickedPlanet.name;
    //    let diameter = mypickedPlanet.diameter;
    //    let star = pickPlanet.star;
    //    let distance = pickPlanet.distance;
    //    let moons = pickPlanet.moons;
    //    let imageUrl = pickPlanet.imageUrl;
    let { name, diameter, star, distance, moons, image } = myrandomPlanet;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
    
 });