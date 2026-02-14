// Grab the site body
const site = document.querySelector(".site");

const footerContent = () => {
    // Create footer elements
    createFooterElements();

    // Position footer elements
    positionFooterElements();

    // Style footer elements
    styleFooterElements();
}

const createFooterElements = () => {
    // Create the page footer
    const footer = document.createElement("footer");
    footer.classList.add("site-footer");

    // Create a text holder
    const textHolder = document.createElement("h1");
    textHolder.innerHTML = "Testing";
    footer.appendChild(textHolder);

    // Append the footer
    site.appendChild(footer);
}

const positionFooterElements = () => { };

const styleFooterElements = () => {
    const footer = document.querySelector(".site-footer");
    // Apply footer Styling
    footer.style.borderTop = "1px solid #E69B97";
}

export { footerContent };