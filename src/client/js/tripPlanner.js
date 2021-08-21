/* TO DO: 

    - Fetch API (weather & image)
    - Fetch user data
    - Feature add notes for the trip
    - Feature to see how many days left for the trip 


*/

//*** 1. Create an event listener that will listen when the submit button is clicked
//*** 2. Send the data to the API
//*** 3. Render data on cards created dynamically

document.getElementById("submitPlan").addEventListener("click", submitFunc);

function submitFunc(event) {
    event.preventDefault();

    // Get locations from API
    async function getLocationsData() {
        let cityLocation = {};
        let cityName = "london";
        const geonamesUserName = "eddyudacity";
        const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
        try {
            const response = await fetch(geonamesURL);
            cityLocation = await response.json();
            console.log(cityLocation);
        } catch (error) {
            console.log("error");
        }
    }

    getLocationsData();
}

// export { submitHandler };
