import {APIKEY} from "./environment.js";

// this is a built in api that will allow the user to get their current location upon accepting the prompt

// the navigator returns the geo location object and get current position returns the current position of the user

// think of this an if else statement if the user accepts it is successful if not its an error
navigator.geolocation.getCurrentPosition(success, errorFunc);

// example of a geo location object
{
    coords: {
        latitude: 37.7749;
        longitude: -122.4194;
    }
}

function success(position){
    console.log(position);
    console.log(`our latitude is ${position.coords.latitude}`);
    console.log(`our longitude is ${position.coords.longitude}`);
    console.log("now we know where you are!");
}

function errorFunc(error){
    console.log(error.message);
}

async function apiCall(){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.9577&lon=-121.2908&appid=${APIKEY}`);
    const data = await response.json();
    console.log(data);
    return data;
}

apiCall();