// Grab header
const header = document.querySelector(".site-header");
// Grab nav
const nav = document.querySelector(".site-nav");
// Grab content space
const contentSpace = document.querySelector(".site-content");

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

const navigation = (showHomeContent, showMenuContent, showAboutContent) => {
    nav.addEventListener("click", (e) => {
        const navButton = e.target.closest(".site-nav__button");
        // If invalid, do nothing
        if (!navButton) {
            return;
        }

        // Wipe out content space
        contentSpace.innerHTML = "";

        if (navButton.textContent == "Home") {
            showHomeContent();
        }
        else if (navButton.textContent == "Menu") {
            showMenuContent();
        }
        else {
            showAboutContent();
        }
    });
}

export { headerContent, navigation };