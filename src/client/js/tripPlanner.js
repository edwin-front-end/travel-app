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
        let cityName = document.getElementById("input-location").value;
        const geonamesUserName = "eddyudacity";
        const geonamesURL = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${geonamesUserName}`;
        try {
            const response = await fetch(geonamesURL);
            cityLocation = await response.json();
            const latitude = cityLocation.geonames[0].lat;
            const longitude = cityLocation.geonames[0].lng;
        } catch (error) {
            console.log("error");
        }
    }

    getLocationsData();
}

//*** day counter

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Sep 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(
                distance / day
            )),
                (document.getElementById("hours").innerText = Math.floor(
                    (distance % day) / hour
                )),
                (document.getElementById("minutes").innerText = Math.floor(
                    (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                    (distance % minute) / second
                ));

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerText = "It's my birthday!";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0);
})();
