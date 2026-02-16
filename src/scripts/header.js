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
    styleNav();
    styleButtons();
};

const positionHeader = () => {
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
}

const styleHeader = () => {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    header.style.borderBottom = "1px solid #7A9A8B";
}

const positionNav = () => {
    nav.style.display = "flex";
    nav.style.gap = "10rem";
};

const styleNav = () => { };

const styleButtons = () => {
    const buttons = document.querySelectorAll(".site-nav__button");

    // Default style
    buttons.forEach(button => {
        button.style.background = "transparent";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.color = "#F5F1E8";
        button.style.borderBottom = "1px solid transparent"

        // Hover style
        button.addEventListener("mouseenter", () => {
            button.style.color = "#A7B8A3";
            button.style.borderBottom = "1px solid #A7B8A3";
        });

        button.addEventListener("mouseleave", () => {
            button.style.color = "#F5F1E8";
            button.style.borderBottom = "1px solid transparent"
        })
    })
}

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