import {APIKEY} from "./environment.js";

// this is a built in api that will allow the user to get their current location upon accepting the prompt

// the navigator returns the geo location object and get current position returns the current position of the user

// think of this an if else statement if the user accepts it is successful if not its an error
// navigator.geolocation.getCurrentPosition(success, errorFunc);

// example of a geo location object
// {
//     coords: {
//         latitude: 37.7749;
//         longitude: -122.4194;
//     }
// }

// function success(position){
//     let LAT = position.coords.latitude;
//     let LONG = position.coords.longitude;
//     apiCall();
// }

// function errorFunc(error){
//     console.log(error.message);
// }

// async function apiCall(){
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${APIKEY}`);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }

navigator.geolocation.getCurrentPosition(function(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    async function apiCall(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`);
        const data = await response.json();
        console.log(data);
        return data;
    }
    apiCall();
});