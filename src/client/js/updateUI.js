import { submitPlan } from "./fetchAPI";

// const destination = document.getElementById("destination-text");
// const date = document.getElementById("date-arrival-text");
// const highTemp = document.getElementById("high-temp");
// const lowTemp = document.getElementById("low-temp");
// const icon = document.getElementById("icon-weather");
const img = document.getElementById("location-img");

const updateUI = async () => {
    const req = await fetch("/APIData");
    try {
        const projectData = await req.json();

        document.getElementById("destination-text").innerHTML =
            projectData.weatherDescriptionData;
        document.getElementById("date-arrival-text").innerHTML =
            projectData.weatherDateTimeData;
        document.getElementById("high-temp").innerHTML =
            projectData.weatherHighTempData;
        document.getElementById("low-temp").innerHTML = projectData.lowTempData;
        document.getElementById("icon-weather").innerHTML =
            projectData.weatherIconData;
        // document.getElementById("location-img").innerHTML =
        //     projectData.pixaBaydata;
        img.src = projectData.pixaBaydata;
    } catch (error) {
        console.log("error", error);
    }
};

export { updateUI };
