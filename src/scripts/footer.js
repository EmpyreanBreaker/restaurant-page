// Grab the site body
const site = document.querySelector(".site");
// Create the page footer
const footer = document.createElement("footer");

const footerContent = () => {
    // Create footer elements
    createFooterElements();

    // Position footer elements
    positionFooterElements();

    // Style footer elements
    styleFooterElements();
}

const createFooterElements = () => {
    // Append the footer
    site.appendChild(footer);

    // Create attribution section
    createAttributionSection();
}

const positionFooterElements = () => {
    positionFooter();
    positionAttributionSection();
};

const styleFooterElements = () => {
    styleFooter();
    styleAttributionSection();
}

const positionFooter = () => {
}

const styleFooter = () => {
    // Apply footer Styling
    footer.style.borderTop = "1px solid #E69B97";
}

const createAttributionSection = () => {
    // Create sections
    const sourceSection = document.createElement("div");
    const creditSection = document.createElement("div");
    const inspirationSection = document.createElement("div");

    // -------- Design --------
    const source = document.createElement("p");
    source.innerHTML = "Quietly designed & built by ";

    const sourceLink = document.createElement("a");
    sourceLink.innerHTML = "Maion Mihael";
    sourceLink.href = "https://github.com/EmpyreanBreaker/restaurant-page";
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";

    source.append(sourceLink);
    sourceSection.append(source);

    // -------- Background Photo --------
    const credit = document.createElement("p");
    credit.innerHTML = "Atmosphere captured by ";

    const creditLink = document.createElement("a");
    creditLink.innerHTML = "Gaby Baldiskaite";
    creditLink.href = "https://unsplash.com/photos/grey-ceramic-mug-with-grey-saucer-SK_6yoHrUTA";
    creditLink.target = "_blank";
    creditLink.rel = "noopener noreferrer";

    credit.append(creditLink);
    creditSection.append(credit);

    // -------- Inspiration --------
    const inspiration = document.createElement("p");
    inspiration.innerHTML = "With gratitude to ";

    const inspirationLink = document.createElement("a");
    inspirationLink.innerHTML = "The Odin Project";
    inspirationLink.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
    inspirationLink.target = "_blank";
    inspirationLink.rel = "noopener noreferrer";

    inspiration.append(inspirationLink);
    inspirationSection.append(inspiration);

    // Append to footer
    footer.append(sourceSection, creditSection, inspirationSection);
};


const classAdder = (...elements) => {
    elements.forEach(element => {
        if (!element || !element.classList) {
            return;
        }
        element.classList.add("site-footer__attribution")
    });
};

const positionAttributionSection = () => {

}

const styleAttributionSection = () => {

}

export { footerContent };