import { postData } from "./routing";

// Global Variables / Selectors
let cityName = document.getElementById("input-location").value;
const submitPlan = document.getElementById("submitPlan");
// Global Variables / API DATA
const geonamesUserName = "eddyudacity";
const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;

//Form submission event listener
submitPlan.addEventListener("click", function submitFunc(event) {
    event.preventDefault();
    geonamesAPI();
});
let locationData = {};

// Fetch Geonames API
async function geonamesAPI() {
    await fetch(geonamesURL)
        .then((res) => res.json())
        .then((data) => {
            return (locationData = {
                latitude: data.geonames[0].lat,
                longitude: data.geonames[0].lng,
            });
        })
        .then(() => postData("/apiCalls", locationData));
    console.log(locationData);
}

export { submitPlan };

// async function geonamesAPI() {
//     const res = await fetch(geonamesURL);
//     const locationData = await res.json();
//     console.log(locationData);
//     return locationData;
// }
//         console.log(cityLocation.geonames[0].lat);
//         console.log(cityLocation.geonames[0].lng);
