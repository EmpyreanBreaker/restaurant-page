// Grab content space
const home = document.querySelector(".site-content");
// Create banners
const leftBanner = document.createElement("site-home__banner");
const rightBanner = document.createElement("site-home__banner");

// Clear module scoped variables to prevent building old elements on the new
const clearModuleScopedElements = () => {
    home.replaceChildren();

    leftBanner.replaceChildren();

    rightBanner.replaceChildren();
}

const homePageContent = () => {
    clearModuleScopedElements();
    // Add Home Elements
    createHomeElements();

    // Position Home Elements
    positionHomeElements();

    // Style Home Elements
    styleHomeElements();
}

const positionHomeElements = () => {
    // Make the home content a grid
    home.style.display = "grid";
    home.style.gridTemplateColumns = "1fr 1fr";

    // Position Banners
    positionLeftBanner();
    positionRightBanner();
};

const styleHomeElements = () => {
    // Style banners
    styleLeftBanner();
    styleRightBanner();
};

const createHomeElements = () => {
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
};

const positionLeftBanner = () => {
    leftBanner.style.display = "flex";
    leftBanner.style.flexDirection = "column";
    leftBanner.style.justifyContent = "center";
    leftBanner.style.alignItems = "flex-end";
};

const styleLeftBanner = () => {
    leftBanner.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    leftBanner.style.paddingRight = "1rem";
};

const positionRightBanner = () => {
    rightBanner.style.display = "flex";
    rightBanner.style.flexDirection = "column";
    rightBanner.style.justifyContent = "center";
    rightBanner.style.alignItems = "flex-start";
};

const styleRightBanner = () => {
    rightBanner.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    rightBanner.style.paddingLeft = "1rem";
};

export { homePageContent };