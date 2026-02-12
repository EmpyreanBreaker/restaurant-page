// Grab site content element
const menu = document.querySelector(".site-content");
// Create banners
const menuBanner = document.createElement("site-menu__section");

const createMenuElements = () => {
    // Append menuBanner to menu
    menu.appendChild(menuBanner);
}

const positionMenuBanner = () => {
    // rightBanner.style.display = "flex";
    // rightBanner.style.flexDirection = "column";
    // rightBanner.style.justifyContent = "center";

}

const styleMenuBanner = () => {
    menuBanner.style.backgroundColor = "#000000";
    menuBanner.style.opacity = "0.3";
};

const positionMenuElements = () => {
    // Make the menu content a grid
    menu.style.display = "grid";
    menu.style.gridTemplateColumns = "1fr";

    // Position Banner
    positionMenuBanner();
};

const styleMenuElements = () => {
    // Style banners
    styleMenuBanner();
};

const menuPageContent = () => {
    // Add Menu Elements
    createMenuElements();

    // Position Menu Elements
    positionMenuElements();

    // Style Menu Elements
    styleMenuElements();
}

export { menuPageContent };