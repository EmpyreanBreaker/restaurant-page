import bg from "../images/background/matcha-tea.webp";

// Grab site
const site = document.querySelector(".site");

const createSiteElements = () => {
    positionSiteElements();
    styleSiteElements();
}

// Set site positioning
const positionSiteElements = () => {
    site.style.width = "100vw";
    site.style.height = "100vh";
    site.style.display = "grid";
    site.style.gridTemplateRows = "1fr 8fr 1fr";
}

// Set site styling
const styleSiteElements = () => {
    // Set the background image for the site
    site.style.backgroundImage = `url(${bg})`;
    site.style.backgroundSize = "cover";
    site.style.backgroundRepeat = "no-repeat";
}

export { createSiteElements };