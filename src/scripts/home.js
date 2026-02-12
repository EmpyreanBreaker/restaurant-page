// Grab home element
const home = document.querySelector(".site-main");
// Create banners
const leftBanner = document.createElement("section");
const rightBanner = document.createElement("section");


const homePageContent = () => {
    // Add Home Elements
    createHomeElements();

    // Style Home Elements
    styleHomeElements();

    // Position Home Elements
    positionHomeElements();

    // Make home a grid
    home.style.display = "grid";
    home.style.gridTemplateColumns = "1fr 1fr";
}

const styleHomeElements = () => {
    // Style banners
    styleLeftBanner();
    styleRightBanner();
};

const positionHomeElements = () => {
    // Position Banners
    positionLefttBanner();
    positionRightBanner();
};

const createHomeElements = () => {
    leftBanner.classList.add("site-home__banner", "site-home__left-banner");

    // Create container for Welcome message
    const welcomeContainer = document.createElement("div");
    welcomeContainer.classList.add("site-home__welcome-container");

    // Create welcome message
    const welcome = document.createElement("h1");
    welcome.classList.add("site-home__welcome");
    welcome.innerHTML = "Welcome!";

    // Create container for invitation message
    const invitationContainer = document.createElement("div");
    invitationContainer.classList.add("site-home__invitation-container");

    // Create invitation message
    const invitation = document.createElement("h1");
    invitation.classList.add("site-home__invitation");
    invitation.innerHTML = "Join Us & Have";

    // Append to welcome container
    welcomeContainer.append(welcome);
    invitationContainer.append(invitation);

    // Append to left banner
    leftBanner.append(welcomeContainer);
    leftBanner.append(invitationContainer);

    rightBanner.classList.add("site-home__banner", "site-home__right-banner");

    // Create container for site name
    const restaurantContainer = document.createElement("div");
    restaurantContainer.classList.add("site-home__restaurant-container");

    // Create site name
    const restaurantTitle = document.createElement("h1");
    restaurantTitle.classList.add("site-home__restaurant-title");
    restaurantTitle.innerHTML = "A Little Sip";

    // Append to restaurant container
    restaurantContainer.append(restaurantTitle);

    // Append to right banner
    rightBanner.append(restaurantContainer);

    // Add both elements to home
    home.appendChild(leftBanner);
    home.appendChild(rightBanner);
}

const styleLeftBanner = () => {
    leftBanner.style.borderRight = "1px solid white";
    leftBanner.style.background = "#000000";
    leftBanner.style.opacity = "0.3";
     leftBanner.style.padding = "10px";
};

const positionLefttBanner = () => {
    leftBanner.style.display = "flex";
    leftBanner.style.flexDirection = "column";
    leftBanner.style.justifyContent = "center";
    leftBanner.style.alignItems = "flex-end";
   
};

const styleRightBanner = () => {
    rightBanner.style.backgroundColor = "#000000";
    rightBanner.style.opacity = "0.3";
    rightBanner.style.padding = "10px";
};

const positionRightBanner = () => {
    rightBanner.style.display = "flex";
    rightBanner.style.flexDirection = "column";
    rightBanner.style.justifyContent = "center";

}

export { homePageContent };