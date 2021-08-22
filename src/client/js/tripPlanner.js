/* TO DO: 

    - Fetch API (weather & image)
    - Fetch user data
    - Feature add notes for the trip
    - Feature to see how many days left for the trip 


*/

//*** 1. Create an event listener that will listen when the submit button is clicked
//*** 2. Send the data to the API
//*** 3. Render data on cards created dynamically
// import { submitFunc } from "./formHandler";

// document.getElementById("submitPlan").addEventListener("click", submitFunc);

// function submitFunc(event) {
//     event.preventDefault();

//     //*** API call
//     console.log("btn clicked");
//     let locationData = {};
//     let cityName = document.getElementById("input-location").value;

//     const geonamesUserName = "eddyudacity";
//     const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;

//     const getLocation = async (URL) => {
//         const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
//         const res = await fetch(geonamesURL);
//         try {
//             const locationData = await res.json();
//             console.log(locationData);
//             return locationData;
//         } catch (error) {
//             console.log("error", error);
//         }
//         console.log(locationData);
//     };

//     getLocation();

// }

// Async function to fetch data from API and translated in a JSON format

// Async function to Post data on the server
// const postData = async (url = "", data = {}) => {
//     console.log(data);
//     const response = await fetch(url, {
//         method: "POST",
//         credentials: "same-origin",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     });
//     try {
//         const locationData = await response.json();
//         // console.log(locationData);
//     } catch {
//         console.log("error", error);
//     }
// };

// async function getLocationsData() {
//     let cityLocation = {};
//     let cityName = document.getElementById("input-location").value;
//     const geonamesUserName = "eddyudacity";
//     const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
//     try {
//         const response = await fetch(geonamesURL);
//         cityLocation = await response.json();
//         console.log(cityLocation.geonames[0].lat);
//         console.log(cityLocation.geonames[0].lng);
//     } catch (error) {
//         console.log("error");
//     }
// }
// getLocation(geonamesURL).then((data) => {
//     postData("/location", {
//         latitude: data.geonames[0].lat,
//         longitude: data.geonames[0].lng,
//     }).then(() => {});
//     // .then(updateUI());
// });
