import { submitPlan } from "./fetchAPI";

// const destination = document.getElementById("destination-text");
// const date = document.getElementById("date-arrival-text");
// const highTemp = document.getElementById("high-temp");
// const lowTemp = document.getElementById("low-temp");
// const icon = document.getElementById("icon-weather");

const updateUI = async () => {
    const req = await fetch("/APIData");
    try {
        const projectData = await req.json();

        let imgURL = projectData.pixaBayData;
        let highDeg = projectData.weatherHighTempData;
        let lowDeg = projectData.weatherLowTempData;
        let cityName = projectData.cityName;
        let weatherDescription = projectData.weatherDescriptionData;
        let iconData = projectData.weatherIconData;

        let section = document.querySelector(".travel-information-section");
        let cardElement = document.createElement("div");
        let imageElement = document.createElement("img");
        let headingElement = document.createElement("h3");
        let infoElement = document.createElement("div");
        let city = document.createElement("p");
        let weatherInfo = document.createElement("p");
        let weatherHighDeg = document.createElement("p");
        let weatherLowDeg = document.createElement("p");
        let btnElement = document.createElement("button");
        let icon = document.createElement("img");

        cardElement.className = "card-wrapper";
        imageElement.className = "image-element";
        icon.className = "icon-element";
        headingElement.className = "card-heading";
        infoElement.className = "info-element";
        btnElement.className = "btn";

        headingElement.innerText = "Your destination";
        imageElement.src = imgURL;
        icon.src = `https://www.weatherbit.io/static/img/icons/${iconData}.png`;
        city.innerText = `Place: ${cityName}`;
        weatherInfo.innerText = weatherDescription;
        weatherHighDeg.innerText = `Max Deg: ${highDeg}`;
        weatherLowDeg.innerText = `Min Deg: ${lowDeg}`;

        section.appendChild(cardElement);
        cardElement.append(headingElement, imageElement, infoElement);
        infoElement.append(
            city,
            weatherInfo,
            icon,
            weatherHighDeg,
            weatherLowDeg
        );
    } catch (error) {
        console.log("error", error);
    }
};

export { updateUI };
