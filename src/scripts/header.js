// Grab page header
const header = document.querySelector(".site-header");
// Grab nav
const nav = document.querySelector(".site-nav");

const headerContent = () => {
    positionHeaderElements();
    styleHeaderElements();
};

const positionHeaderElements = () => {
    positionHeader();
    positionNav();
};

const styleHeaderElements = () => {
    styleHeader();
};

const positionHeader = () => {
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
}

const styleHeader = () => {
    // Apply header Styling
    header.style.borderBottom = "1px solid #E69B97";
}

const positionNav = () => {
    nav.style.display = "flex";
    nav.style.gap = "10rem";
};

export { headerContent };