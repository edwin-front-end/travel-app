import { geonamesAPI } from "./fetchAPI";

const submitPlan = document.getElementById("submitPlan");

//Form submission event listener
submitPlan.addEventListener("click", (event) => {
    event.preventDefault();
    geonamesAPI();
});

export { submitPlan };
