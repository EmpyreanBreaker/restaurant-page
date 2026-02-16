// Grab the site body
const site = document.querySelector(".site");
// Create the page footer
const footer = document.createElement("footer");
footer.classList.add("site-footer");

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
};

const styleFooterElements = () => {
    styleFooter();
    styleAttributionSection();
}

const positionFooter = () => {
    footer.style.display = "flex";
    footer.style.justifyContent = "center";
    footer.style.gap = "5rem";
    footer.style.alignItems = "center";
}

const styleFooter = () => {
    footer.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
    footer.style.borderTop = "1px solid #A7B8A3";
}

const createAttributionSection = () => {
    // Create sections
    const sourceSection = document.createElement("div");
    const creditSection = document.createElement("div");
    const inspirationSection = document.createElement("div");

    // -------- Design --------
    const source = document.createElement("p");
    source.innerHTML = "Designed & built by ";

    const sourceLink = document.createElement("a");
    sourceLink.classList.add("site-footer__link");
    sourceLink.innerHTML = "Fidel Ojimba";
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
    creditLink.classList.add("site-footer__link");
    creditLink.href = "https://unsplash.com/photos/grey-ceramic-mug-with-grey-saucer-SK_6yoHrUTA";
    creditLink.target = "_blank";
    creditLink.rel = "noopener noreferrer";

    credit.append(creditLink);
    creditSection.append(credit);

    // -------- Inspiration --------
    const inspiration = document.createElement("p");
    inspiration.innerHTML = "With gratitude to ";

    const inspirationLink = document.createElement("a");
    inspirationLink.classList.add("site-footer__link");
    inspirationLink.innerHTML = "The Odin Project";
    inspirationLink.href = "https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page";
    inspirationLink.target = "_blank";
    inspirationLink.rel = "noopener noreferrer";

    inspiration.append(inspirationLink);
    inspirationSection.append(inspiration);

    // Append to footer
    footer.append(sourceSection, creditSection, inspirationSection);
};

const styleAttributionSection = () => {
    const links = document.querySelectorAll(".site-footer__link");

    // Default Styling
    links.forEach(link => {
        link.style.textDecoration = "none";
        link.style.borderBottom = "1px solid transparent";
        link.style.color = "#A7B8A3";


        link.addEventListener("mouseenter", () => {
            link.style.borderBottom = "1px solid #F5F1E8";
        })

        link.addEventListener("mouseleave", () => {
            link.style.borderBottom = "1px solid transparent";
        })
    })
}

export { footerContent };