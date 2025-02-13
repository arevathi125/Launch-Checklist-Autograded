// const { validateInput, formSubmission, myFetch } = require("./scriptHelper");

// const { addDestinationInfo, pickPlanet } = require("./scriptHelper");

// Write your JavaScript code here!

//const helper = require("./scriptHelper");

window.addEventListener("load", function() {
   // let document = document;
    let form = document.querySelector("form");
    form.addEventListener("submit",event =>{
        event.preventDefault();
        
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        //helper. formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    //let listedPlanetsResponse = helper.myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        //console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myrandomPlanet = pickPlanet(listedPlanets);
       //let myrandomPlanet = helper.pickPlanet(listedPlanets);
       //console.log(myrandomPlanet);
       
       let name = myrandomPlanet.name;
       let diameter = myrandomPlanet.diameter;
       let star = myrandomPlanet.star;
       let distance = myrandomPlanet.distance;
       let moons = myrandomPlanet.moons;
       let imageUrl = myrandomPlanet.image;
      
    //let { name, diameter, star, distance, moons, image } = myrandomPlanet;
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    //helper. addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
      })
    
 });