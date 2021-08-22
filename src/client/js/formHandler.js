document.getElementById("submitPlan").addEventListener("click", submitFunc);

function submitFunc(event) {
    event.preventDefault();
    console.log("click");
    //*** API call
    let locationData = {};
    let cityName = document.getElementById("input-location").value;

    const geonamesUserName = "eddyudacity";
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;

    (async (URL) => {
        const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
        const res = await fetch(geonamesURL);

        const locationData = await res.json();
        console.log(locationData);
    })();
}

export { submitFunc };
