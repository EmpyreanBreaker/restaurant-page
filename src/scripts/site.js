import bg from "../images/background/matcha-tea.webp";

// Grab the site body
const site = document.querySelector(".site");

// Set site positioning
const sitePositioning = () => {
    site.style.width = "100vw";
    site.style.height = "100vh";
    site.style.display = "grid";
    site.style.gridTemplateRows = "1fr 8fr 1fr";
}

// Set site styling
const siteStyling = () => {
    // Set the background image for the site
    site.style.backgroundImage = `url(${bg})`;
    site.style.backgroundSize = "cover";
    site.style.backgroundRepeat = "no-repeat";
}

export { sitePositioning, siteStyling };