// Grab page header
const header = document.querySelector(".site-header");
// Grab nav
const nav = document.querySelector(".site-nav");

const headerContent = () => {
    positionHeaderElements();
    styleHeaderElements();
};

const positionHeaderElements = () => {
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    positionNavElements();
};

const positionNavElements = () => {
    nav.style.display = "flex";
    nav.style.gap = "10rem";
};

const styleHeaderElements = () => {
    // Apply header Styling
    header.style.borderBottom = "1px solid #E69B97";
};

export { headerContent };