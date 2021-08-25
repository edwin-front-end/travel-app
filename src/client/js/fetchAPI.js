import { postData } from "./routing";

const submitPlan = document.getElementById("submitPlan");
let locationData = {};

//Form submission event listener
submitPlan.addEventListener("click", (event) => {
    event.preventDefault();

    let cityName = document.getElementById("input-location").value;
    const geonamesUserName = "eddyudacity";
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
    const API_KEY = "0b1f8dc81435467e94fbd1e890247ac9";
    const weatherbitApiURL = `https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&lat=${locationData.lat}&lon=${locationData.lon}`;

    async function geonamesAPI() {
        await fetch(geonamesURL)
            .then((res) => res.json())
            .then((data) => {
                return (locationData = {
                    lat: data.geonames[0].lat,
                    lon: data.geonames[0].lng,
                });
            });
        // .then(() => postData("/apiCalls", locationData));

        await fetch(weatherbitApiURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
    geonamesAPI();
});

// Fetch Geonames API

export { submitPlan };
