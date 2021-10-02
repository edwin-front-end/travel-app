import { postData } from "./postFunc";
import { updateUI } from "./updateUI";

const submitPlan = document.getElementById("submitPlan");

let geoNamesData = {};
let weatherData = {};
let pixaBayData = {};
let projectData = {};

//Form submission event listener
submitPlan.addEventListener("click", async (event) => {
    event.preventDefault();

    let cityName = document.getElementById("input-location").value;
    const geoNamesUserName = "eddyudacity";
    const geoNamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geoNamesUserName}`;
    const weatherBit_API_KEY = "0b1f8dc81435467e94fbd1e890247ac9";
    const pixabay_API_KEY = "13550549-5127aa79732ce2a8df476eff6";

    // Fetch geonames API
    await fetch(geoNamesURL)
        .then((res) => res.json())
        .then((data) => {
            return (geoNamesData = {
                lat: data.geonames[0].lat,
                lon: data.geonames[0].lng,
            });
        });

    // Fetch weatherBit API
    const weatherBitApiURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${weatherBit_API_KEY}&lat=${geoNamesData.lat}&lon=${geoNamesData.lon}`;

    await fetch(weatherBitApiURL)
        .then((res) => res.json())
        .then((data) => {
            weatherData = {
                weatherDescription: data.data[0].weather.description,
                weatherIcon: data.data[0].weather.icon,
                weatherHighTemp: data.data[0].high_temp,
                weatherLowTemp: data.data[0].low_temp,
                weatherDateTime: data.data[0].datetime,
                cityName: data.city_name,
            };
        });

    // Fetch pixabay API
    const pixabayURL = `https://pixabay.com/api/?key=${pixabay_API_KEY}&q=city+${cityName}`;

    await fetch(pixabayURL)
        .then((res) => res.json())
        .then((data) => {
            pixaBayData = { imgURL: data.hits[0].webformatURL };
        })
        .then(() => {
            projectData = {
                cityName: weatherData.cityName,
                weatherDescriptionData: weatherData.weatherDescription,
                weatherIconData: weatherData.weatherIcon,
                weatherHighTempData: weatherData.weatherHighTemp,
                weatherLowTempData: weatherData.weatherLowTemp,
                weatherDateTimeData: weatherData.weatherDateTime,
                pixaBayData: pixaBayData.imgURL,
            };

            // post data to server
            // postData("http://localhost:3000/APICalls", projectData);
        })
        .then(() => postData("http://localhost:3000/APICalls", projectData))
        .then(updateUI);
});

export { submitPlan };
